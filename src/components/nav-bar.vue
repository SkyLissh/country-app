<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { Moon, Sun } from "lucide";

import Button from "@/components/button.vue";

const isDark = useDark();
</script>

<template>
  <nav class="flex items-center justify-between bg-white p-4 shadow-md dark:bg-gray-700">
    <h2 class="text-2xl font-extrabold">Where in the world?</h2>

    <Button @click="isDark = !isDark">
      <template v-if="isDark">
        <Sun />
        <span class="hidden md:block">Light Mode</span>
      </template>
      <template v-else>
        <Moon />
        <span class="hidden md:block">Dark Mode</span>
      </template>
    </Button>
  </nav>
</template>
