import { groups, translations } from "@/mockData/routeData/constants";
import { _terrain } from "@/mockData/routeData/terrain/_terrain";

export const terrainRouteData = {
  [groups.terrain]: {
    title: translations.terrain,
    list: _terrain,
    useTechLvls: false,
    useSearch: true,
  },
};
