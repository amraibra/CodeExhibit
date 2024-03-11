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
      <div class="w-full h-1/6 bg-cyan-950 border-custom-orange text-center justify-center items-center flex
      text-4xl font-mono font-bold shadow-2xl">
        Showcase Projects
      </div>
      <div class="bg-custom-gray w-full h-full mt-10 flex flex-col items-center">
        <div class="flex w-full justify-between items-center px-10">
          <div class="flex justify-center mt-10">
            <input type="text" id="search-input" placeholder="Search..." class="bg-white border-2 border-custom-orange rounded-l
            w-96 text-black p-2 font-mono">
            <i class="fas fa-search text-black ml-3 mt-3 text-lg"></i>
          </div>
          <div class="text-sm mt-10">
            <a href="/form" class="bg-custom-orange p-3 rounded-lg font-mono font-bold">Add Project</a>
          </div>
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
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
      isFormOpen: false,
      years: [
        { text: 'Project Type', icon: 'fas fa-chevron-right', open: false, items: ['Social Media', 'Games', 'Web Application', 'Mobile Application', 'Other' ]},
        { text: 'Year', icon: 'fas fa-chevron-right', open: false, items: ['2024', '2023', '2022', '2021'] },
        { text: 'Semester', icon: 'fas fa-chevron-right', open: false, items: ['Spring 2024', 'Fall 2023', 'Spring 2023', 'Fall 2022'] },
        { text: 'Class', icon: 'fas fa-chevron-right', open: false, items: ['Software Engineering Project', 'Junior Software Engineering','Sophomore Software Engineering', 'Intro to Programming'] }
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
