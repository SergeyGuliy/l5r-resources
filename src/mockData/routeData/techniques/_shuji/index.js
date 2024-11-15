import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, groups } from "@/mockData/routeData/constants";

import { _shujiEarth } from "@/mockData/routeData/techniques/_shuji/_shujiEarth";
import { _shujiAir } from "@/mockData/routeData/techniques/_shuji/_shujiAir";
import { _shujiFire } from "@/mockData/routeData/techniques/_shuji/_shujiFire";
import { _shujiWater } from "@/mockData/routeData/techniques/_shuji/_shujiWater";
import { _shujiVoid } from "@/mockData/routeData/techniques/_shuji/_shujiVoid";

export const shuji = [
  ..._shujiEarth.map((i) => ({ ...i, subgroup: groups.shujiEarth })),
  ..._shujiAir.map((i) => ({ ...i, subgroup: groups.shujiAir })),
  ..._shujiFire.map((i) => ({ ...i, subgroup: groups.shujiFire })),
  ..._shujiWater.map((i) => ({ ...i, subgroup: groups.shujiWater })),
  ..._shujiVoid.map((i) => ({ ...i, subgroup: groups.shujiVoid })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: groups.shuji,
  link: generateLink(i.title),
}));

export const shujiFilterSettings = {
  group: groups.shuji,
  subGroups: [
    groups.shujiEarth,
    groups.shujiWater,
    groups.shujiAir,
    groups.shujiFire,
    groups.shujiVoid,
  ],
};
