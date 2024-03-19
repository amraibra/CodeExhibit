<template>
  <div class="flex">
    <div class="w-64 bg-cyan-950 text-white p-5 space-y-6 h-screen overflow-auto">
      <a href="/home" class="flex mt-2">
        <i class="fas fa-home mr-3 mt-2"></i>
      <h2 class="text-2xl font-semibold font-londrina text-custom-orange">CodeExhibit</h2>
      </a>
      <ul>
        <li v-for="year in years" :key="year.text" class="group">
          <router-link
            to="#"
            @click.prevent="toggleYear(year.text)"
            class="flex items-center justify-between py-2 px-3 rounded hover:bg-custom-blue font-bold"
          >
            <span class="my-5">{{ year.text }}</span>
            <i :class="year.icon"></i>
          </router-link>
          <ul v-if="year.open" class="pl-4 space-y-3">
            <li v-for="item in year.items" :key="item">
              <router-link
                to="#"
                class="block py-1 px-2 rounded hover:bg-custom-blue font-bold"
              >{{ item }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--Main-->
    <div class="flex-1 p-5 bg-custom-blue overflow-auto">
      <div class="w-full h-1/6 bg-cyan-950 text-center justify-between items-center flex
      text-4xl font-mono font-bold shadow-2xl">
        <div class="flex-grow text-center ml-8">Showcase Projects</div>
        <div class="text-sm mr-8">
          <div v-if="!isAuthenticated">
    <input type="password" v-model="inputPassword" placeholder="Enter password to add projects">
    <button @click="verifyPassword">Submit</button></div>
  <div v-if="isAuthenticated">
    <a href="/form" class="bg-custom-orange p-2 rounded-2xl font-mono font-bold">
            <i class="fas fa-plus w-5"></i>
            </a>
  </div>
            
          </div>
      </div>
      <div class="bg-custom-gray w-full h-full mt-10 flex flex-col items-center">
        <div class="flex w-full justify-between items-center px-20 mt-10">
          <div class="flex-grow">
            <h3 class="font-mono mt-1 ml-36 text-custom-blue font-extrabold text-2xl">Highlighted Projects</h3>
          </div>
          <div class="flex items-center">
            <<input type="text" id="search-input" v-model="searchQuery" placeholder="Search..." class="bg-gray-50 border-2 border-custom-orange rounded-l w-96 text-black p-1 font-mono">
            <i class="fas fa-search text-black ml-3 mt-2 text-lg"></i>
          </div>
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
        <div class="mt-8 ">
          <div class="grid grid-cols-3 gap-4 text-black">
            <div v-for="project in filteredProjects" :key="project.name" class="bg-white p-4 rounded-lg shadow-lg">
              <h4 class="font-semibold">{{ project.projectName }}</h4>
              <p>{{ project.projectDescription }}</p>
              <p>{{ project.memberNames }}</p>
              <p>{{ project.semesterType }}</p>
              <p>{{ project.className }}</p>
              <a :href="project.githubLink" target="_blank">GitHub Link</a><br>
              <a :href="project.powerpoint" target="_blank">PowerPoint Link</a>
              <button @click="removeProject(project)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { database } from '../firebase'; // Your existing import
import { ref as databaseRef, get, child, remove } from 'firebase/database';

export default {
  data() {
    return {
      projects: [],
      years: [
        { text: 'Project Type', icon: 'fas fa-chevron-right', open: false, items: ['Social Media', 'Games', 'Web Application', 'Mobile Application', 'Other' ]},
        { text: 'Year', icon: 'fas fa-chevron-right', open: false, items: ['2024', '2023', '2022', '2021'] },
        { text: 'Semester', icon: 'fas fa-chevron-right', open: false, items: ['Spring 2024', 'Fall 2023', 'Spring 2023', 'Fall 2022'] },
        { text: 'Class', icon: 'fas fa-chevron-right', open: false, items: ['Software Engineering Project', 'Junior Software Engineering', 'Sophomore Software Engineering', 'Intro to Programming'] }
      ],
      searchQuery: '',
      inputPassword: '',
    isAuthenticated: false,
    correctPassword: 'tempadmin', // 
    };
  },
  methods: {
    verifyPassword() {
    if (this.inputPassword === this.correctPassword) {
      this.isAuthenticated = true;
    } else {
      alert('Incorrect password');
      this.inputPassword = ''; // Reset input field after incorrect password
    }
  },

    toggleYear(year) {
      const foundYear = this.years.find(y => y.text === year);
      if (foundYear) {
        foundYear.open = !foundYear.open;
      }
    },
    removeProject(project) {
  const projectKey = project.projectName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const projectRef = databaseRef(database, `projects/${projectKey}`);
  remove(projectRef).then(() => {
    // Remove the project from the local array
    this.projects = this.projects.filter(p => p.projectName !== project.projectName);
    console.log('Project removed successfully');
  }).catch((error) => {
    console.error('Error removing project: ', error);
  });
},
    fetchProjects() {
      const projectsRef = databaseRef(database, 'projects/');
      get(projectsRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.projects = Object.keys(data).map(key => ({
            ...data[key],
            id: key,
          }));
          console.log(this.projects);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  computed: {
    // Define your computed properties here
    filteredProjects() {
      if (!this.searchQuery) {
        return this.projects; // Return all projects if there is no search query
      }
      return this.projects.filter(project => {
        // Adjust the filtering logic based on your project structure
        return project.projectName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               project.semesterType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               project.memberNames.toLowerCase().includes(this.searchQuery.toLowerCase())
        
      });
    }
  },
  mounted() {
    this.fetchProjects();
  },
  
}
</script>