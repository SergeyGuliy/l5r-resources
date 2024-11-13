import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, techGroups } from "@/mockData/constants";

import { _shujiEarth } from "@/mockData/techniques/_shuji/_shujiEarth";
import { _shujiAir } from "@/mockData/techniques/_shuji/_shujiAir";
import { _shujiFire } from "@/mockData/techniques/_shuji/_shujiFire";
import { _shujiWater } from "@/mockData/techniques/_shuji/_shujiWater";
import { _shujiVoid } from "@/mockData/techniques/_shuji/_shujiVoid";

export const shuji = [
  ..._shujiEarth.map((i) => ({ ...i, subgroup: techGroups.shujiEarth })),
  ..._shujiAir.map((i) => ({ ...i, subgroup: techGroups.shujiAir })),
  ..._shujiFire.map((i) => ({ ...i, subgroup: techGroups.shujiFire })),
  ..._shujiWater.map((i) => ({ ...i, subgroup: techGroups.shujiWater })),
  ..._shujiVoid.map((i) => ({ ...i, subgroup: techGroups.shujiVoid })),
].map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  group: techGroups.shuji,
  link: generateLink(i.name),
}));

export const shujiFilterSettings = {
  techGroup: techGroups.shuji,
  subGroups: [
    techGroups.shujiEarth,
    techGroups.shujiWater,
    techGroups.shujiAir,
    techGroups.shujiFire,
    techGroups.shujiVoid,
  ],
};
