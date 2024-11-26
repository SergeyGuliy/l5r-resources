import {
  groups,
  hiddenOtherHeroStats,
  hiddenOtherRings,
  hiddenOtherTechniquesGroupsTrue,
  hiddenOtherWeaponGroups,
  hiddenOtherWeaponsAndArmorData,
  text,
} from "@/mockData/routeData/constants";

import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";
import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { _heroStats } from "@/mockData/routeData/other/heroStats/_heroStats";

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
  {
    group: groups.heroStats,
    subGroups: [hiddenOtherHeroStats],
  },
];

export const otherRouteData = {
  [groups.other]: {
    title: text.other,
    list: {
      ...techniquesGroups,
      ...weaponGroups,
      ...weaponsAndArmorData,
      ..._rings,
      ..._heroStats,
    },
    filterSettings,
    useTechLvls: false,
    useSearch: true,
  },
};
