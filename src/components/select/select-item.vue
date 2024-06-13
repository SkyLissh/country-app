<script setup lang="ts" generic="T">
import { inject } from "vue";
import { selectKey, selectValueKey, type SelectedValue } from "./use-select";

defineProps<{ value: SelectedValue }>();

const select = inject(selectKey)!;
const selected = inject(selectValueKey)!;

const onSelect = (value: SelectedValue, event: MouseEvent) => {
  selected.value = value;
  select.select(value, event);
};
</script>

<template>
  <li>
    <label
      @click.prevent="(event) => onSelect(value, event)"
      class="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 has-[:checked]:bg-gray-200 hover:bg-gray-200 dark:has-[:checked]:bg-gray-600 dark:hover:bg-gray-600"
    >
      <input type="radio" name="option" class="hidden" />
      <span class="flex items-center gap-2">
        <slot />
      </span>
    </label>
  </li>
</template>
