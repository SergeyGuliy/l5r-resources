import { groups, text } from "@/mockData/routeData/constants";
import { _terrain } from "@/mockData/routeData/terrain/_terrain";

export const terrainRouteData = {
  [groups.terrain]: {
    title: text.terrain,
    list: _terrain,
    useTechLvls: false,
    useSearch: true,
  },
};
