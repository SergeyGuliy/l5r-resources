import { groups } from "@/mockData/routeData/constants";

import { _appealFire } from "@/mockData/routeData/techniques/_appeal/_appealFire";
import { _appealEarth } from "@/mockData/routeData/techniques/_appeal/_appealEarth";
import { _appealAir } from "@/mockData/routeData/techniques/_appeal/_appealAir";
import { _appealWater } from "@/mockData/routeData/techniques/_appeal/_appealWater";

export const appeal = {
  ..._appealEarth,
  ..._appealAir,
  ..._appealFire,
  ..._appealWater,
};

export const appealFilterSettings = {
  group: groups.appeal,
  subGroups: [
    groups.appealEarth,
    groups.appealAir,
    groups.appealFire,
    groups.appealWater,
  ],
};
