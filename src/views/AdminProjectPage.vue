<template>
  <div class="flex h-screen">
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
            class="flex items-center justify-between py-2 px-3 rounded hover:bg-custom-blue font-bold font-mono"
          >
            <span class="my-5">{{ year.text }}</span>
            <i :class="year.icon"></i>
          </router-link>
          <ul v-if="year.open" class="pl-4 space-y-3 font-mono">
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
    <div class="flex-1 p-8 bg-custom-blue overflow-auto">
      <div
        class="w-full h-1/6 bg-cyan-950 text-center justify-between items-center flex text-4xl font-mono font-bold shadow-2xl"
      >
        <div class="flex-grow text-center ml-8">Showcase Projects</div>
        <div class="text-sm mr-8">
            <button @click="showPasswordChange = true" class="bg-blue-500 p-2 ml-4 rounded-2xl font-mono font-bold">
    Change Password
  </button><button @click="logout" class="bg-red-500 p-2 ml-4 rounded-2xl font-mono font-bold">
    Logout
  </button>
  
        </div>
        <div class="text-sm mr-8">
          
            <a
              href="/form"
              class="bg-custom-orange p-2 rounded-2xl font-mono font-bold"
            >
              <i class="fas fa-plus w-5"></i>
            </a>
        </div>
      </div>
      <div
        class="bg-custom-gray w-full h-auto mt-10 pb-8 flex flex-col items-center"
      >
        <div class="flex w-full justify-between items-center px-20 mt-10">
          <div class="flex-grow">
            <h3
              class="font-mono mt-1 ml-36 text-custom-blue font-extrabold text-2xl"
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
              class="bg-gray-50 border-2 border-custom-orange rounded-l w-96 text-black p-1 font-mono"
            />
            <i class="fas fa-search text-black ml-3 mt-2 text-lg"></i>
          </div>
        </div>
        <div class="bg-custom-blue w-11/12 h-1 mt-10"></div>
        <div class="mt-8">
          <div class="grid grid-cols-3 gap-4 text-black">
            <!-- Display projects (all or filtered based on user input) -->
            <div
              v-for="project in filteredProjects"
              :key="'project-' + project.id"
              class="flip-card w-[21rem] h-96"
            >
              <div class="flip-card-inner">
                <div
                  class="flip-card-front bg-white border-2 border-custom-orange rounded-lg p-5"
                >
                  <img
                    v-if="project.imageUrl"
                    :src="project.imageUrl"
                    alt="Project Image"
                    class="project-image"
                  />
                  <img
                    v-else
                    src="/default.png"
                    alt="Default Image"
                    class="project-image"
                  />
                  <h4 class="font-extrabold pb-5">{{ project.projectName }}</h4>
                  <p>{{ project.projectDescription }}</p>
                </div>
                <div
                  class="flip-card-back bg-white border-2 border-custom-orange rounded-lg p-5 space-y-5"
                >
                  <p><b>Member Names:</b> {{ project.memberNames }}</p>
                  <p><b>Semester:</b> {{ project.semesterType }}</p>
                  <p><b>Class Name:</b> {{ project.className }}</p>
                  <p><b>Project Type:</b> {{ project.projectType }}</p>
                  <div>
                    <a
                      :href="project.githubLink"
                      target="_blank"
                      class="text-custom-orange font-bold"
                      >GitHub Link</a
                    ><br />
                    <a
                      :href="project.powerpoint"
                      target="_blank"
                      class="text-custom-orange font-bold"
                      >PowerPoint Link</a
                    >
                  </div>
                  <div>
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
      </div>
    </div>
  </div>
  <!-- Password Change Section -->
<div v-if="showPasswordChange" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-lg font-bold mb-4">Change Password</h2>
    <input
      type="password"
      v-model="newPassword"
      placeholder="New Password"
      class="bg-gray-100 border-2 border-gray-300 rounded p-2 w-full mb-4"
    />
    <div class="flex justify-center">
      <button
        @click="updatePassword(newPassword); showPasswordChange = false"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Password
      </button>
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
import { onMounted, ref } from "vue";
import { database } from "../firebase"; // Your existing import
import { ref as databaseRef, get, child, remove } from "firebase/database";
import { IonRefresher } from "@ionic/vue";
import router from "@/router";

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
      showPasswordModal: false,
      newPassword: '',
      showPasswordChange: false,
    };
  },
  methods: {
    setFilter(category, item) {
      if (this.categoryFilter[category] === item) {
        // If it is, clear the filter for that category
        this.categoryFilter[category] = "";
      } else {
        // If it's not, set the filter to the clicked item
        this.categoryFilter[category] = item;
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
    logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAdminLoggedIn'); // Clear the login flag from localStorage
    this.$router.push('/home').then(() => window.location.reload()); // Redirect to the homepage or login page
  },
  updatePassword(newPassword) {
    // ideally make an API call backend to securely update the password
    this.newPassword = this.correctPassword;
    alert('Password updated successfully!');
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
