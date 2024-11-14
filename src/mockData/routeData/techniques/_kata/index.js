import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, groups } from "@/mockData/routeData/constants";

import { _kataGeneral } from "@/mockData/routeData/techniques/_kata/_kataGeneral";
import { _kataMelee } from "@/mockData/routeData/techniques/_kata/_kataMelee";
import { _kataRange } from "@/mockData/routeData/techniques/_kata/_kataRange";

export const katas = [
  ..._kataGeneral.map((i) => ({ ...i, subgroup: groups.kataGeneral })),
  ..._kataMelee.map((i) => ({ ...i, subgroup: groups.kataMelee })),
  ..._kataRange.map((i) => ({ ...i, subgroup: groups.kataRange })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: groups.kata,
  link: generateLink(i.name),
}));

export const katasFilterSettings = {
  group: groups.kata,
  subGroups: [groups.kataGeneral, groups.kataRange, groups.kataMelee],
};
