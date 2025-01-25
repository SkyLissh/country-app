<script setup lang="ts">
import { computed } from "vue";

import { ArrowLeft } from "lucide";
import { useRoute } from "vue-router/auto";

import Button from "@/components/button.vue";

import { useCountryByName } from "@/composables/country/use-country-by-name";

const route = useRoute("/country/[name]");

const { data: country } = useCountryByName(route.params.name);

const currencies = computed(() => {
  console.log(country.value);
  if (!country.value) return "";

  return Object.values(country.value[0].currencies ?? {})
    .map((currency) => currency.name)
    .join(", ");
});

const languages = computed(() => {
  if (!country.value) return "";
  return Object.values(country.value[0].languages ?? {}).join(", ");
});
</script>

<template>
  <main v-if="country" class="container mx-auto flex h-full flex-col gap-10 px-4 py-10">
    <Button class="self-start" @click="$router.back()">
      <ArrowLeft />
      Back
    </Button>

    <div class="flex flex-col gap-10 lg:flex-row">
      <img
        class="aspect-video w-full self-center rounded-lg lg:w-1/2"
        :src="country[0].flags.svg"
        :alt="country[0].flags.alt"
      />

      <div class="flex flex-col gap-12 lg:gap-6">
        <h1 class="text-4xl font-bold">{{ country[0].name.common }}</h1>

        <div class="flex flex-col gap-12 lg:flex-row lg:gap-24">
          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-lg font-bold">
                Official Name:
                <span class="font-light">{{ country[0].name.official }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Population:
                <span class="font-light">{{ country[0].population }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Region:
                <span class="font-light">{{ country[0].region }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Subregion:
                <span class="font-light">{{ country[0].subregion }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Capital:
                <span class="font-light">{{ country[0].capital?.[0] }}</span>
              </p>
            </li>
          </ul>

          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-lg font-bold">
                Top Level Domain:
                <span class="font-light">{{ country[0].tld?.[0] }}</span>
              </p>
            </li>

            <li>
              <p class="text-lg font-bold">
                Currencies:
                <span class="font-light">{{ currencies }}</span>
              </p>
            </li>

            <li>
              <p class="text-lg font-bold">
                Languages:
                <span class="font-light">{{ languages }}</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4 lg:mt-10">
          <h2 class="text-2xl font-bold">Border Countries</h2>
          <ul class="flex flex-wrap gap-4">
            <li v-for="border in country[0].borders" :key="border">
              <div
                class="flex items-center justify-center rounded-md bg-gray-300 px-8 py-1 dark:bg-gray-700"
              >
                <p>{{ border }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
