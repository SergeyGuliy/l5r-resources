import { groups, translations } from "@/mockData/routeData/constants";

import { _skillsCombat } from "@/mockData/routeData/skills/_skillsCombat";
import { _skillsScience } from "@/mockData/routeData/skills/_skillsScience";
import { _skillsSocial } from "@/mockData/routeData/skills/_skillsSocial";
import { _skillsWorking } from "@/mockData/routeData/skills/_skillsWorking";
import { _skillsCraft } from "@/mockData/routeData/skills/_skillsCraft";

const skillsFilterSettings = {
  group: groups.skills,
  subGroups: [
    groups.skillsCombat,
    groups.skillsCraft,
    groups.skillsSocial,
    groups.skillsScience,
    groups.skillsWorking,
  ],
};

export const skills = {
  ..._skillsCombat,
  ..._skillsCraft,
  ..._skillsSocial,
  ..._skillsScience,
  ..._skillsWorking,
};

export const skillsRouteData = {
  [groups.skills]: {
    title: translations.skills,
    list: skills,
    filterSettings: [skillsFilterSettings],
    useSearch: true,
  },
};
