<template>
  <div class="flex">
    <div
      class="w-64 bg-cyan-950 text-white p-5 space-y-6 h-screen overflow-auto"
    >
      <a href="/home" class="flex mt-2">
        <i class="fas fa-home mr-3 mt-2"></i>
        <h2 class="text-2xl font-semibold font-londrina text-custom-orange">
          CodeExhibit
        </h2>
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
            <!-- Updated for class filtering -->
            <li v-for="item in year.items" :key="item">
              <router-link
                to="#"
                @click.prevent="setFilter(year.type, item)"
                class="block py-1 px-2 rounded hover:bg-custom-blue font-bold"
                >{{ item }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--Main-->
    <div class="flex-1 p-5 bg-custom-blue overflow-auto">
      <div
        class="w-full h-1/6 bg-cyan-950 text-center justify-between items-center flex text-4xl font-mono font-bold shadow-2xl"
      >
        <div class="flex-grow text-center ml-8">Showcase Projects</div>
        <div class="text-sm mr-8">
          <div v-if="!isAuthenticated">
            <input
              type="password"
              v-model="inputPassword"
              placeholder="Enter password to add projects"
            />
            <button @click="verifyPassword">Submit</button>
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
        class="bg-custom-gray w-full h-full mt-10 flex flex-col items-center"
      >
        <div class="flex w-full justify-between items-center px-20 mt-10">
          <div class="flex-grow">
            <h3
              class="font-mono mt-1 ml-36 text-custom-blue font-extrabold text-2xl"
            >
              Highlighted Projects
            </h3>
          </div>
          <div class="flex items-center">
            <<input
              type="text"
              id="search-input"
              v-model="searchQuery"
              placeholder="Search..."
              class="bg-gray-50 border-2 border-custom-orange rounded-l w-96 text-black p-1 font-mono"
            />
            <i class="fas fa-search text-black ml-3 mt-2 text-lg"></i>
          </div>
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
        <div class="mt-8">
          <div class="grid grid-cols-3 gap-4 text-black">
            <!-- Display highlighted projects before any filters are applied -->
            <div
              v-if="!isAnyFilterActive"
              v-for="project in highlightedProjects"
              :key="'highlighted-' + project.id"
              class="bg-white p-4 rounded-lg shadow-lg"
            >
              <h4 class="font-semibold">{{ project.projectName }}</h4>
              <p>{{ project.projectDescription }}</p>
              <p>{{ project.memberNames }}</p>
              <p>{{ project.year }}</p>
              <p>{{ project.projectType }}</p>
              <p>{{ project.semesterType }}</p>
              <p>{{ project.className }}</p>
              <a :href="project.githubLink" target="_blank">GitHub Link</a
              ><br />
              <a :href="project.powerpoint" target="_blank">PowerPoint Link</a>
              <button
                @click="removeProject(project)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
            <!-- Display filtered projects after any filter is applied -->
            <div
              v-else
              v-for="project in filteredProjects"
              :key="'filtered-' + project.id"
              class="bg-white p-4 rounded-lg shadow-lg"
            >
              <h4 class="font-semibold">{{ project.projectName }}</h4>
              <p>{{ project.projectDescription }}</p>
              <p>{{ project.memberNames }}</p>
              <p>{{ project.year }}</p>
              <p>{{ project.projectType }}</p>
              <p>{{ project.semesterType }}</p>
              <p>{{ project.className }}</p>
              <a :href="project.githubLink" target="_blank">GitHub Link</a
              ><br />
              <a :href="project.powerpoint" target="_blank">PowerPoint Link</a>
              <button
                @click="removeProject(project)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { database } from "../firebase"; // Your existing import
import { ref as databaseRef, get, child, remove } from "firebase/database";

export default {
  data() {
    return {
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
    };
  },
  methods: {
    setFilter(category, item) {
      this.categoryFilter[category] = item;
    },
    verifyPassword() {
      if (this.inputPassword === this.correctPassword) {
        this.isAuthenticated = true;
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
    highlightedProjects() {
      return this.projects.sort(() => 0.5 - Math.random()).slice(0, 3);
    },
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
