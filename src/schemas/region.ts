import { z } from "zod";

export const RegionEnum = z.enum(["Africa", "America", "Asia", "Europe", "Oceania"]);
export type Region = z.infer<typeof RegionEnum>;
