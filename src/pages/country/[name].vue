<script setup lang="ts">
import { ArrowLeft } from "lucide";
import { useRoute } from "vue-router/auto";

import Button from "@/components/button.vue";

import { useCountryByName } from "@/composables/country/use-country-by-name";

const route = useRoute("/country/[name]");

const { data: country } = useCountryByName(route.params.name);
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
        :alt="country[0].name.common"
      />

      <div class="flex flex-col gap-6">
        <h1 class="text-4xl font-bold">{{ country[0].name.common }}</h1>

        <div class="flex gap-6">
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
                Official Name:
                <span class="font-light">{{ country[0].name.official }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Official Name:
                <span class="font-light">{{ country[0].name.official }}</span>
              </p>
            </li>
            <li>
              <p class="text-lg font-bold">
                Official Name:
                <span class="font-light">{{ country[0].name.official }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
