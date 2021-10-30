import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editMigrante",
    name: "EditMigrante",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/EditMigrante.vue"),
},
{
  path: "/newMigrante",
  name: "newMigrante",
  component: () =>
  import(/* webpackChunkName: "about" */ "../views/newMigrante.vue"),
},
{
  path: "/loginMigrante",
  name: "loginMigrante",
  component: () =>
  import(/* webpackChunkName: "about" */ "../views/loginMigrante.vue"),
},
{
  path: "/newEmpresa",
  name: "newEmpresa",
  component: () =>
  import(/* webpackChunkName: "about" */ "../views/newEmpresa.vue"),
},
{
  path: "/loginEmpresa",
  name: "loginEmpresa",
  component: () =>
  import(/* webpackChunkName: "about" */ "../views/loginEmpresa.vue"),
},
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
