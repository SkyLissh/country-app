<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import { Search } from "lucide";
import { ref, watch } from "vue";

import CountryList from "@/components/country-list.vue";
import { Input, InputField, InputIcon } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

import type { Country } from "@/schemas/country";
import { RegionEnum, type Region } from "@/schemas/region";

import { useAllCountries } from "@/composables/country/use-all-countries";

const region = ref<Region | undefined>();
const name = ref<string | undefined>();

const { data: countries } = useAllCountries();
const filteredCountries = ref<Country[] | undefined>(countries.value);

watch(countries, () => (filteredCountries.value = countries.value));

watch(
  name,
  useDebounceFn(() => {
    filteredCountries.value = countries.value?.filter(
      (country) =>
        country.region.toLowerCase().includes(region.value?.toLowerCase() ?? "") &&
        country.name.common.toLowerCase().includes(name.value?.toLowerCase() ?? "")
    );
  }, 300)
);

watch(region, () => {
  name.value = undefined;
  filteredCountries.value = countries.value?.filter((country) =>
    country.region.toLowerCase().includes(region.value?.toLowerCase() ?? "")
  );
});
</script>

<template>
  <main class="container mx-auto flex h-full flex-col gap-10 px-4 py-10">
    <div
      class="flex flex-col flex-wrap gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <InputField>
        <InputIcon>
          <Search />
        </InputIcon>

        <Input type="search" placeholder="Search for a country..." v-model="name" />
      </InputField>

      <Select v-model="region">
        <SelectTrigger>
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem
            v-for="option in RegionEnum.Values"
            :key="option"
            :value="option.toLowerCase()"
          >
            {{ option }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <CountryList :countries="filteredCountries" />
  </main>
</template>
