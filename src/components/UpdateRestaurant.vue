<template>
  <img
    src="https://img.freepik.com/free-vector/branding-identity-corporate-people-point-logo-vector-design-template_460848-14010.jpg?size=626&ext=jpg"
    alt=""
  />

  <div class="container">
    <h3>Update Restaurant</h3>
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
            v-on:click="updateRestaurant"
            type="button"
            class="btn btn-primary form-control mb-3"
          >
            Update
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
  name: "UpdateRestaurant",
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
    async updateRestaurant() {
      try {
        const response = await axios.put(
          "http://localhost:3000/restaurants/" + this.$route.params.id,
          {
            name: this.restaurant.name,
            owner: this.restaurant.owner,
            contact: this.restaurant.contact,
            address: this.restaurant.address,
          }
        );

        if (response.status == 200) {
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
  async mounted() {
    console.log(this.$route.params.id);
    try {
      const response = await axios.get(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {}
      );
      this.restaurant = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
