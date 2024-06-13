import { z } from "zod";

export const CountrySchema = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
  }),
  flags: z.object({
    png: z.string().url(),
    svg: z.string().url(),
    alt: z.string().optional(),
  }),
  population: z.number(),
  region: z.string(),
  subregion: z.string().optional(),
  capital: z.array(z.string()).optional(),
});

export type Country = z.infer<typeof CountrySchema>;
