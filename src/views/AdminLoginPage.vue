<template>
    <div class="admin-login-container" v-if="isVisible">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="bg-custom-blue rounded text-white p-2 hover:bg-custom-teal">Login</button>
      </form>
      <p v-if="error" class="error-message pt-2">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
        isVisible: true
      };
    },
    methods: {
        login() {
      const adminUsername = "admin"; // Hardcoded admin username
      const adminPassword = "admin"; // Hardcoded admin password

      if (this.username === adminUsername && this.password === adminPassword) {
        // Admin authentication successful
        alert("Admin logged in successfully!");
        localStorage.setItem('isAdminLoggedIn', 'true');
        this.isVisible = false;
        // Here, you can redirect the admin to the dashboard or set an admin logged-in state
        // For example:
         this.$router.push({path: 'adminprojects'});

      } else {
        // Authentication failed
        this.error = "Invalid credentials. Please try again.";
      }
  }
    },
    created() {
  if (localStorage.getItem('isAdminLoggedIn') === 'true') {
    this.$router.push({path: 'adminprojects'});
    this.isVisible = false;
  }
}

    
  };

  
  </script>
  
  <style>

  .admin-login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ccc;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .error-message {
    color: red;
  }
  </style>