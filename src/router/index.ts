import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "hola",
    component: HomeView,
  },
  {
    path: "/",
    name: "sobre mí",
    component: HomeView,
  },
  {
    path: "/",
    name: "twitch",
    component: HomeView,
  },
  {
    path: "/",
    name: "youtube",
    component: HomeView,
  },
  {
    path: "/",
    name: "posts",
    component: HomeView,
  },
  {
    path: "/",
    name: "club",
    component: HomeView,
  },
  /*   {
      path: "/",
      name: "shop",
      component: HomeView,
    }, */
  {
    path: "/#contacto",
    name: "contacto",
    component: HomeView,
  },
  //{
  //path: "/about",
  //name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () =>
  //  import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    // always scroll 10px above the element #main
    return {
      // could also be
      // el: document.getElementById('main'),
      el: _to.hash,
      behavior: "smooth",
    };
  },
});

export default router;
