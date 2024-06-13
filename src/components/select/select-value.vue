<script setup lang="ts">
import { inject } from "vue";
import { selectKey } from "./use-select";

defineProps<{ placeholder?: string }>();

const select = inject(selectKey)!;
</script>

<template>
  <span>{{ select.selectedText.value ? select.selectedText.value : placeholder }}</span>
</template>
