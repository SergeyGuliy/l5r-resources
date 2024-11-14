import { replaceCharacter } from "@/helpers/replaceCharacter";
import { generateLink } from "@/helpers/generateLink";

import { injectImages, groups, translations } from "@/mockData/constants";

import { _skillsCombat } from "@/mockData/skills/_skillsCombat";
import { _skillsScience } from "@/mockData/skills/_skillsScience";
import { _skillsSocial } from "@/mockData/skills/_skillsSocial";
import { _skillsWorking } from "@/mockData/skills/_skillsWorking";
import { _skillsCraft } from "@/mockData/skills/_skillsCraft";

const skills = [
  ..._skillsCombat.map((i) => ({ ...i, subgroup: groups.skillsCombat })),
  ..._skillsCraft.map((i) => ({ ...i, subgroup: groups.skillsCraft })),
  ..._skillsSocial.map((i) => ({ ...i, subgroup: groups.skillSocial })),
  ..._skillsScience.map((i) => ({ ...i, subgroup: groups.skillsScience })),
  ..._skillsWorking.map((i) => ({ ...i, subgroup: groups.skillsWorking })),
].map((i) => ({
  ...i,
  group: groups.skills,
  description: replaceCharacter(i.description, injectImages),
  link: generateLink(i.name),
}));

const skillsFilterSettings = {
  group: groups.skills,
  subGroups: [
    groups.skillsCombat,
    groups.skillsCraft,
    groups.skillSocial,
    groups.skillsScience,
    groups.skillsWorking,
  ],
};

export const skillsRouteData = {
  [groups.skills]: {
    title: translations.skills,
    list: skills,
    filterSettings: [skillsFilterSettings],
    useSearch: true,
  },
};
