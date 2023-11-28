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
            v-on:click="signIn"
            type="submit"
            class="btn btn-primary form-control mb-3"
          >
            Sign In
          </button>
          <p>
            <router-link to="/sign-up"> Sign Up </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        console.log(response.data.length);
        if (response.status == 200 && response.data.length > 0) {
          // Store user info in localStorage
          localStorage.setItem("userInfo", JSON.stringify(response.data[0]));
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
