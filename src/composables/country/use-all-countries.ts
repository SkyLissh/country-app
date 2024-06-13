import { useQuery } from "@tanstack/vue-query";

import { api } from "@/config";
import { CountrySchema } from "@/schemas/country";

export const useAllCountries = () => {
  const res = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await fetch(`${api}/all`);
      return CountrySchema.array().parse(await res.json());
    },
    refetchOnWindowFocus: false,
  });

  return res;
};
