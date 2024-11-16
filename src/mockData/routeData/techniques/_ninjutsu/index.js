import { hiddenNinjutsuTrue, groups } from "@/mockData/routeData/constants";

import { _ninjutsu } from "@/mockData/routeData/techniques/_ninjutsu/_ninjutsu";

export const ninjutsu = _ninjutsu;

export const ninjutsuFilterSettings = {
  group: groups.ninjutsu,
  subGroups: [hiddenNinjutsuTrue],
};
