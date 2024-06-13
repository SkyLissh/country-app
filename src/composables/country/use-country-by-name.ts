import { useQuery } from "@tanstack/vue-query";

import { api } from "@/config";

import { CountrySchema } from "@/schemas/country";

export const useCountryByName = (name: string) => {
  const res = useQuery({
    queryKey: ["countries", name],
    queryFn: async () => {
      const res = await fetch(`${api}/name/${name}?fullText=true`);
      return CountrySchema.array().parse(await res.json());
    },
  });

  return res;
};
