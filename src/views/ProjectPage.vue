<template>
  <div class="flex h-screen">
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
            class="flex items-center justify-between py-2 px-3 rounded hover:bg-custom-blue font-bold font-mono"
          >
            <span class="my-5">{{ year.text }}</span>
            <i :class="year.icon"></i>
          </router-link>
          <ul v-if="year.open" class="pl-4 space-y-3 font-mono">
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
    <div class="flex-1 p-8 bg-custom-blue overflow-y-auto">
      <div class="w-full h-1/6 bg-cyan-950 text-center justify-between items-center flex
      text-4xl font-mono font-bold shadow-2xl">
        <div class="flex-grow text-center ml-8">Showcase Projects</div>
        <div class="text-sm mr-8">
            <a href="/form" class="bg-custom-orange p-2 rounded-2xl font-mono font-bold">
            <i class="fas fa-plus w-5"></i>
            </a>
          </div>
      </div>
      <div class="bg-custom-gray mt-10 flex flex-col items-center pb-10">
        <div class="flex justify-between items-center px-20 mt-10">
          <div class="flex-grow mr-20">
            <h3 class="font-mono mt-1 ml-36 text-custom-blue font-extrabold text-2xl">Highlighted Projects</h3>
          </div>
          <div class="flex items-center">
            <input type="text" id="search-input" placeholder="Search..." class="bg-gray-50 border-2 border-custom-orange rounded-l
            w-96 text-black p-1 font-mono">
            <i class="fas fa-search text-black ml-3 mt-2 text-lg"></i>
          </div>
        </div>
          <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
          <div class="mt-8">
            <div class="grid grid-cols-3 gap-4 text-black">
              <div v-for="project in projects" :key="project.name" class="flip-card w-[21rem] h-96">
                <div class="flip-card-inner">
                  <div class="flip-card-front bg-white rounded-lg p-5">
                    <img src="/default.png" alt="defaulpic" class="w-auto h-auto">
                    <h4 class="font-extrabold pb-5">{{ project.projectName }}</h4>
                    <p>{{ project.projectDescription }}</p>
                  </div>
                  <div class="flip-card-back bg-white rounded-lg p-5 space-y-5">
                    <p><b>Member Names:</b> {{ project.memberNames }}</p>
                    <p><b>Semester:</b> {{ project.semesterType }}</p>
                    <p><b>Class Name:</b> {{ project.className }}</p>
                      <div>
                      <a :href="project.githubLink" target="_blank" class="text-custom-orange font-bold">GitHub Link</a><br>
                      <a :href="project.powerpoint" target="_blank" class="text-custom-orange font-bold">PowerPoint Link</a>
                      </div>
                      <div>
                        <button @click="removeProject(project)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-20">Delete</button>
                      </div>
                    </div>
                </div>
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
    };
  },
  methods: {
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
  mounted() {
    this.fetchProjects();
  },
}
</script>

<style>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  cursor: pointer;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

</style>