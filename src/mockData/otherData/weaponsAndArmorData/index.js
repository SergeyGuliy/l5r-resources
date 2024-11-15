import { armors } from "@/mockData/otherData/weaponsAndArmorData/_armors";
import { meleeWeapons } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons";
import { rangeWeapons } from "@/mockData/otherData/weaponsAndArmorData/_rangeWeapons";
import { unarmedWeapons } from "@/mockData/otherData/weaponsAndArmorData/_unarmedWeapons";
import { specialWeapons } from "@/mockData/otherData/weaponsAndArmorData/_specialWeapons";

export const weaponsAndArmorData = {
  ...meleeWeapons,
  ...rangeWeapons,
  ...unarmedWeapons,
  ...specialWeapons,
  ...armors,
};
