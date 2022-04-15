import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import NavBar from "./components/NavBar.vue";
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
  .component("NavBar", NavBar)
  .mount("#app");
