import { generateLink } from "@/helpers/generateLink";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { injectImages, kataGroups, techGroups } from "@/mockData/constants";
import { _kataGeneral } from "@/mockData/techniques/_katas/_kataGeneral";
import { _kataMelee } from "@/mockData/techniques/_katas/_kataMelee";
import { _kataRange } from "@/mockData/techniques/_katas/_kataRange";

export const katas = [
  ..._kataGeneral.map((i) => ({ ...i, subgroup: kataGroups.kataGeneral })),
  ..._kataMelee.map((i) => ({ ...i, subgroup: kataGroups.kataMelee })),
  ..._kataRange.map((i) => ({ ...i, subgroup: kataGroups.kataRange })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: techGroups.kata,
  link: generateLink(i.name),
}));

export const katasFilterSettings = {
  techGroup: techGroups.kata,
  subGroups: Object.keys(kataGroups),
};
