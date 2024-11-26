import { groups, text } from "@/mockData/routeData/constants";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";

export const clans = _clans;

export const clansRouteData = {
  [groups.clans]: {
    title: text.clans,
    list: _clans,
    useTechLvls: false,
    useSearch: true,
  },
};
