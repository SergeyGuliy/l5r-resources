import { groups, translations } from "@/mockData/routeData/constants";
import { _states } from "@/mockData/routeData/states/_states";

export const statesRouteData = {
  [groups.states]: {
    title: translations.states,
    list: _states,
    useTechLvls: false,
    useSearch: true,
  },
};
