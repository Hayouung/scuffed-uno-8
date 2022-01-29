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

router.afterEach((to) => {
  const c = to.name === "Home" ? "ad-home" : "ad-game";
  const ads = document.getElementsByClassName("ad");

  Array.from(ads).forEach((ad) => {
    if (!ad.classList.contains(c)) {
      ad.style.display = "none";
    } else {
      ad.style.display = "block";
    }
  });

  console.log(ads);
});

export default router;
