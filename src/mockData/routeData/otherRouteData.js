import { groups, translations } from "@/mockData/routeData/constants";

import { weaponGroups } from "@/mockData/routeData/weaponGroups";
import { weaponsAndArmorData } from "@/mockData/routeData/weaponsAndArmorData";

export const otherRouteData = {
  [groups.other]: {
    title: translations.other,
    list: {
      ...weaponGroups,
      ...weaponsAndArmorData,
    },
    useTechLvls: false,
    useSearch: true,
  },
};
