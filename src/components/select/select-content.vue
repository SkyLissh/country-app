<script setup lang="ts">
import { inject } from "vue";
import { selectKey } from "./use-select";

const select = inject(selectKey)!;
</script>

<template>
  <ul
    v-if="select.open.value"
    role="listbox"
    class="absolute z-20 mt-2 max-h-52 w-full overflow-y-auto rounded-md bg-white p-2 shadow-lg scrollbar-thin animate-in zoom-in-90 dark:bg-gray-700"
  >
    <slot />
    <Teleport to="body">
      <div class="fixed left-0 top-0 z-10 h-dvh w-dvw" @click="select.toggle()"></div>
    </Teleport>
  </ul>
</template>
