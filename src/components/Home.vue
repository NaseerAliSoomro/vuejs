<template>
  <HeaderComponent />
  <h3>Hello {{ username }}, Welcome to Home page</h3>
  <table class="border border-stripe">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Owner</td>
      <td>Contact</td>
      <td>Address</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.owner }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
import HeaderComponent from "./Header.vue";
import axios from "axios";
export default {
  name: "HomePage",

  data() {
    return {
      username: "",
      restaurant: [],
    };
  },

  components: {
    HeaderComponent,
  },

  async mounted() {
    if (!localStorage.getItem("userInfo")) {
      this.$router.push({ name: "SignUp" });
    } else {
      let user = localStorage.getItem("userInfo");
      this.username = JSON.parse(user).name;
    }

    let response = await axios.get("http://localhost:3000/restaurants");
    // console.log(response);
    this.restaurant = response.data;
  },
};
</script>
