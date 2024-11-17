import { _SchoolCrab } from "@/mockData/clansFamiliesSchools/schools/_SchoolCrab";
import { groups, translations } from "@/mockData/routeData/constants";

export const schools = {
  ..._SchoolCrab,
};

export const schoolsRouteData = {
  [groups.schools]: {
    title: translations.schools,
    list: schools,
    useTechLvls: false,
    useSearch: true,
  },
};
