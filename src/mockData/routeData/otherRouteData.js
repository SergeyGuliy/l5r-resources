import { groups, translations } from "@/mockData/routeData/constants";

import { weaponGroups } from "@/mockData/routeData/weaponGroups";
import { weaponsAndArmorData } from "@/mockData/routeData/weaponsAndArmorData";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";

export const otherRouteData = {
  [groups.other]: {
    title: translations.other,
    list: {
      ...weaponGroups,
      ...weaponsAndArmorData,
      ...techniquesGroups,
    },
    useTechLvls: false,
    useSearch: true,
  },
};
