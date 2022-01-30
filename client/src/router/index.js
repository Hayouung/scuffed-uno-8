import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Game from "@/views/Game.vue";
import Stats from "@/views/Stats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
