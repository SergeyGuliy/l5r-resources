import { groups, text } from "@/mockData/routeData/constants";
import { _stances } from "@/mockData/routeData/stances/_stances";

export const stancesRouteData = {
  [groups.stances]: {
    title: text.stances,
    list: _stances,
    useTechLvls: false,
    useSearch: true,
  },
};
