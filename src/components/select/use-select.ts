import { ref, type InjectionKey, type ModelRef, type Ref } from "vue";

export type SelectedValue = string | number | undefined;

type SelectStore = {
  selected: Ref<SelectedValue>;
  selectedText: Ref<string | undefined>;
  open: Ref<boolean>;

  select: (value: SelectedValue, event: MouseEvent) => void;
  toggle: () => void;
};

export const useSelect: () => SelectStore = () => {
  const selected = ref<SelectedValue>(undefined);
  const selectedText = ref<string | undefined>(undefined);
  const open = ref(false);

  return {
    selected,
    selectedText,
    open,

    select: (value: SelectedValue, event: MouseEvent) => {
      selected.value = value;
      selectedText.value = (event.target as HTMLElement).textContent ?? undefined;
      open.value = false;
    },

    toggle: () => {
      open.value = !open.value;
    },
  };
};

export const selectKey = Symbol() as InjectionKey<SelectStore>;
export const selectValueKey = Symbol() as InjectionKey<ModelRef<SelectedValue, string>>;
