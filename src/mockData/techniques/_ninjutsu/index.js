import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import {
  hiddenNinjutsuTrue,
  injectImages,
  techGroups,
} from "@/mockData/constants";

import { _ninjutsu } from "@/mockData/techniques/_ninjutsu/_ninjutsu";

export const ninjutsu = _ninjutsu.map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  subgroup: hiddenNinjutsuTrue,
  group: techGroups.ninjutsu,
  link: generateLink(i.name),
}));

export const ninjutsuFilterSettings = {
  techGroup: techGroups.ninjutsu,
  subGroups: [hiddenNinjutsuTrue],
};
