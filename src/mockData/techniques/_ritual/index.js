import { replaceCharacter } from "@/helpers/replaceCharacter";
import {
  hiddenRitualsTrue,
  injectImages,
  techGroups,
} from "@/mockData/constants";
import { generateLink } from "@/helpers/generateLink";
import { _ritual } from "@/mockData/techniques/_ritual/_ritual";

export const ritual = _ritual.map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  subgroup: hiddenRitualsTrue,
  group: techGroups.ritual,
  link: generateLink(i.name),
}));

export const ritualFilterSettings = {
  techGroup: techGroups.ritual,
  subGroups: [hiddenRitualsTrue],
};
