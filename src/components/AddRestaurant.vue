<template>
  <img
    src="https://img.freepik.com/free-vector/branding-identity-corporate-people-point-logo-vector-design-template_460848-14010.jpg?size=626&ext=jpg"
    alt=""
  />

  <div class="container">
    <h3> Add Restaurant </h3>
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
              placeholder="Restaurant Name Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="owner">Owner:</label>
            <input
              type="text"
              class="form-control"
              v-model="owner"
              id="owner"
              placeholder="Restaurant Owner Name Goes Here ..."
            />
          </div>
          <div class="form-group mb-3">
            <label for="address">Address:</label>
            <input
              type="address"
              class="form-control"
              v-model="address"
              id="address"
              placeholder="Your Address Goes Here ..."
            />
          </div>
          <button
            v-on:click="addRestaurant"
            type="submit"
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
// import axios from "axios";
export default {
  name: "AddRestaurant",
  data() {
    return {
      name: "",
      owner: "",
      address: "",
    };
  },
  methods: {
    addRestaurant() {
      alert("added");
    },
  },
};
</script>
