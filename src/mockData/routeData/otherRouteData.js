import {
  groups,
  hiddenOtherTechniquesGroupsTrue,
  hiddenOtherWeaponGroups,
  hiddenOtherWeaponsAndArmorData,
  translations,
} from "@/mockData/routeData/constants";

import { weaponGroups } from "@/mockData/routeData/weaponGroups";
import { weaponsAndArmorData } from "@/mockData/routeData/weaponsAndArmorData";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";

const filterSettings = [
  {
    group: groups.techniquesGroups,
    subGroups: [hiddenOtherTechniquesGroupsTrue],
  },
  {
    group: groups.weaponGroups,
    subGroups: [hiddenOtherWeaponGroups],
  },
  {
    group: groups.weaponsAndArmorData,
    subGroups: [hiddenOtherWeaponsAndArmorData],
  },
];

export const otherRouteData = {
  [groups.other]: {
    title: translations.other,
    list: {
      ...weaponGroups,
      ...weaponsAndArmorData,
      ...techniquesGroups,
    },
    filterSettings,
    useTechLvls: false,
    useSearch: true,
  },
};
