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
      </div>
      <div v-if="projects.length === 0">
        <p>No projects to display.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '/Users/awhile/Documents/Coding/JetBrains/WebStormProjects/CodeExhibit/src/firebase.js'; // Ensure this path is correct
import { ref as firebaseRef, onValue } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      projects: [],
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
    async fetchProjectImages(images) {
      const storage = getStorage();
      const urls = await Promise.all(images.map(async (imagePath) => {
        const imageRef = storageRef(storage, imagePath.replace('gs://code-exhibit.appspot.com/', ''));
        return await getDownloadURL(imageRef);
      }));
      return urls;
    },
  },
}
</script>




<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  background-color: #264653;
}

.wrapper {
  display: flex;
  position: relative;
}

.wrapper .sidebar {
  width: 200px;
  height: 100%;
  background: #264653;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li {
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}

.wrapper .sidebar ul li router-link {
  color: #bdb8d7;
  display: block;
}

.wrapper .sidebar ul li .fas {
  width: 25px;
}

.wrapper .sidebar ul li:hover {
  background-color: #f86647;
}

.wrapper .sidebar ul li:hover router-link {
  color: #fff;
}

.wrapper .sidebar .social_media {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}


.wrapper .main_content {
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header {
  padding: 28px;
  background-color: #f86647;
}

.wrapper .main_content .info {
  margin: 20px;
  color: #717171;
  line-height: 25px;
}

.wrapper .main_content .info div {
  margin-bottom: 20px;
}

@media (max-height: 500px) {
  .social_media {
    display: none !important;
  }
}
</style>
