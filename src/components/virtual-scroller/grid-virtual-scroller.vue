<script setup lang="ts" generic="T">
import { useVirtualizer, useWindowVirtualizer } from "@tanstack/vue-virtual";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  gap?: number;
  columns: number;
  data: T[];
  itemHeight: number;
}>();

const scrollable = ref<HTMLElement | null>(null);
const scrollableOffset = ref(0);

const list = ref<HTMLElement | null>(null);
const itemWidth = computed(
  () =>
    ((list.value?.getBoundingClientRect().width ?? 0) -
      (props.gap ?? 0) * (props.columns - 1)) /
    props.columns
);

onMounted(() => {
  scrollableOffset.value = scrollable.value?.scrollTop ?? 0;
});

const rowOptions = computed(() => ({
  count: Math.ceil(props.data.length / props.columns),
  estimateSize: () => props.itemHeight,
  gap: props.gap ?? 0,
  scrollMargin: scrollableOffset.value,
  overscan: 5,
}));

const columnOptions = computed(() => ({
  horizontal: true,
  count: props.columns,
  gap: props.gap ?? 0,
  estimateSize: () => itemWidth.value,
  getScrollElement: () => scrollable.value,
  overscan: 5,
}));

const rowScroll = useWindowVirtualizer(rowOptions);
const columnScroll = useVirtualizer(columnOptions);

const height = computed(() => `${rowScroll.value.getTotalSize()}px`);

const rowItems = computed(() => rowScroll.value.getVirtualItems());
const columnItems = computed(() => columnScroll.value.getVirtualItems());

const measureElement = (element: HTMLElement | null): undefined => {
  if (!element) return;

  columnScroll.value.measureElement(element);

  return undefined;
};

const getIndex = (row: number, column: number) => row * props.columns + column;
</script>

<template>
  <div ref="scrollable">
    <ul ref="list" class="relative w-full max-w-full" :style="{ height }">
      <template v-for="row in rowItems" :key="row.key">
        <li
          v-for="column in columnItems"
          :data-index="getIndex(row.index, column.index)"
          :ref="measureElement"
          :key="column.key"
          class="absolute left-0 top-0 w-full"
          :style="{
            transform: `translateY(${row.start}px) translateX(${column.start}px)`,
            height: `${row.size}px`,
            width: `${itemWidth}px`,
          }"
        >
          <slot
            v-if="data[getIndex(row.index, column.index)]"
            :index="getIndex(row.index, column.index)"
            :item="data[getIndex(row.index, column.index)]"
          />
        </li>
      </template>
    </ul>
  </div>
</template>
