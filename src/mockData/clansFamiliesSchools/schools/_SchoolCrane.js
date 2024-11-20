import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { appeal } from "@/mockData/routeData/techniques/_appeal";
import { katas } from "@/mockData/routeData/techniques/_kata";
import { shuji } from "@/mockData/routeData/techniques/_shuji";

const obj = {
  CraneClanAsahina: {
    title: "Школа Ремесленников Асахина [Сюгендзя, Ремесленник]",
    key: "CraneClanAsahina",
    ringIncrease: [_rings.air, _rings.fire],
    skillAvailable: {
      items: [
        skills.Estetika,
        skills.Uchtivost,
        skills.Kultura,
        skills.Dizayn,
        skills.Igry,
        skills.Teologiya,
      ],
      toSelect: 3,
    },
    startHonor: 50,
    availableTechniques: [
      techniquesGroups.appealGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.appealGroup,
        items: [
          appeal.Blagoslovennyy_veter,
          appeal.Dospekh_Siyanija,
          appeal.Blagoslovenie_Inari,
          appeal.Otrazheniya_Pan_Ku,
          appeal.Znak_pamyati,
        ],
        toSelect: 3,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami, ritual.Obryad_ochishcheniya],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.SpiritMaster,
    descriptionAbout: `
<p>Искусство и религия переплетаются для Асахина.
Для них вера, красота и мир - аспекты одной и той
же истины. Асахина используют любую возможность
для распространения своей философии и улучшения гармонии в Империи. Их сфокусированность на
создании прекрасных вещей - это просто еще одна
попытка распространить мир и искусство по всему
Рокугану. Многие конфликты были решены религиозным ритуалом Асахина, показывающим путь к
примирению. Асахина делают все возможное, чтобы жить с пацифистскими идеалами в мире, полном
конфликтов. Это тяжело, однако они настойчивы и
уверены в своих принципах.</p>
    `,
    startingEquipment: `
<p>Освященные одеяния, вакидзаси (короткий меч), нож, юми (лук), колчан со
стрелами, сумка для свитков, набор для путешествий.</p>
    `,
  },
  CraneClanDajdodzi: {
    title: "Школа Железных воинов Дайдодзи [Буси]",
    key: "CraneClanDajdodzi",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Uchtivost,
        skills.Kultura,
        skills.Fizicheskaya_podgotovka,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Taktika,
      ],
      toSelect: 5,
    },
    startHonor: 55,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Stil_zheleznogo_lesa],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Prochnyy_kak_Zemlya, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.WiseMind,
    descriptionAbout: `
<p>Воины из додзё Дайдодзи составляют ядро небольшой постоянной армии клана Журавля. Это хорошо обученная тяжелая пехота, способная держать
строй и задержать наступление любого противника.
Многие враги разбились о непоколебимые копья и
железную дисциплину Железных воинов Дайдодзи.
Когда нет войн, в которых надо сражаться, многие
назначаются защитниками замков Журавлей или
йодзимбо (телохранителями) для странствующих
придворных Журавлей. Благодаря их бдительности и сплоченности, многие напряженные ситуации
остались под контролем, хотя говорят, что большинство Дайдодзи предпочитают честность поля битвы.</p>
    `,
    startingEquipment: `
<p>Лакированные доспехи, церемониальная одежда, дайсё (катана и вакидзаси),
яри (копье) или нагината (копье), юми (лук), колчан
со стрелами, нож, набор для каллиграфии, набор
для путешествий.</p>
    `,
  },
  CraneClanDodzi: {
    title: "Школа Дипломатов Додзи [Придворный]",
    key: "CraneClanDodzi",
    ringIncrease: [_rings.air, _rings.water],
    skillAvailable: {
      items: [
        skills.Estetika,
        skills.Kompoziciya,
        skills.Uchtivost,
        skills.Kultura,
        skills.Dizayn,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Strelba,
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
        type: techniquesGroups.shujiGroup,
        items: [shuji.Intonaciya, shuji.Melkovode, shuji.Shyopot_dvora],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Ukaz_Ledi_Dodzi_Zhuravl],
      },
    ],
    schoolAbility: schoolAbilities.SpeakInSilence,
    descriptionAbout: `
<p>Никто не играет в игры двора лучше, чем Журавли
- как-никак их клан написал правила. Дипломаты
Додзи - это хореографы изысканного танца обмена
любезностями, вручения подарков и приглашения
нужных людей на частные собрания. Они всегда находятся на острие моды и культуры, и дипломатам
Додзи никогда не нужно произносить недоброе
слово: их молчание говорит о многом, а простой
жест говорит еще больше. Их сети услуг, подарков
и приглашений позволяют им взвешивать приливы
и отливы социальной стороны Империи и корректировать весы в своих интересах.</p>
    `,
    startingEquipment: `
<p>Церемониальная одежда,
вакидзаси (короткий меч), юми (лук) или яри (копье),
набор для каллиграфии, набор для путешествий, сопровождающий или рокуганский пони (см.стр.326).</p>
    `,
  },
  CraneClanKakita: {
    title: "Школа Дуэлянтов Какита [Буси, Ремесленник]",
    key: "CraneClanKakita",
    ringIncrease: [_rings.air, _rings.earth],
    skillAvailable: {
      items: [
        skills.Uchtivost,
        skills.Dizayn,
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Meditaciya,
        skills.Chuvstva,
        skills.Kuznechnoe_delo,
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
        items: [katas.Udar_iaydzyucu_Voshodyashchiy_klinok],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Melkovode, shuji.Ves_dolga],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.WayOfCrane,
    descriptionAbout: `
<p>Школа Дуэлянтов Какита делает акцент на «один
удар - одно убийство», стремясь, чтобы ее ученики
овладели одним идеальным ударом, выполняемым
в поединке иайдзюцу. Для дуэлянтов Какита это вершина всех боевых навыков. Хотя другими боевыми
навыками не пренебрегают, они не находятся в центре внимания Академии Дуэли Какита в Цуме. Хотя
некоторые могут критиковать такую целеустремленную самоотверженность, дуэлянты Какита - лучшие в
Империи. Их мастерство владения катаной на этой
арене дополняет мастерство Додзи при дворе и усиливает влияние Журавля на политические течения
Империи</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, церемониальная одежда, дайсё (катана и вакидзаси),
яри (копье) или юми (лук), колчан со стрелами, набор для путешествий, сопровождающий или рокуганский пони (см.
стр.326).</p>
    `,
  },
};

export const _SchoolCrane = injector(obj, (original) => ({
  group: groups.schools,
  clan: "CraneClan",
  description: replaceCharacter(original.description, injectImages),
}));
