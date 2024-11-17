import { groups, translations } from "@/mockData/routeData/constants";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";

export const weapArmPropRouteData = {
  [groups.weapArmProp]: {
    title: translations.weapArmProp,
    list: _weapArmProp,
    useTechLvls: false,
    useSearch: true,
  },
};
