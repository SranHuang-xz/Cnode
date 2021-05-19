<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="side"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import Header from "./components/Header";
import router from "./router";
export default {
  name: "App",
  components: {
    Header,
  },
  router: router,
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
}
.main {
  width: 80%;
  margin: auto;
}
#app {
  background-color: #e1e1e1;
  min-height: 100vh;
}
</style>
