import { groups, text } from "@/mockData/routeData/constants";
import { _bushido } from "@/mockData/routeData/bushido/_bushido";

export const bushidoRouteData = {
  [groups.bushido]: {
    title: text.bushido,
    list: _bushido,
    useTechLvls: false,
    useSearch: true,
  },
};
