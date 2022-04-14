<template>
  <NavBar />
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;200;300;400;500;600;700&family=Play:wght@400;700&family=Press+Start+2P&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
  text-rendering: optimizeLegibility;
  // padding: 0;
}
.fontDev {
  font-family: "Source Code Pro", monospace;
}
.fontPsych {
  font-family: "Raleway", sans-serif;
}
.fontStreamer {
  font-family: "Play", sans-serif;
}
.fontBeatmaker {
  font-family: "Teko", sans-serif;
}
.font500 {
  font-weight: 500;
}
.font900 {
  font-weight: 900;
}
.textWhite {
  color: #fff;
}
.bgBlack {
  background: rgba(0, 0, 0, 0.8);
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
