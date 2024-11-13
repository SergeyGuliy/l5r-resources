import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, techGroups } from "@/mockData/constants";

import { _appealFire } from "@/mockData/techniques/_appeal/_appealFire";
import { _appealEarth } from "@/mockData/techniques/_appeal/_appealEarth";
import { _appealAir } from "@/mockData/techniques/_appeal/_appealAir";
import { _appealWater } from "@/mockData/techniques/_appeal/_appealWater";

export const appeal = [
  ..._appealEarth.map((i) => ({ ...i, subgroup: techGroups.appealEarth })),
  ..._appealAir.map((i) => ({ ...i, subgroup: techGroups.appealAir })),
  ..._appealFire.map((i) => ({ ...i, subgroup: techGroups.appealFire })),
  ..._appealWater.map((i) => ({ ...i, subgroup: techGroups.appealWater })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: techGroups.appeal,
  link: generateLink(i.name),
}));

export const appealFilterSettings = {
  techGroup: techGroups.appeal,
  subGroups: [
    techGroups.appealEarth,
    techGroups.appealAir,
    techGroups.appealFire,
    techGroups.appealWater,
  ],
};
