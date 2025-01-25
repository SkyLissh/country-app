<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { RouterView } from "vue-router";

import NavBar from "@/components/nav-bar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <VueQueryDevtools />
</template>
