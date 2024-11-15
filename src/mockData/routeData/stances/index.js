import { groups, translations } from "@/mockData/routeData/constants";
import { _stances } from "@/mockData/routeData/stances/_stances";

export const stancesRouteData = {
  [groups.stances]: {
    title: translations.stances,
    list: _stances.map((i) => ({ ...i, group: groups.stances })),
    useTechLvls: false,
    useSearch: true,
  },
};
