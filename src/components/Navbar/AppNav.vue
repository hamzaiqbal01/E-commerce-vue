<template>
  <nav class="navbar navbar-expand-lg border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="imagePath" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <router-link to="/login" class="custom-button login-button"
          >Login</router-link
        >
        <router-link to="/dashbord" class="custom-button signup-button"
          >Dashboard</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  name: "AppNav",
  data() {
    return {
      imagePath: logo,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
nav {
  padding: 0px 28px !important;
}
.navbar-brand img {
  width: 7rem;
}
.navbar-nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
.nav-item {
  font-size: 20px;
  margin: 0px 10px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
}
.nav-item:hover a {
  color: #003159 !important;
}
/* Custom button styles */
.custom-button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

.login-button {
  background-color: #3498db;
  color: #fff;
}

.signup-button {
  background-color: #003159;
  color: #fff;
}

.login-button:hover,
.signup-button:hover {
  opacity: 0.8;
}
</style>
