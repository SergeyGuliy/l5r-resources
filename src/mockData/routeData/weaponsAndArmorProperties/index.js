import { groups, text } from "@/mockData/routeData/constants";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";

export const weapArmPropRouteData = {
  [groups.weapArmProp]: {
    title: text.weapArmProp,
    list: _weapArmProp,
    useTechLvls: false,
    useSearch: true,
  },
};
