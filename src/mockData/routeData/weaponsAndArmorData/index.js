import { armors } from "@/mockData/routeData/weaponsAndArmorData/_armors";
import { meleeWeapons } from "@/mockData/routeData/weaponsAndArmorData/_meleeWeapons";
import { rangeWeapons } from "@/mockData/routeData/weaponsAndArmorData/_rangeWeapons";
import { unarmedWeapons } from "@/mockData/routeData/weaponsAndArmorData/_unarmedWeapons";
import { specialWeapons } from "@/mockData/routeData/weaponsAndArmorData/_specialWeapons";

export const weaponsAndArmorData = {
  ...meleeWeapons,
  ...rangeWeapons,
  ...unarmedWeapons,
  ...specialWeapons,
  ...armors,
};
