import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";
import {
  groups,
  hiddenOtherWeaponsAndArmorData,
  injectImages,
} from "@/mockData/routeData/constants";

import { armors } from "@/mockData/routeData/weaponsAndArmorData/_armors";
import { meleeWeapons } from "@/mockData/routeData/weaponsAndArmorData/_meleeWeapons";
import { rangeWeapons } from "@/mockData/routeData/weaponsAndArmorData/_rangeWeapons";
import { unarmedWeapons } from "@/mockData/routeData/weaponsAndArmorData/_unarmedWeapons";
import { specialWeapons } from "@/mockData/routeData/weaponsAndArmorData/_specialWeapons";

const obj = {
  ...meleeWeapons,
  ...rangeWeapons,
  ...unarmedWeapons,
  ...specialWeapons,
  ...armors,
};

export const weaponsAndArmorData = injector(obj, (original) => ({
  group: groups.other,
  subgroup: hiddenOtherWeaponsAndArmorData,
  description: replaceCharacter(original.description, injectImages),
}));
