import { groups, text } from "@/mockData/routeData/constants";

import { _conflictActionsBattle } from "@/mockData/routeData/conflictActions/_conflictActionsBattle";
import { _conflictActionsIntrigues } from "@/mockData/routeData/conflictActions/_conflictActionsIntrigues";
import { _conflictActionsDuels } from "@/mockData/routeData/conflictActions/_conflictActionsDuels";

export const conflictActionsRouteData = {
  [groups.conflictActions]: {
    title: text.conflictActions,
    list: {
      ..._conflictActionsIntrigues,
      ..._conflictActionsBattle,
      ..._conflictActionsDuels,
    },
    useTechLvls: false,
    useSearch: true,
    filterSettings: [
      {
        group: groups.conflictActions,
        subGroups: [
          groups.conflictActionsIntrigues,
          groups.conflictActionsDuels,
          groups.conflictActionsBattle,
        ],
      },
    ],
  },
};
