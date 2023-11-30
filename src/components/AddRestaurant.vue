<template>
  <img
    src="https://img.freepik.com/free-vector/branding-identity-corporate-people-point-logo-vector-design-template_460848-14010.jpg?size=626&ext=jpg"
    alt=""
  />

  <div class="container">
    <h3>Add Restaurant</h3>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="register">
          <div class="form-group mb-3">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="restaurant.name"
              id="name"
              placeholder="Restaurant Name Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="owner">Owner:</label>
            <input
              type="text"
              class="form-control"
              v-model="restaurant.owner"
              id="owner"
              placeholder="Restaurant Owner Name Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="contact">Contact:</label>
            <input
              type="text"
              class="form-control"
              v-model="restaurant.contact"
              id="contact"
              placeholder="Restaurant Contact Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="address">Address:</label>
            <input
              type="address"
              class="form-control"
              v-model="restaurant.address"
              id="address"
              placeholder="Your Address Goes Here ..."
            />
          </div>
          <button
            v-on:click="addRestaurant"
            type="button"
            class="btn btn-primary form-control mb-3"
          >
            Add
          </button>
          <p>
            <router-link to="/"> Back </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddRestaurant",
  data() {
    return {
      restaurant: {
        name: "",
        owner: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      try {
        const response = await axios.post("http://localhost:3000/restaurants", {
          name: this.restaurant.name,
          owner: this.restaurant.owner,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        });

        if (response.status == 201) {
          console.log(response.data);
          // Store user info in localStorage
          localStorage.setItem("restaurantInfo", JSON.stringify(response.data));
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  // mounted()
  // {
  //     if(localStorage.getItem("restaurantInfo")){
  //     this.$router.push({ name: "HomePage" });
  //     }
  // }
};
</script>
