import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import {
  hiddenNinjutsuTrue,
  injectImages,
  groups,
} from "@/mockData/routeData/constants";

import { _ninjutsu } from "@/mockData/routeData/techniques/_ninjutsu/_ninjutsu";

export const ninjutsu = _ninjutsu.map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  subgroup: hiddenNinjutsuTrue,
  group: groups.ninjutsu,
  link: generateLink(i.name),
}));

export const ninjutsuFilterSettings = {
  group: groups.ninjutsu,
  subGroups: [hiddenNinjutsuTrue],
};
