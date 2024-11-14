import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, groups } from "@/mockData/routeData/constants";

import { _appealFire } from "@/mockData/routeData/techniques/_appeal/_appealFire";
import { _appealEarth } from "@/mockData/routeData/techniques/_appeal/_appealEarth";
import { _appealAir } from "@/mockData/routeData/techniques/_appeal/_appealAir";
import { _appealWater } from "@/mockData/routeData/techniques/_appeal/_appealWater";

export const appeal = [
  ..._appealEarth.map((i) => ({ ...i, subgroup: groups.appealEarth })),
  ..._appealAir.map((i) => ({ ...i, subgroup: groups.appealAir })),
  ..._appealFire.map((i) => ({ ...i, subgroup: groups.appealFire })),
  ..._appealWater.map((i) => ({ ...i, subgroup: groups.appealWater })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: groups.appeal,
  link: generateLink(i.name),
}));

export const appealFilterSettings = {
  group: groups.appeal,
  subGroups: [
    groups.appealEarth,
    groups.appealAir,
    groups.appealFire,
    groups.appealWater,
  ],
};
