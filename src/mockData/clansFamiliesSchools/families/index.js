import { groups, translations } from "@/mockData/routeData/constants";

import { _CrabClan } from "@/mockData/clansFamiliesSchools/families/_CrabClan";
import { _CraneClan } from "@/mockData/clansFamiliesSchools/families/_CraneClan";
import { _DragonClan } from "@/mockData/clansFamiliesSchools/families/_DragonClan";
import { _LionClan } from "@/mockData/clansFamiliesSchools/families/_LionClan";
import { _PhoenixClan } from "@/mockData/clansFamiliesSchools/families/_PhoenixClan";
import { _ScorpionClan } from "@/mockData/clansFamiliesSchools/families/_ScorpionClan";
import { _UnicornClan } from "@/mockData/clansFamiliesSchools/families/_UnicornClan";

export const _families = {
  ..._CrabClan,
  ..._CraneClan,
  ..._DragonClan,
  ..._LionClan,
  ..._PhoenixClan,
  ..._ScorpionClan,
  ..._UnicornClan,
};

export const familiesRouteData = {
  [groups.families]: {
    title: translations.families,
    list: _families,
    useTechLvls: false,
    useSearch: true,
  },
};
