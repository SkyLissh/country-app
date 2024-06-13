<script setup lang="ts">
import CountryCard from "./cards/country-card.vue";
import GridVirtualScroller from "./virtual-scroller/grid-virtual-scroller.vue";

import type { Country } from "@/schemas/country";

import { useGridColumns } from "@/composables/use-grid-columns";

defineProps<{ countries?: Country[] }>();

const columns = useGridColumns();
</script>

<template>
  <GridVirtualScroller
    v-if="countries"
    :data="countries"
    :columns="columns"
    :gap="64"
    :item-height="435"
    v-slot="{ item: country }"
  >
    <RouterLink :to="`/country/${country.name.common.toLocaleLowerCase()}`">
      <CountryCard
        :name="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital?.[0] ?? ''"
        :image="country.flags.svg"
      />
    </RouterLink>
  </GridVirtualScroller>
</template>
