import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { computed } from "vue";

export const useGridColumns = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const activeBreakpoint = breakpoints.active();
  const columns = computed(() => {
    const breakpoint = activeBreakpoint.value;

    if (breakpoints.between("xl", "2xl").value || breakpoints.greater("2xl").value)
      return 4;
    if (breakpoint === "lg") return 3;
    if (breakpoint === "md") return 2;
    return 1;
  });

  return columns;
};
