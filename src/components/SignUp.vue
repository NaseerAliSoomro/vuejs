<template>
  <img
    src="https://img.freepik.com/free-vector/branding-identity-corporate-people-point-logo-vector-design-template_460848-14010.jpg?size=626&ext=jpg"
    alt=""
  />

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="register">
          <div class="form-group mb-3">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              id="name"
              placeholder="Your Name Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              id="email"
              placeholder="Your Email Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="password">Password:</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="password"
              placeholder="Your Password Goes Here ..."
            />
          </div>
          <button
            v-on:click="signUp"
            type="submit"
            class="btn btn-primary form-control mb-3"
          >
            Submit
          </button>
        </div>
        <p>
          <router-link to="/sign-in"> Sign In instead </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if(response.status == 201){
            console.log(response.data);
            // Store user info in localStorage
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            this.$router.push({ name: "HomePage" });
        }

      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted()
  {
    if(localStorage.getItem("userInfo")){
      this.$router.push({ name: "HomePage" });
    }
  }
};
</script>
