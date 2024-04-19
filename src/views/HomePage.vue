<template>
  <ion-page class="bg-custom-blue flex-col min-h-screen">
    <ion-content class="bg-custom-blue overflow-hidden flex-grow">
      <header class="bg-custom-blue text-white">
        <!--Navbar-->
        <nav class="container mx-auto py-4 flex justify-between items-center">
          <!--Logo + Title-->
          <div class="flex items-center justify-start flex-1">
            <div
              class="logo"
              style="
                width: 4.8rem;
                height: 3rem;
                background-image: url('/logo2.png');
                background-size: cover;
                background-position: center;
              "
            ></div>
            <span
              class="text-3xl font-londrina leading-normal text-custom-orange"
              >CodeExhibit</span
            >
          </div>

          <!--Navigation buttons-->
          <div
            class="hidden md:flex items-center space-x-1 justify-center flex-1"
          >
            <a
              href="/home"
              class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm"
              >Home</a
            >
            <a
              href="/info"
              class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm"
              >About Us</a
            >
            <a
              href="/contact"
              class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm"
              >Contact</a
            >
          </div>

          <!-- Projects Button -->
          <div class="flex justify-end flex-1">
            <a
              href="/projects"
              class="py-2 px-3 text-white bg-custom-orange rounded-full transition duration-100 font-inter font-semibold text-sm"
              style="padding: 0.4375rem 1.75rem"
              >Projects</a
            >
          </div>
        </nav>
      </header>

      <div class="absolute h-screen w-full">
        <!-- Original setup for rectangle1 and art1 -->
        <div
          class="rectangle1 absolute w-full h-screen bg-[url('/rectangle1.svg')] bg-no-repeat bg-cover -z-10"
        ></div>
        <div
          class="text-image-container original-content relative z-20 px-[3.125rem] flex flex-col md:flex-row items-center justify-center h-full"
        >
          <!-- Text Content for art1 -->
          <div class="text-content flex-1">
            <h1
              style="font-size: 3.75888rem"
              class="font-inter font-bold text-white pb-24"
            >
              <span class="text-custom-orange">Project</span> Today,<br />
              <span class="text-custom-orange">Portfolio</span> Tomorrow:<br />
              Where Students <span class="text-custom-orange">Shine</span>.
            </h1>
          </div>

          <!-- Image Content for art1 -->
          <div class="image-content flex-1">
            <div
              class="text-image-container original-content relative z-20 px-[3.125rem] flex flex-col md:flex-row items-center justify-center h-full"
            >
              <div class="grid grid-cols-3 gap-4 text-black pr-64 pb-36">
                <!-- Display highlighted projects dynamically -->
                <div
                  v-for="project in highlightedProjects"
                  :key="'highlighted-project-' + project.id"
                  class="flip-card xl:w-80 lg:w-72 h-96 md:w-80 sm:w-80"
                >
                  <div class="flip-card-inner">
                    <div
                      class="flip-card-front bg-white border-2 border-custom-orange rounded-lg p-5"
                    >
                      <img
                        v-if="project.imageUrl"
                        :src="project.imageUrl"
                        alt="Project Image"
                        class="project-image xl:ml-2"
                      />
                      <img
                        v-else
                        src="/default.png"
                        alt="Default Image"
                        class="project-image"
                      />
                      <div class="font-londrina">
                        <h4 class="text-2xl pb-1">{{ project.projectName }}</h4>
                        <p class="text-xs text-gray-400 pb-3 font-thin">
                          {{ project.memberNames }}
                        </p>
                        <p>{{ project.projectDescription }}</p>
                      </div>
                    </div>
                    <div
                    class="flip-card-back bg-white border-2 border-custom-orange rounded-lg p-3 flex flex-col"
                  >
                  <h1 class="text-xl font-londrina font-thin"><u>Project Information:</u></h1>
                  <div class="mt-1 font-londrina cursor-default font-thin text-lg">
                    <p><b>Semester:</b></p>
                    <p class="text-custom-orange">{{ project.semesterType }}</p>
                    <p class="pt-3"><b>Class Name:</b></p>
                    <p class="text-custom-orange">{{ project.className }}</p>
                    <p class="pt-3"><b>Project Type:</b></p>
                    <p class="text-custom-orange">{{ project.projectType }}</p>
                    <p class="pt-3"><b>Keywords:</b></p>
                    <p class="text-custom-orange pb-2">{{ project.keywords }}</p>
                  </div>
                    <div class="mt-auto pt-1">
                      <a
                      :href="project.githubLink"
                      target="_blank"
                      class="text-custom-orange text-xl font-bold mr-2"
                      >
                      <i class="fab fa-github"></i>
                      </a
                    >
                    <a
                      :href="project.powerpoint"
                      target="_blank"
                      class="text-custom-orange text-xl font-bold"
                      >
                      <i class="fas fa-file-powerpoint"></i>
                      </a
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <!-- New setup for rectangle2 and art2 -->
        <div
          class="rectangle2 absolute w-full h-screen bg-[url('/rectangle2.svg')] bg-no-repeat bg-cover top-[20%] md:top-[15%] lg:top-[75%] -z-10"
        ></div>
        <div
          class="centered-content new-content absolute z-20 w-[50%] h-[50%] top-[calc(75% + 25vh)] left-[25%] flex items-center justify-center gap-8"
        >
          <!-- Image Content for art2 -->
          <div class="image-content w-1/2 flex flex-col pt-36 -ml-64">
            <img
              :src="images[currentImageIndex]"
              alt="Descriptive Alt Text"
              class="border-8 border-custom-orange mb-4"
            />
            <div class="flex justify-center space-x-4">
              <button
                @click="prevImage"
                class="bg-custom-orange text-white p-2 rounded"
              >
                Prev
              </button>
              <button
                @click="nextImage"
                class="bg-custom-orange text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </div>

          <!-- Text Content for art2 -->
          <div class="text-content w-1/2 mr-20 pl-10 mt-36">
            <h1
              class="text-white"
              style="
                width: 49.3125rem;
                height: 23.0625rem;
                flex-shrink: 0;
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 3.75rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
              "
            >
              Welcome to <span class="text-custom-orange">CodeExhibit</span> the
              premier platform where ambition meets opportunity.
            </h1>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { database } from "../firebase"; // Your existing import
import { ref as databaseRef, get, child, remove } from "firebase/database";
import { IonRefresher } from "@ionic/vue";
import router from "@/router";

export default {
  data() {
    return {
      images: Array.from({ length: 25 }, (_, i) => `/snhu${i + 1}.jpg`),
      currentImageIndex: 0,
      projects: [],
    };
  },
  methods: {
    nextImage() {
      // Increment the currentImageIndex, wrap around if at the end
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      // Decrement the currentImageIndex, wrap around if at the beginning
      this.currentImageIndex =
        (this.currentImageIndex + this.images.length - 1) % this.images.length;
    },
    fetchProjects() {
      const projectsRef = databaseRef(database, "projects/");
      get(projectsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let projectsArray = Object.keys(data).map((key) => ({
              ...data[key],
              id: key,
            }));

            // Store all projects instead of just a random subset
            this.projects = projectsArray;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    highlightedProjects() {
      return this.projects.sort(() => 0.5 - Math.random()).slice(0, 3);
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
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
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}

.project-image {
  width: 292px; /* Adjust to match the default image size */
  height: 203px; /* Adjust to match the default image size */
  padding-bottom: 20px;
  object-fit: cover; /* This ensures the image covers the space, cropping it if necessary */
}
</style>
