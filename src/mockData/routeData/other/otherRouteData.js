import {
  groups,
  hiddenOtherRings,
  hiddenOtherTechniquesGroupsTrue,
  hiddenOtherWeaponGroups,
  hiddenOtherWeaponsAndArmorData,
  translations,
} from "@/mockData/routeData/constants";

import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";
import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

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
  {
    group: groups.rings,
    subGroups: [hiddenOtherRings],
  },
];

export const otherRouteData = {
  [groups.other]: {
    title: translations.other,
    list: {
      ...techniquesGroups,
      ...weaponGroups,
      ...weaponsAndArmorData,
      ..._rings,
    },
    filterSettings,
    useTechLvls: false,
    useSearch: true,
  },
};
