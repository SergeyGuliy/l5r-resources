import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import {
  hiddenNinjutsuTrue,
  injectImages,
  techGroups,
} from "@/mockData/constants";
import { _ninjutsu } from "@/mockData/techniques/_ninjutsu/_ninjutsu";

export const ninjutsu = _ninjutsu.map((kata) => ({
  ...kata,
  description: replaceCharacter(kata.description, injectImages),
  subgroup: hiddenNinjutsuTrue,
  group: techGroups.ninjutsu,
  link: generateLink(kata.name),
}));

export const ninjutsuFilterSettings = {
  techGroup: techGroups.ninjutsu,
  subGroups: [hiddenNinjutsuTrue],
};
