import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    description: `
<p>111</p>
    `,
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [skills.Torgovlya, skills.Uchtivost],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [],
    startingTechniques: {
      katas: {
        items: [],
        toSelect: 2,
      },
    },
    schoolAbility: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
};

export const _SchoolCrab = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.description, injectImages),
}));
