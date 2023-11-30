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
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.owner }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update-restaurant/' + item.id"> Edit </router-link>
      </td>
      <td>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
      </td>
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
  methods: {
    async deleteRestaurant(id) {
      let response = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      if (response.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      if (!localStorage.getItem("userInfo")) {
        this.$router.push({ name: "SignUp" });
      } else {
        let user = localStorage.getItem("userInfo");
        this.username = JSON.parse(user).name;
      }

      let response = await axios.get("http://localhost:3000/restaurants");
      this.restaurant = response.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
