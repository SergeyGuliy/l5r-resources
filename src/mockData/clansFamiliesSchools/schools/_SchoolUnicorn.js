import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { appeal } from "@/mockData/routeData/techniques/_appeal";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { katas } from "@/mockData/routeData/techniques/_kata";

const obj = {
  UnicornClanIde: {
    title: "Школа Купцов Идэ [Придворный]",
    key: "UnicornClanIde",
    ringIncrease: [_rings.air, _rings.water],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Uchtivost,
        skills.Igry,
        skills.Rabota,
        skills.Boevye_iskusstva_Strelba,
        skills.Medicina,
        skills.Vyzhivanie,
      ],
      toSelect: 5,
    },
    startHonor: 45,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Pritoki_torgovli],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [shuji.Intonaciya, shuji.Melkovode],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.StrangeStaffSeller,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  UnicornClanIuti: {
    title: "Школа Мастеров Мейсёдо Иути [Сюгендзя, Ремесленник]",
    key: "UnicornClanIuti",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Estetika,
        skills.Dizayn,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Meditaciya,
        skills.Vyzhivanie,
        skills.Teologiya,
      ],
      toSelect: 3,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.appealGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.appealGroup,
        items: [
          appeal.Zahvat_Zemli,
          appeal.Balzam_Dzjorodzina,
          appeal.Stremitelnaya_volna,
        ],
        toSelect: 2,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Raskopannaya_rodoslovnaya, shuji.Kolodec_zhelaniy],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.NamePath,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  UnicornClanMoto: {
    title: "Школа Завоевателей Мото [Буси]",
    key: "UnicornClanMoto",
    ringIncrease: [_rings.fire, _rings.water],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Fizicheskaya_podgotovka,
        skills.Vystuplenie,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Vyzhivanie,
        skills.Taktika,
      ],
      toSelect: 5,
    },
    startHonor: 35,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Molnienosnyy_reyd, shuji.Skolzkie_manyovry],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Vsyo_v_shutku],
      },
    ],
    schoolAbility: schoolAbilities.WindOfDesert,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  UnicornClanSindze: {
    title: "Школа Наездников Синдзё [Буси, Придворный]",
    key: "UnicornClanSindze",
    ringIncrease: [_rings.earth, _rings.fire],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Strelba,
        skills.Medicina,
        skills.Zhulnichestvo,
        skills.Vyzhivanie,
        skills.Taktika,
      ],
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
        items: [katas.Razrushitelnyy_kak_Ogon, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Skorost_Gospozhi_Sindzyo_Edinorog],
      },
    ],
    schoolAbility: schoolAbilities.BurnOnHorse,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  UnicornClanYtaku: {
    title: "Школа Боевых Дев Утаку [Буси]",
    key: "UnicornClanYtaku",
    ringIncrease: [_rings.air, _rings.earth],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Fizicheskaya_podgotovka,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Meditaciya,
        skills.Kuznechnoe_delo,
        skills.Vyzhivanie,
      ],
      toSelect: 5,
    },
    startHonor: 50,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Stil_polumesyaca, katas.Stil_zheleznogo_lesa],
        toSelect: 1,
      },
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Reshimost_voina],
      },
    ],
    schoolAbility: schoolAbilities.HeroicAttack,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
};

export const _SchoolUnicorn = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.description, injectImages),
}));
