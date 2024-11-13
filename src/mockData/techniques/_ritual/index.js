import { replaceCharacter } from "@/helpers/replaceCharacter";
import { hiddenRitualsTrue, injectImages, groups } from "@/mockData/constants";
import { generateLink } from "@/helpers/generateLink";
import { _ritual } from "@/mockData/techniques/_ritual/_ritual";

export const ritual = _ritual.map((i) => ({
  ...i,
  description: replaceCharacter(i.description, injectImages),
  subgroup: hiddenRitualsTrue,
  group: groups.ritual,
  link: generateLink(i.name),
}));

export const ritualFilterSettings = {
  group: groups.ritual,
  subGroups: [hiddenRitualsTrue],
};
