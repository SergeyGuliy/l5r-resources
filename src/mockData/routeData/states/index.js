import { groups, text } from "@/mockData/routeData/constants";
import { _states } from "@/mockData/routeData/states/_states";

export const statesRouteData = {
  [groups.states]: {
    title: text.states,
    list: _states,
    useTechLvls: false,
    useSearch: true,
  },
};
