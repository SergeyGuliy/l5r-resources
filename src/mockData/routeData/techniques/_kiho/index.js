import { groups } from "@/mockData/routeData/constants";

import { _kihoFire } from "@/mockData/routeData/techniques/_kiho/_kihoFire";
import { _kihoWater } from "@/mockData/routeData/techniques/_kiho/_kihoWater";
import { _kihoAir } from "@/mockData/routeData/techniques/_kiho/_kihoAir";
import { _kihoEarth } from "@/mockData/routeData/techniques/_kiho/_kihoEarth";
import { _kihoVoid } from "@/mockData/routeData/techniques/_kiho/_kihoVoid";

export const kiho = {
  ..._kihoFire,
  ..._kihoWater,
  ..._kihoAir,
  ..._kihoEarth,
  ..._kihoVoid,
};

export const kihoFilterSettings = {
  group: groups.kiho,
  subGroups: [
    groups.kihoEarth,
    groups.kihoWater,
    groups.kihoFire,
    groups.kihoAir,
    groups.kihoVoid,
  ],
};
