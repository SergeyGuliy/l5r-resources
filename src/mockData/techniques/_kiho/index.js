import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, techGroups } from "@/mockData/constants";

import { _kihoFire } from "@/mockData/techniques/_kiho/_kihoFire";
import { _kihoWater } from "@/mockData/techniques/_kiho/_kihoWater";
import { _kihoAir } from "@/mockData/techniques/_kiho/_kihoAir";
import { _kihoEarth } from "@/mockData/techniques/_kiho/_kihoEarth";
import { _kihoVoid } from "@/mockData/techniques/_kiho/_kihoVoid";

export const kiho = [
  ..._kihoFire.map((i) => ({ ...i, subgroup: techGroups.kihoFire })),
  ..._kihoWater.map((i) => ({ ...i, subgroup: techGroups.kihoWater })),
  ..._kihoAir.map((i) => ({ ...i, subgroup: techGroups.kihoAir })),
  ..._kihoEarth.map((i) => ({ ...i, subgroup: techGroups.kihoEarth })),
  ..._kihoVoid.map((i) => ({ ...i, subgroup: techGroups.kihoVoid })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: techGroups.kiho,
  link: generateLink(i.name),
}));

export const kihoFilterSettings = {
  techGroup: techGroups.kiho,
  subGroups: [
    techGroups.kihoEarth,
    techGroups.kihoWater,
    techGroups.kihoFire,
    techGroups.kihoAir,
    techGroups.kihoVoid,
  ],
};
