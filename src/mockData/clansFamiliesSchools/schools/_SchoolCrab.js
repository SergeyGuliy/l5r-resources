import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";

const obj = {
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    descriptionAbout: `
<p>111</p>
    `,
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [skills.Torgovlya, skills.Uchtivost],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.kataGroup,
        items: [],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [],
        toSelect: 1,
      },
    ],
    schoolAbility: `
<p><strong>111</strong>222</p>
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
