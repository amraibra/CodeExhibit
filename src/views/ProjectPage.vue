<template>
  <div class="wrapper">
    <div class="sidebar">
      <h2>Code Exhibit</h2>
      <!-- Optionally include navigation or other sidebar content here -->
    </div>
    <div class="main_content">
      <div v-for="project in projects" :key="project.id" class="project-details">
        <h3>{{ project.name }}</h3>
        <p><strong>Description:</strong> {{ project.description }}</p>
        <p><strong>GitHub:</strong> <a :href="project.github" target="_blank">{{ project.github }}</a></p>
        <p><strong>Members:</strong> {{ project.members }}</p>
        <p><strong>Powerpoint:</strong> <a :href="project.powerpoint" target="_blank">View Presentation</a></p>
        <p><strong>Semester:</strong> {{ project.semester }}</p>
        <p><strong>Type:</strong> {{ project.type }}</p>
        <div v-if="project.imagesUrls && project.imagesUrls.length">
          <img v-for="url in project.imagesUrls" :src="url" :key="url" :alt="`Image for ${project.name}`" class="project-image" />
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
        <div class="mt-8 ">
          <div class="grid grid-cols-3 gap-4 text-black">
            <div v-for="project in projects" :key="project.name" class="bg-white p-4 rounded-lg shadow-lg">
              <h4 class="font-semibold">{{ project.projectName }}</h4>
              <p>{{ project.projectDescription }}</p>
              <p>{{ project.memberNames }}</p>
              <p>{{ project.semesterType }}</p>
              <p>{{ project.className }}</p>
              <a :href="project.githubLink" target="_blank">GitHub Link</a><br>
              <a :href="project.powerpoint" target="_blank">PowerPoint Link</a>
            </div>
          </div>
        </div>

      </div>
      <div v-if="projects.length === 0">
        <p>No projects to display.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { database } from '../firebase'; // Your existing import
import { ref as databaseRef, get, child } from 'firebase/database';

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
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      const projectsRef = firebaseRef(database, 'Projects');
      onValue(projectsRef, async (snapshot) => {
        const projectsData = snapshot.val();
        const projects = await Promise.all(Object.keys(projectsData).map(async (key) => {
          const project = projectsData[key];
          const imagesUrls = await this.fetchProjectImages(project.Images || []);
          return {
            id: key,
            name: key, // Or use project.Name if it exists
            description: project.Description,
            github: project.Github,
            members: project.Members,
            powerpoint: project.Powerpoint,
            semester: project.Semester,
            type: project.Type,
            imagesUrls,
          };
        }));
        this.projects = projects;
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


