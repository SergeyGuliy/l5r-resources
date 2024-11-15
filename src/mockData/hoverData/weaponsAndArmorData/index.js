import { armors } from "@/mockData/hoverData/weaponsAndArmorData/_armors";
import { meleeWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_meleeWeapons";
import { rangeWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_rangeWeapons";
import { unarmedWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_unarmedWeapons";
import { specialWeapons } from "@/mockData/hoverData/weaponsAndArmorData/_specialWeapons";

export const weaponsAndArmorData = {
  ...meleeWeapons,
  ...rangeWeapons,
  ...unarmedWeapons,
  ...specialWeapons,
  ...armors,
};
