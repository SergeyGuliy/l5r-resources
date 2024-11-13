import { groups, translations } from "@/mockData/constants";
import { _states } from "@/mockData/states/_states";

export const statesRouteData = {
  [groups.states]: {
    title: translations.states,
    list: _states.map((i) => ({ ...i, group: groups.states })),
    useTechLvls: false,
    useSearch: true,
  },
};
