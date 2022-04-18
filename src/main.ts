import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import HelloWorld from "./components/HelloWorld.vue";
import AboutMe from "./components/AboutMe.vue";
import NavBar from "./components/NavBar.vue";
import ProfileBox from "./components/ProfileBox.vue";
import Vue3MobileDetection from "vue3-mobile-detection";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";
import "normalize.css/normalize.css";
import "./index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3MobileDetection)
  .use(Equal)
  .component("HelloWorld", HelloWorld)
  .component("NavBar", NavBar)
  .component("ProfileBox", ProfileBox)
  .component("AboutMe", AboutMe)
  .mount("#app");
