import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";

const obj = {
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
      ],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,

      techniquesGroups.kihoGroup,
      techniquesGroups.appealGroup,
      techniquesGroups.ninjutsuGroup,
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
    schoolAbility: schoolAbilities.LionPath,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
      ],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,

      techniquesGroups.kihoGroup,
      techniquesGroups.appealGroup,
      techniquesGroups.ninjutsuGroup,
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
    schoolAbility: schoolAbilities.LionsHeart,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
      ],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,

      techniquesGroups.kihoGroup,
      techniquesGroups.appealGroup,
      techniquesGroups.ninjutsuGroup,
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
    schoolAbility: schoolAbilities.AncestorsBless,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanHida: {
    title: "111",
    key: "CrabClanHida",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
        skills.Uchtivost,
      ],
      toSelect: 5,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,

      techniquesGroups.kihoGroup,
      techniquesGroups.appealGroup,
      techniquesGroups.ninjutsuGroup,
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
    schoolAbility: schoolAbilities.MazuRage,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
};

export const _SchoolLion = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.description, injectImages),
}));
