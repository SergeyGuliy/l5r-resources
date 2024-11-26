import { groups, text } from "@/mockData/routeData/constants";

import { _SchoolCrab } from "@/mockData/clansFamiliesSchools/schools/_SchoolCrab";
import { _SchoolCrane } from "@/mockData/clansFamiliesSchools/schools/_SchoolCrane";
import { _SchoolDragon } from "@/mockData/clansFamiliesSchools/schools/_SchoolDragon";
import { _SchoolLion } from "@/mockData/clansFamiliesSchools/schools/_SchoolLion";
import { _SchoolPhoenix } from "@/mockData/clansFamiliesSchools/schools/_SchoolPhoenix";
import { _SchoolScorpion } from "@/mockData/clansFamiliesSchools/schools/_SchoolScorpion";
import { _SchoolUnicorn } from "@/mockData/clansFamiliesSchools/schools/_SchoolUnicorn";

export const _schools = {
  ..._SchoolCrab,
  ..._SchoolCrane,
  ..._SchoolDragon,
  ..._SchoolLion,
  ..._SchoolPhoenix,
  ..._SchoolScorpion,
  ..._SchoolUnicorn,
};

export const schoolsRouteData = {
  [groups.schools]: {
    title: text.schools,
    list: _schools,
    useTechLvls: false,
    useSearch: true,
  },
};
