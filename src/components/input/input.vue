<script setup lang="ts">
const model = defineModel<string>();
</script>

<template>
  <input
    v-model="model"
    class="w-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-700"
  />
</template>
