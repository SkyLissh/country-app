<script setup lang="ts">
defineProps<{
  name: string;
  population: number;
  region: string;
  capital: string;
  image: string;
}>();
</script>

<template>
  <article
    class="flex h-full flex-col rounded-lg border-blue-500 bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:border dark:bg-gray-700"
  >
    <img
      class="h-48 w-full rounded-t-lg object-cover"
      :src="image"
      :alt="name"
      loading="lazy"
    />

    <div class="flex flex-col gap-2 px-6 py-10">
      <h1 class="text-2xl font-extrabold">{{ name }}</h1>

      <ul class="flex flex-col gap-2">
        <li>
          <p class="text-base font-bold">
            Population: <span class="font-light">{{ population }}</span>
          </p>
        </li>

        <li>
          <p class="text-base font-bold">
            Region: <span class="font-light">{{ region }}</span>
          </p>
        </li>

        <li>
          <p class="text-base font-bold">
            Capital: <span class="font-light">{{ capital }}</span>
          </p>
        </li>
      </ul>
    </div>
  </article>
</template>
