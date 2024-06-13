<script setup lang="ts">
import { provide } from "vue";
import { selectKey, selectValueKey, useSelect, type SelectedValue } from "./use-select";

const select = useSelect();
const selected = defineModel<SelectedValue>();

provide(selectKey, select);
provide(selectValueKey, selected);
</script>

<template>
  <div class="relative w-60 max-w-full">
    <slot />
  </div>
</template>
