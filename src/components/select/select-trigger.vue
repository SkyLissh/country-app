<script setup lang="ts">
import { ChevronDown } from "lucide";
import { inject } from "vue";

import { selectKey } from "./use-select";

const select = inject(selectKey)!;
</script>

<template>
  <button
    @click="select.toggle()"
    class="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-700"
    role="combobox"
    aria-labelledby="select button"
    aria-haspopup="listbox"
    :aria-expanded="select.open.value"
    aria-controls="select-dropdown"
  >
    <slot />
    <span
      class="transition-transform duration-300 ease-in-out"
      :class="{ 'rotate-180': select.open.value }"
    >
      <ChevronDown />
    </span>
  </button>
</template>
