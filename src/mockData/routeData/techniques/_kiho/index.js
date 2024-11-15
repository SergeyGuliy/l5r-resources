import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, groups } from "@/mockData/routeData/constants";

import { _kihoFire } from "@/mockData/routeData/techniques/_kiho/_kihoFire";
import { _kihoWater } from "@/mockData/routeData/techniques/_kiho/_kihoWater";
import { _kihoAir } from "@/mockData/routeData/techniques/_kiho/_kihoAir";
import { _kihoEarth } from "@/mockData/routeData/techniques/_kiho/_kihoEarth";
import { _kihoVoid } from "@/mockData/routeData/techniques/_kiho/_kihoVoid";

export const kiho = [
  ..._kihoFire.map((i) => ({ ...i, subgroup: groups.kihoFire })),
  ..._kihoWater.map((i) => ({ ...i, subgroup: groups.kihoWater })),
  ..._kihoAir.map((i) => ({ ...i, subgroup: groups.kihoAir })),
  ..._kihoEarth.map((i) => ({ ...i, subgroup: groups.kihoEarth })),
  ..._kihoVoid.map((i) => ({ ...i, subgroup: groups.kihoVoid })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: groups.kiho,
  link: generateLink(i.title),
}));

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
