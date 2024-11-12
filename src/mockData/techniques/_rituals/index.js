import { replaceCharacter } from "@/helpers/replaceCharacter";
import {
  hiddenRitualsTrue,
  injectImages,
  techGroups,
} from "@/mockData/constants";
import { generateLink } from "@/helpers/generateLink";
import { _rituals } from "@/mockData/techniques/_rituals/_rituals";

export const rituals = _rituals.map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  subgroup: hiddenRitualsTrue,
  group: techGroups.rituals,
  link: generateLink(i.name),
}));

export const ritualsFilterSettings = {
  techGroup: techGroups.rituals,
  subGroups: [hiddenRitualsTrue],
};
