<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Add Restaurant</a> -->
            <router-link to="/add-restaurant"> Add Restaurant </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "HeaderComponent",
        methods: {
            logout() {
            localStorage.clear();
            this.$router.push({ name: "SignIn" });
            },
        },
    };
</script>
