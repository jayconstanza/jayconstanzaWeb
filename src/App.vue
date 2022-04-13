<template>
  <NavBar />
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;200;300;400;500;600;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
  // padding: 0;
}
.it-dropdown-slot {
  position: fixed !important;
}
div.it-dropdown-slot--bottom {
  left: 0 !important;
  text-align: left !important;
}
</style>
<script lang="ts" setup>
import { onBeforeMount } from "vue";
import store from "./store";

onBeforeMount(() => {
  store.dispatch({ type: "changeLanguage", language: "es" });
});
</script>
