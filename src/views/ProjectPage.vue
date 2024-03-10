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
      <div class="fixed bottom-0 pb-4 bg-opacity-0 p-16">
        <div class="flex justify-center space-x-4">
          <router-link to="#" class="hover:text-gray-300"><i class="fab fa-facebook-f"></i></router-link>
          <router-link to="#" class="hover:text-gray-300"><i class="fab fa-twitter"></i></router-link>
          <router-link to="#" class="hover:text-gray-300"><i class="fab fa-instagram"></i></router-link>
        </div>
      </div>
    </div>
    <!--Main-->
    <div class="flex-1 p-5 bg-custom-blue overflow-auto">
      <div class="w-full h-1/6 bg-cyan-950 border-custom-orange text-center justify-center items-center flex
      text-4xl font-mono font-bold shadow-2xl">
        Welcome to Our Projects Page!
      </div>
      <div class="bg-custom-gray w-full h-full mt-10 flex flex-col items-center">
        <div class="flex w-full justify-between items-center px-10">
          <div class="flex justify-center mt-10">
            <input type="text" id="search-input" placeholder="Search..." class="bg-white border-2 border-custom-orange rounded-l
            w-96 text-black p-2 font-mono">
            <i class="fas fa-search text-black ml-3 mt-3 text-lg"></i>
          </div>
          <div class="text-sm">
            <button class="bg-custom-orange text-white p-2 w-auto rounded-full font-bold mt-9" id="add-project" @click="isFormOpen = true" >Add Project</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isFormOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center px-4 py-8" @click.self="isFormOpen = false">
  <div class="bg-custom-blue p-6 rounded-lg shadow-lg w-1/2 h-full mx-auto my-8 overflow-auto" @click.stop> <!-- Adjust width here -->
    <h2 class="text-2xl font-bold text-center mb-4">Project Submission Form</h2>
        <form class="space-y-2">
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
    <div class="w-full md:w-1/2 px-3 md:mb-0">
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
        <div class="text-center mt-2">
        <button class="bg-custom-orange text-white px-4 py-2 rounded font-extrabold" @click="isFormOpen = false">Upload Project</button>
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
      isFormOpen: false,
      years: [
        { text: '2024', icon: 'fas fa-chevron-right', open: false, items: ['SPRING 2024', 'FALL 2024'] },
        { text: '2023', icon: 'fas fa-chevron-right', open: false, items: ['SPRING 2023', 'FALL 2023'] },
        { text: '2022', icon: 'fas fa-chevron-right', open: false, items: ['SPRING 2022', 'FALL 2022'] },
        { text: '2021', icon: 'fas fa-chevron-right', open: false, items: ['SPRING 2021', 'FALL 2021'] },
        { text: '2020', icon: 'fas fa-chevron-right', open: false, items: ['SPRING 2020', 'FALL 2020'] },
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
