import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, techGroups } from "@/mockData/constants";

import { _kataGeneral } from "@/mockData/techniques/_kata/_kataGeneral";
import { _kataMelee } from "@/mockData/techniques/_kata/_kataMelee";
import { _kataRange } from "@/mockData/techniques/_kata/_kataRange";

export const katas = [
  ..._kataGeneral.map((i) => ({ ...i, subgroup: techGroups.kataGeneral })),
  ..._kataMelee.map((i) => ({ ...i, subgroup: techGroups.kataMelee })),
  ..._kataRange.map((i) => ({ ...i, subgroup: techGroups.kataRange })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: techGroups.kata,
  link: generateLink(i.name),
}));

export const katasFilterSettings = {
  techGroup: techGroups.kata,
  subGroups: [
    techGroups.kataGeneral,
    techGroups.kataRange,
    techGroups.kataMelee,
  ],
};
