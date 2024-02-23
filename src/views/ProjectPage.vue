<template>
  <div class="wrapper">
    <div class="sidebar font-inter">
      <h2>Code Exhibit</h2>
      <ul>
        <li v-for="year in years" :key="year.text">
          <router-link to="#" @click.prevent="toggleYear(year.text)">
            <i :class="year.icon"></i>{{ year.text }}
          </router-link>
          <ul v-if="year.open" class="submenu">
            <li v-for="item in year.items" :key="item">
              <router-link to="#">{{ item }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="social_media">
        <router-link to="#"><i class="fab fa-facebook-f"></i></router-link>
        <router-link to="#"><i class="fab fa-twitter"></i></router-link>
        <router-link to="#"><i class="fab fa-instagram"></i></router-link>
      </div>
    </div>
    <div class="main_content">
      <div class="header flex justify-between items-center">Project 1
        <button class="bg-custom-gray text-custom-blue p-2 w-10 font-extrabold rounded-full" @click="isFormOpen = true">+</button>
      </div>
      <div class="info">
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...</div>
        <!-- File upload section -->
        <div class="file-upload">
          <input type="file" @change="uploadFile">
        </div>
      </div>
    </div>
      <div v-if="isFormOpen" class="form-overlay" @click.self="isFormOpen = false">
        <div class="submission-form w-1/2 bg-custom-blue p-4 rounded shadow-lg" @click.stop>
        <h2 class="text-2xl mb-4 text-center font-bold font-mono">Project Submission Form</h2>
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap mx-3">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-project-name">
        Project Name:
      </label>
      <input class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-project-name" type="text" placeholder="CodeExhibit">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-semester">
        Semester Created:
      </label>
      <select class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-semester">
        <option>Please select a semester</option>
        <option>Fall 2022</option>
        <option>Spring 2023</option>
        <option>Fall 2023</option>
        <option>Spring 2024</option>
        <option>Fall 2024</option>
      </select>
    </div>
  </div>
  <div class="flex flex-wrap mx-3">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-project-type">
        Project Type:
      </label>
      <select class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-project-type">
        <option>Please select a type</option>
        <option>Social Media</option>
        <option>Game</option>
        <option>Mobile Application</option>
        <option>Web Application</option>
        <option>Android Application</option>
      </select>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-semester">
        Semester Created:
      </label>
      <input class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-semester" type="text" placeholder="SPR2024">
    </div>
  </div>
  <div class="flex flex-wrap mx-3 mb-3">
    <div class="w-full md:w1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-member">
        Member Names:
      </label>
      <input class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-members" type="text" placeholder="Amra Ibrahimovic, Samuel Tyler, Paul Antuono">
      <p class="text-xs text-custom-orange italic">Please put first and last name</p>
    </div>
  </div>
  <div class="flex flex-wrap mx-3 mb-1">
    <div class="w-full md:w1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-member">
        Project Description:
      </label>
      <textarea class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded px-4 mb-2 p-2 h-28 leading-tight focus:outline-none focus:bg-white" id="grid-members" type="text" placeholder="Type your description here..."></textarea>
    </div>
  </div>
  <div class="flex flex-wrap mx-3">
    <div class="w-full md:w1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-github">
        Github Link:
      </label>
      <input class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded px-4 mb-2 p-2 leading-tight focus:outline-none focus:bg-white" id="grid-github" type="url" placeholder="Paste your Github link here...">
    </div>
  </div>
  <div class="flex flex-wrap mx-3">
    <div class="w-full md:w1/2 px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-custom-gray text-xs font-bold mb-2" for="grid-powerpoint">
        PowerPoint Upload:
      </label>
      <input class="appearance-none block w-full bg-custom-gray text-black border border-custom-orange rounded px-4 mb-2 p-2 leading-tight focus:outline-none focus:bg-white" id="grid-powerpoint" type="file">
    </div>
  </div>
</form>
      <button class="bg-custom-orange w-1/4 text-white p-2 mt-2 rounded font-bold font-mono" @click="isFormOpen = false">Upload Project</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as firebaseRef, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      isFormOpen: false,
      years: [
        { text: '2024', icon: 'fas fa-2024', open: false, items: ['Project 1', 'Project 2'] },
        { text: '2023', icon: 'fas fa-2023', open: false, items: ['Project 1', 'Project 2'] },
        { text: '2022', icon: 'fas fa-2022', open: false, items: ['Project 1', 'Project 2'] },
        { text: '2021', icon: 'fas fa-2021', open: false, items: ['Project 1', 'Project 2'] },
        { text: '2020', icon: 'fas fa-2020', open: false, items: ['Project 1', 'Project 2'] },
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

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submission-form {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-height: 500px) {
  .social_media {
    display: none !important;
  }
}
</style>
