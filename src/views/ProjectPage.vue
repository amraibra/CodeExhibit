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
      <div class="header">Project 1</div>
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
  </div>
</template>

<script>
import { storage } from '../firebase'; // Adjust the path as necessary
import { ref as firebaseRef, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
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
    async uploadFile(event) {
      const file = event.target.files[0];
      const fileRef = firebaseRef(storage, `uploads/${file.name}`);
      try {
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        console.log('Upload successful', url);
      } catch (error) {
        console.error('Upload failed', error);
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

@media (max-height: 500px) {
  .social_media {
    display: none !important;
  }
}
</style>
