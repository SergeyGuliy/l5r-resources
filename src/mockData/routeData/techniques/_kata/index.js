import { groups } from "@/mockData/routeData/constants";

import { _kataGeneral } from "@/mockData/routeData/techniques/_kata/_kataGeneral";
import { _kataMelee } from "@/mockData/routeData/techniques/_kata/_kataMelee";
import { _kataRange } from "@/mockData/routeData/techniques/_kata/_kataRange";

export const katas = {
  ..._kataGeneral,
  ..._kataMelee,
  ..._kataRange,
};

export const katasFilterSettings = {
  group: groups.kata,
  subGroups: [groups.kataGeneral, groups.kataRange, groups.kataMelee],
};
