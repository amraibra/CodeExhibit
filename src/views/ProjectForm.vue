<template>
    <div class="bg-custom-blue w-full h-screen flex justify-center items-center">
        <div class="bg-custom-gray w-2/3 h-4/5 shadow-2xl flex flex-col items-center">
            <!--Stepper-->
            <div v-if="step < 4">
                <div class="w-full p-4">
                    <div class="flex justify-center pb-6 pt-8">
                        <!--Project Info-->
                        <div class="flex items-center">
                            <div :class="{'bg-custom-blue': step >= 1, 'bg-custom-gray border-2 border-custom-blue': step < 1}" class="flex items-center justify-center w-10 h-10 rounded-full text-custom-gray">
                                <i :class="{'text-custom-gray': step >= 1, 'text-custom-blue': step < 1}" class="fas fa-folder-open"></i>
                            </div>
                            <div :class="{'bg-custom-teal': step > 1, 'bg-gray-200': step <= 1}" class="w-48 h-1"></div>
                        </div>
                        <!--Links-->
                        <div class="flex items-center">
                            <div :class="{'bg-custom-blue': step >= 2, 'bg-custom-gray border-2 border-custom-blue': step < 2}" class="flex items-center justify-center w-10 h-10 rounded-full text-custom-gray">
                                <i :class="{'text-custom-gray': step >= 2, 'text-custom-blue': step < 2}" class="fas fa-link"></i>
                            </div>
                            <div :class="{'bg-custom-teal': step > 2, 'bg-gray-200' : step <= 2}" class="w-48 h-1"></div>
                        </div>
                        <!--Upload Step-->
                        <div class="flex items-center text-custom-gray">
                            <div :class="{'bg-custom-blue': step >= 3, 'bg-custom-gray border-2 border-custom-blue': step < 3}" class="flex items-center justify-center w-10 h-10 rounded-full">
                                <i :class="{'text-custom-gray': step >= 3, 'text-custom-blue': step < 3}" class="fas fa-upload"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form @submit.prevent="nextStep">
                <div v-if="step === 1">
                    <h3 class="text-mono text-custom-blue text-xl font-medium pb-5">
                        Project Information
                    </h3>
                    <div class="grid gap-8 sm:grid-cols-2">
                    <div>
                        <label for="project-name" class="block mb-1 text-sm font-medium text-custom-blue">
                            Project Name:
                        </label>
                        <input 
                            type="text" 
                            name="project name" 
                            id="project-name"
                            placeholder="CodeExhibit"
                            class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5"
                            v-model="projectName"
                            required>
                    </div>
                    <div>
                        <label for="members" class="block mb-1 text-sm font-medium text-custom-blue">Member Names:</label>
                        <input 
                            type="name" 
                            name="members" 
                            id="members"
                            placeholder="Samuel Tyler" 
                            class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5"
                            v-model="memberNames"
                            required>
                    </div>
                    <div>
                        <label for="semester" class="block mb-1 text-sm font-medium text-custom-blue">
                            Semester:
                        </label>
                        <select 
                            type="text" 
                            name="semester" 
                            id="semester"
                            class=" appearance-none bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5"
                            v-model="semesterType"
                            required>
                            <option value="">Select a semester</option>
                            <option value="Spring 2024">Spring 2024</option>
                            <option value="Fall 2023">Fall 2023</option>
                            <option value="Spring 2023">Spring 2023</option>
                            <option value="Fall 2022">Fall 2022</option>
                            <option value="Spring 2022">Spring 2022</option> 
                        </select>
                    </div>
                    <div>
                        <label for="class" class="block mb-1 text-sm font-medium text-custom-blue">
                            Class:
                        </label>
                        <select 
                            type="text" 
                            name="class" 
                            id="class"
                            class=" appearance-none bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5"
                            v-model="className"
                            required>
                            <option value="">Select a class</option>
                            <option value="Software Engineering Project">Software Engineering Project</option>
                            <option value="Jr Software Engineering">Jr Software Engineering</option>
                            <option value="Softmore Software Engineering">Softmore Software Engineering</option>
                            <option value="Intro to Programming">Intro to Programming</option>
                        </select>
                    </div>
                </div>
                <div class="grid sm:grid-cols-1 pt-8">
                    <label for="project-description" class="block mb-1 text-sm font-medium text-custom-blue">Project Description:</label>
                    <textarea 
                        id="project-description"
                        class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2"
                        v-model="projectDescription"
                        required></textarea>
                </div>
                <div class="text-center pt-7">
                    <button class="bg-custom-blue text-white w-20 h-10 rounded-lg">Next</button>
                </div>
                </div>
                <div v-if="step === 2">
                    <h3 class="text-mono text-custom-blue text-xl font-medium pb-5">
                        Github & PowerPoint Links
                    </h3>
                    <div class="flex items-center justify-center w-full">
                      <label class="block text-sm font-medium text-custom-blue">
                        Showcase Presentation:
                        <div class="flex flex-col items-center justify-center w-96 h-1/4 border-2 border-custom-blue rounded-lg cursor-pointer bg-custom-gray dark:bg-custom-gray hover:border-custom-teal dark:border-custom-blue dark:hover:border-custom-teal mt-1">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-custom-blue dark:text-custom-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-custom-blue dark:text-custom-blue"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-custom-blue dark:text-custom-blue">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            <span id="file-name" class="pt-2 text-sm font-bold underline text-custom-blue dark:text-custom-blue">No File Selected</span>
                          </div>
                          <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" accept=".ppt,.pptx"/>
                        </div>
                      </label>
                    </div>
                    <div class=" mt-10">
                        <label for="github-link" class="block mb-1 text-sm font-medium text-custom-blue">
                            Github Link:
                            </label>
                        <input 
                            type="url" 
                            name="github" 
                            id="github-link"
                            placeholder="Paste link here" 
                            class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5"
                            v-model="githubLink"
                            required>
                    </div>
                    <div class="text-center pt-7">
                        <button @click="prevStep" class="bg-custom-blue text-white w-20 h-10 rounded-lg mx-3">Back</button>
                        <button class="bg-custom-blue text-white w-20 h-10 rounded-lg">Next</button>
                    </div>
                </div>
                <div v-if="step === 3">
                      <div class="pb-3">
                        <p class="text-custom-blue text-sm font-medium pb-3">Would you want your project to be continued by other students?</p>
                        <div class="flex items-center me-4 justify-center">
                          <input id="yes-radio" type="radio" value="yes" v-model="continuation" class="w-3 h-3 text-teal-600 bg-custom-blue rounded focus:ring-custom-teal dark:focus:ring-custom-teal dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label for="yes-radio" class="ms-2 text-xs font-bold text-gray-900 dark:text-custom-blue">Yes</label>

                          <input id="no-radio" type="radio" value="no" v-model="continuation" class="w-3 h-3 text-teal-600 bg-custom-blue rounded focus:ring-custom-teal dark:focus:ring-custom-teal dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-8">
                          <label for="no-radio" class="ms-2 text-xs font-bold text-gray-900 dark:text-custom-blue">No</label>
                        </div>
                      </div>

                      <div v-if="continuation === 'yes'">
                        <label for="additions" class="block mb-1 text-sm font-medium text-custom-blue">
                          Please explain any additions or ideas for the project continuation:
                        </label>
                        <textarea 
                          id="additions"
                          placeholder="Type your ideas here..." 
                          class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full h-12 p-2.5"
                          v-model="extraInfo" 
                          required
                        ></textarea>
                      </div>

                      <div class="pt-4">
                        <label class="block text-sm font-medium text-custom-blue">
                          Upload <i>at least</i> one picture of your project:
                          <div class="flex flex-col items-center justify-center w-full h-28 border-2 border-custom-blue rounded-lg cursor-pointer bg-custom-gray dark:bg-custom-gray hover:border-custom-teal dark:border-custom-blue dark:hover:border-custom-teal mt-1 mb-4">
                            <div class="flex flex-col items-center justify-center pt-8 pb-8">
                              <svg class="w-5 h-5 mb-2 text-custom-blue dark:text-custom-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-xs text-custom-blue dark:text-custom-blue"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-custom-blue dark:text-custom-blue">SVG, PNG, JPG or GIF (MAX. 400x200px)</p>
                              <span id="file-name" class="pt-2 text-xs font-bold underline text-custom-blue dark:text-custom-blue">No File Selected</span>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" accept=""/>
                          </div>
                        </label>

                        <label for="keywords" class="block mb-1 text-sm font-medium text-custom-blue">
                          Please type in some keywords related to your project:
                        </label>
                        <input
                          id="keywords"
                          type="text"
                          placeholder="Mobile App, Ionic, Vue.js ..." 
                          class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full h-12 p-2.5 mb-1"
                          v-model="keywords"
                          required
                        >

                        <div class="col-span-2">
                          <div class="text-center pt-3">
                            <button @click="prevStep" class="bg-custom-blue text-white w-20 h-10 rounded-lg mx-3">Back</button>
                            <button @click="submitForm" class="bg-custom-blue text-white w-20 h-10 rounded-lg">Submit</button>
                          </div>
                        </div>
                        </div>
                    </div>
                <div class="flex text-center items-center justify-center my-56">
                    <div v-if="step === 4">
                        <h3 class="text-mono text-custom-blue text-3xl font-extrabold font-mono pb-5">
                            Your project has been submitted!
                        </h3>
                        <p class="sm text-custom-blue font-medium mt-2">Please check the projects page to view your submitted project.</p>
                        <button @click="$router.push('/home')" class="bg-custom-blue text-white w-36 h-10 rounded-lg mt-10 mx-2">Home</button>
                        <button class="bg-custom-blue text-white w-36 h-10 rounded-lg mt-10 p-2">Upload Project</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { database } from '../firebase'; // Make sure this path is correct
import { ref as databaseRef, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  data() {
    return {
      // Initialize your form fields
      step: 1,
      projectName: '',
      memberNames: '',
      semesterType: '',
      className: '',
      projectDescription: '',
      githubLink: '',
      powerPointFile: null, // Placeholder for the PowerPoint file
      continuation: '',
      extraInfo: '',
      keywords: ''
    };
  },
  methods: {
    nextStep() {
      if (this.step < 3) {
        this.step++;
      } else {
        this.submitForm(); // Call submitForm when moving to the last step
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    handleFileChange(event) {
      this.powerPointFile = event.target.files[0];
      console.log('File selected:', this.powerPointFile); // Debug line
    },
    async uploadPowerPoint(file) {
      console.log('Uploading file:', file); // Debug line
      if (!file) {
        console.log('No file to upload'); // Debug line
        return null; // No file to upload
      }
      const storage = getStorage();
      const fileRef = storageRef(storage, `presentations/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      console.log('File uploaded, URL:', url); // Debug line
      return url;
    },
    async submitForm() {
      let powerPointUrl = '';
      if (this.powerPointFile) {
        powerPointUrl = await this.uploadPowerPoint(this.powerPointFile);
      }
      const projectKey = this.projectName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const projectRef = databaseRef(database, 'projects/' + projectKey);

      const projectData = {
        projectName: this.projectName,
        memberNames: this.memberNames,
        semesterType: this.semesterType,
        className: this.className,
        projectDescription: this.projectDescription,
        githubLink: this.githubLink,
        powerpoint: powerPointUrl, // Store the PowerPoint URL
      };

      set(projectRef, projectData)
          .then(() => {
            console.log('Project submitted successfully');
            this.step = 4; // Optionally, navigate to a confirmation message
          })
          .catch((error) => {
            console.error('Failed to submit project:', error);
          });
    },
  }
};
</script>


