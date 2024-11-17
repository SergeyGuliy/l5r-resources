import { groups, translations } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";

export const ringsRouteData = {
  [groups.rings]: {
    title: translations.rings,
    list: _rings,
    useTechLvls: false,
    useSearch: true,
  },
};
