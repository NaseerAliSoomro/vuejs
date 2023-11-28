<template>
  <HeaderComponent />
  <h3>Hello, Welcome to Home page</h3>
</template>

<script>
import HeaderComponent from './Header.vue';
export default {
  name: "HomePage",
  
  components:{
    HeaderComponent
  },

  mounted() {
    if (!localStorage.getItem("userInfo")) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
