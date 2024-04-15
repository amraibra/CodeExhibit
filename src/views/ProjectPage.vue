<template>
  <div class="flex h-screen">
    <div
      class="w-64 bg-cyan-950 text-white p-5 space-y-6 h-screen overflow-auto"
    >
      <a href="/home" class="flex mt-2">
        <i class="fas fa-home mr-3 mt-2"></i>
        <h2 class="text-2xl font-londrina text-custom-orange">
          CodeExhibit
        </h2>
      </a>
      <ul>
        <li v-for="year in years" :key="year.text" class="group">
          <router-link
            to="#"
            @click.prevent="toggleYear(year.text)"
            class="flex items-center justify-between py-2 px-3 rounded hover:bg-custom-blue font-londrina text-xl"
          >
            <span class="my-5">{{ year.text }}</span>
            <i :class="year.icon"></i>
          </router-link>
          <ul v-if="year.open" class="pl-4 space-y-3 font-londrina text-md">
            <!-- Updated for class filtering -->
            <li v-for="item in year.items" :key="item">
              <router-link
                to="#"
                @click.prevent="setFilter(year.type, item)"
                :class="{'block py-1 px-2 rounded hover:bg-custom-teal': true,
                'bg-custom-teal text-white': activeFilters[year.type] && categoryFilter[year.type] === item}"
                >{{ item }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
      <div class="absolute bottom-0 pl-40 text-custom-gray font-bold text-md font-londrina">
        <a href="/adminLogin">
          Admin
          <i class="fas fa-cog text-lg pl-1"></i>
        </a>
      </div>
    </div>
    <!--Main-->
    <div class="flex-1 p-8 bg-custom-blue overflow-auto">
      <div
        class="w-full h-36 bg-cyan-950 text-center justify-between items-center flex text-4xl shadow-2xl"
      >
        <div class="flex-grow text-center text-white dark:text-white ml-8 font-londrina">Showcase Projects</div>
        <div class="text-sm mr-8">
          <div v-if="!isAuthenticated">
            <button
              @click="showPasswordModal = true"
              class="bg-custom-orange p-2 rounded-2xl font-londrina"
            >
              <i class="fas fa-plus text-white dark:text-white w-5"></i>
            </button>
          </div>
          <div v-if="isAuthenticated">
            <a
              href="/form"
              class="bg-custom-orange p-2 rounded-2xl font-mono font-bold"
            >
              <i class="fas fa-plus w-5"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="bg-custom-gray w-auto h-auto mt-10 pb-8 flex flex-col items-center"
      >
        <div class="flex w-full justify-between items-center px-20 mt-10">
          <div class="flex-grow">
            <h3
              class="mt-1 sm:ml-2 md:ml-20 lg:ml-28 xl:ml-56 mr-5 text-custom-blue text-4xl font-londrina"
            >
              Projects
            </h3>
          </div>
          <div class="flex items-center">
            <input
              type="text"
              id="search-input"
              v-model="searchQuery"
              placeholder="Search..."
              class="bg-gray-50 border-2 border-custom-orange rounded-lg text-black p-1 font-londrina"
            />
            <i class="fas fa-search text-black ml-3 mt-2 text-lg"></i>
          </div>
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
        <div class="mt-8 flex flex-wrap">
          <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 text-black">
            <!-- Display projects (all or filtered based on user input) -->
            <div
              v-for="project in filteredProjects"
              :key="'project-' + project.id"
              class="flip-card xl:w-80 lg:w-80 h-96 md:w-80 sm:w-80"
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
                    <p class="text-xs text-gray-400 pb-3 font-thin">{{ project.memberNames }}</p>
                    <p>{{ project.projectDescription }}</p>
                  </div>
                </div>
                <div
                  class="flip-card-back bg-white border-2 border-custom-orange rounded-lg p-5"
                >
                <h1 class="text-xl font-londrina font-thin"><u>Project Information:</u></h1>
                <div class="mt-4 font-londrina cursor-default mb-3 font-thin text-lg">
                  <p><b>Semester:</b></p>
                  <p class="text-custom-orange">{{ project.semesterType }}</p>
                  <p class="pt-3"><b>Class Name:</b></p>
                  <p class="text-custom-orange">{{ project.className }}</p>
                  <p class="pt-3"><b>Project Type:</b></p>
                  <p class="text-custom-orange">{{ project.projectType }}</p>
                  <p class="pt-3"><b>Keywords:</b></p>
                  <p class="text-custom-orange"> ... </p>
                </div>
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
  <div
    v-if="showPasswordModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-6 rounded-lg text-custom-blue shadow-lg">
      <h2 class="text-lg font-bold mb-4">Enter Password</h2>
      <input
        type="password"
        v-model="inputPassword"
        placeholder="Password"
        class="bg-gray-100 border-2 border-gray-300 rounded p-2 w-full"
      />
      <div class="mt-4 flex justify-center">
        <button
          @click="closeModal"
          class="bg-custom-blue text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          @click="verifyPassword"
          class="bg-custom-blue text-white px-4 py-2 rounded mx-1"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../firebase"; // Your existing import
import { ref as databaseRef, get, remove } from "firebase/database";

export default {
  data() {
    return {
      activeFilters: {
        year: false,
        semester: false,
        class: false,
        keyword: false,
      },
      projects: [],
      categoryFilter: {
        year: "",
        semester: "",
        class: "",
        keyword: "",
      },
      years: [
        {
          text: "Project Type",
          type: "keyword",
          icon: "fas fa-chevron-right",
          open: false,
          items: [
            "Social Media",
            "Games",
            "Web Application",
            "Mobile Application",
            "Other",
          ],
        },
        {
          text: "Year",
          type: "year",
          icon: "fas fa-chevron-right",
          open: false,
          items: ["2024", "2023", "2022", "2021"],
        },
        {
          text: "Semester",
          type: "semester",
          icon: "fas fa-chevron-right",
          open: false,
          items: ["Spring", "Fall"],
        },
        {
          text: "Class",
          type: "class",
          icon: "fas fa-chevron-right",
          open: false,
          items: [
            "CS114",
            "CS203/204",
            "CS303/304",
            "CS413/414",
            "IT145",
            "CS250",
            "CS320",
            "CS340",
            "CS360",
            "CS465",
            "CS499",
          ],
        },
      ],
      searchQuery: "",
      inputPassword: "",
      isAuthenticated: false,
      correctPassword: "tempadmin",
      showPasswordModal: false,
    };
  },
  methods: {
    setFilter(category, item) {
      if (this.categoryFilter[category] === item) {
        // If it is, clear the filter for that category
        this.categoryFilter[category] = "";
        this.activeFilters[category] = false;
      } else {
        // If it's not, set the filter to the clicked item
        this.categoryFilter[category] = item;
        this.activeFilters[category] = true;
      }
    },
    verifyPassword() {
      if (this.inputPassword === this.correctPassword) {
        this.isAuthenticated = true;
        this.closeModal();
        window.location.href = "/form";
      } else {
        alert("Incorrect password");
        this.inputPassword = "";
      }
    },
    toggleYear(year) {
      const foundYear = this.years.find((y) => y.text === year);
      if (foundYear) {
        foundYear.open = !foundYear.open;
      }
    },
    removeProject(project) {
      const projectKey = project.projectName
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
      const projectRef = databaseRef(database, `projects/${projectKey}`);
      remove(projectRef)
        .then(() => {
          this.projects = this.projects.filter(
            (p) => p.projectName !== project.projectName
          );
          console.log("Project removed successfully");
        })
        .catch((error) => {
          console.error("Error removing project: ", error);
        });
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
    closeModal() {
      this.showPasswordModal = false;
      this.inputPassword = "";
    },
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => {
        const matchesYear = this.categoryFilter.year
          ? project.year === this.categoryFilter.year
          : true;
        const matchesSemester = this.categoryFilter.semester
          ? project.semesterType === this.categoryFilter.semester
          : true;
        const matchesClass = this.categoryFilter.class
          ? project.className === this.categoryFilter.class
          : true;
        const matchesKeyword = this.categoryFilter.keyword
          ? (project.projectType?.toLowerCase() ?? "") ===
            this.categoryFilter.keyword.toLowerCase()
          : true;
        const matchesQuery = this.searchQuery
          ? project.projectName
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            project.projectDescription
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            project.memberNames
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            project.semesterType
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            project.className
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            (project.projectType
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ??
              false)
          : true;
        return (
          matchesYear &&
          matchesSemester &&
          matchesClass &&
          matchesKeyword &&
          matchesQuery
        );
      });
    },
    // highlightedProjects() {
    //   return this.projects.sort(() => 0.5 - Math.random()).slice(0, 3);
    // },
    isAnyFilterActive() {
      return (
        this.categoryFilter.year !== "" ||
        this.categoryFilter.semester !== "" ||
        this.categoryFilter.class !== "" ||
        this.categoryFilter.keyword !== "" ||
        this.searchQuery !== ""
      );
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
  margin-bottom: 1rem;
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
  width: auto; /* Adjust to match the default image size */
  height: auto; /* Adjust to match the default image size */
  object-fit: cover; /* This ensures the image covers the space, cropping it if necessary */
}

.flip-card,
.flip-card-inner,
.flip-card-front,
.flip-card-back {
  cursor: default; /* Set the cursor to default */
}

</style>
