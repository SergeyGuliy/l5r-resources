import { meleeWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_meleeWeapons";
import { rangeWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_rangeWeapons";
import { unarmedWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_unarmedWeapons";
import { armors } from "@/mockData/hoverData/weaponsAndArmorData/_armors";

export const weaponsAndArmorData = {
  ...meleeWeapons,
  ...rangeWeapons,
  ...unarmedWeapons,
  ...armors,
};
