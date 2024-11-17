import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { katas } from "@/mockData/routeData/techniques/_kata";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { appeal } from "@/mockData/routeData/techniques/_appeal";
import { ritual } from "@/mockData/routeData/techniques/_ritual";

const obj = {
  CrabClanHida: {
    title: "Школа Защитников Хида [Буси]",
    key: "CrabClanHida",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Strelba,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Meditaciya,
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
        items: [katas.Zahvat_Povelitelya_Hida_Krab],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Prochnyy_kak_Zemlya, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.PathOfCrab,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanHiryma: {
    title: "Школа Разведчиков Хирума [Буси, Синоби]",
    key: "CrabClanHiryma",
    ringIncrease: [_rings.air, _rings.water],
    skillAvailable: {
      items: [
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Strelba,
        skills.Zhulnichestvo,
        skills.Vyzhivanie,
        skills.Taktika,
        skills.Teologiya,
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
        type: techniquesGroups.kataGroup,
        items: [katas.Stil_prolivnogo_grada, katas.Stil_stremitelnoy_laviny],
        toSelect: 1,
      },
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Ustremlyonnyy_kak_Vozduh, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.BlindingLight,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanKajy: {
    title: "Школа Инженеров Кайю [Ремесленник, Буси]",
    key: "CrabClanKajy",
    ringIncrease: [_rings.earth, _rings.fire],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Dizayn,
        skills.Rabota,
        skills.Boevye_iskusstva_Strelba,
        skills.Medicina,
        skills.Kuznechnoe_delo,
        skills.Teologiya,
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
        items: [katas.Takticheskaya_ocenka],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Razmeshivanie_ugley, shuji.Taktika_kamennoy_steny],
      },
    ],
    schoolAbility: schoolAbilities.MasterBuilder,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanKuni: {
    title: "Школа Очистителей Куни [Сюгендзя, Буси]",
    key: "CrabClanKuni",
    ringIncrease: [_rings.earth, _rings.fire],
    skillAvailable: {
      items: [
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Medicina,
        skills.Chuvstva,
        skills.Zhulnichestvo,
        skills.Vyzhivanie,
        skills.Teologiya,
      ],
      toSelect: 3,
    },
    startHonor: 35,
    availableTechniques: [
      techniquesGroups.appealGroup,
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Prochnyy_kak_Zemlya, katas.Razrushitelnyy_kak_Ogon],
        toSelect: 1,
      },
      {
        type: techniquesGroups.appealGroup,
        items: [appeal.Dosekh_Zemli, appeal.Nefritovy_udar],
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami, ritual.Porogovyy_barer],
      },
    ],
    schoolAbility: schoolAbilities.LookInShadow,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
  CrabClanYasuki: {
    title: "Школа Торговцев Ясуки [Придворный]",
    key: "CrabClanYasuki",
    ringIncrease: [_rings.air, _rings.earth],
    skillAvailable: {
      items: [
        skills.Torgovlya,
        skills.Kompoziciya,
        skills.Uchtivost,
        skills.Kultura,
        skills.Dizayn,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Strelba,
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
        type: techniquesGroups.shujiGroup,
        items: [shuji.Ocenka_remeslennika],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Shelest_listev, shuji.Kolodec_zhelaniy],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.WayOfFish,
    descriptionAbout: `
<p>111</p>
    `,
    startingEquipment: `
<p>111</p>
    `,
  },
};

export const _SchoolCrab = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.descriptionAbout, injectImages),
}));
