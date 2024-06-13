import "@/assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router/auto";

import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
