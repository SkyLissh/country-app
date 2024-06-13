import { useQuery } from "@tanstack/vue-query";

import { api } from "@/config";

import { CountrySchema } from "@/schemas/country";
import type { Region } from "@/schemas/region";

export const useCountryByRegion = (region: Region) => {
  const res = useQuery({
    queryKey: ["countries", region],
    queryFn: async () => {
      const res = await fetch(`${api}/region/${region}`);
      return CountrySchema.array().parse(await res.json());
    },
  });

  return res;
};
