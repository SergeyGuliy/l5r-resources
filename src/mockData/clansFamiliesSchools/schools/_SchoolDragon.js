import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { appeal } from "@/mockData/routeData/techniques/_appeal";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { katas } from "@/mockData/routeData/techniques/_kata";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { kiho } from "@/mockData/routeData/techniques/_kiho";

const obj = {
  DragonClanAgasya: {
    title: "Школа Мистиков Агася [Сюгендзя]",
    key: "DragonClanAgasya",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Medicina,
        skills.Meditaciya,
        skills.Kuznechnoe_delo,
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
        items: [appeal.Vnutrenniy_ogon, appeal.Tsutsubo_Zemli],
        toSelect: 1,
      },
      {
        type: techniquesGroups.appealGroup,
        items: [appeal.Put_k_vnutrennemu_pokoyu, appeal.Balzam_Dzjorodzina],
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obryad_ochishcheniya, ritual.Obshchenie_s_duhami],
      },
    ],
    schoolAbility: schoolAbilities.ElementTransmutation,
    descriptionAbout: `
<p>Мистики Агася смешивают практическое искусство
со своими воззваниями, используя алхимические
предметы и металлургию в качестве фокусировки
своего мистического искусства. Благодаря этому
они узнали, что все элементы взаимосвязаны, и что
изменяя их состояния, можно найти великую силу.
Они делают химические смеси, усиливающие или
усиленные магией, использующиеся для всего: от
простых развлечений до военных действий. Агася
вплетают свои молитвы в каждый созданный ими
предмет, от мечей до лекарств, стремясь раздвинуть границы своего понимания. Мистики Агася
привыкли выходить в мир, чтобы черпать вдохновение из природы во всех ее проявлениях.</p>
    `,
    startingEquipment: `
<p>Освященные одеяния, вакидзаси (короткий меч), бо (посох), нож, набор для
путешествий, сумка для свитков, набор стеклянных
флаконов, журнал.</p>
    `,
  },
  DragonClanKuchki: {
    title: "Школа Следователей Кицуки [Придворный, Буси]",
    key: "DragonClanKuchki",
    ringIncrease: [_rings.air, _rings.earth],
    skillAvailable: {
      items: [
        skills.Kultura,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Medicina,
        skills.Chuvstva,
        skills.Zhulnichestvo,
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
        type: techniquesGroups.kataGroup,
        items: [katas.Ustremlyonnyy_kak_Vozduh, katas.Takticheskaya_ocenka],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Melkovode],
      },
    ],
    schoolAbility: schoolAbilities.KitsukiMethod,
    descriptionAbout: `
<p>Школа Следователей Кицуки - это молодая школа,
основанная, когда Агася Кицуки, пользуясь уликами, спасла жизнь даймё Мирумото. Следователи
Кицуки используют свои методы наблюдения, экспериментов, логики и разума для понимания истины,
что ставит их вне норм судебной системы Рокугана,
основанной на свидетельствах. Следователи Кицуки
тяготеют к юридической работе в качестве магистратов и судей, а также служат придворными и представителями клана Дракона.</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, вакидзаси (короткий меч), нож, набор для каллиграфии, бо
(посох) или цзянь (меч с прямым лезвием), набор для
путешествий, журнал наблюдений.</p>
    `,
  },
  DragonClanMirumoto: {
    title: "Школа Адептов Двух Небес Мирумото [Буси]",
    key: "DragonClanMirumoto",
    ringIncrease: [_rings.earth, _rings.fire],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Kompoziciya,
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Meditaciya,
        skills.Taktika,
        skills.Teologiya,
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
        items: [
          katas.Razrushitelnyy_kak_Ogon,
          katas.Probivnoy_kak_Voda,
          katas.Prochnyy_kak_Zemlya,
        ],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Oslepitelnoe_predstavlenie],
      },
    ],
    schoolAbility: schoolAbilities.WayOfDragon,
    descriptionAbout: `
<p>Уникальный стиль двух мечей додзё Мирумото, нитен (или Два Неба), является лишь одним из компонентов их мастерства мечей и сражений. Ученики
этой школы следуют Дао Синсея и с его помощью
направляют себя на войне и в мире, применяя эти
практические уроки ко всему. Как и все Драконы,
они привыкли к физическим трудностям и могут выстоять под большим стрессом.</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, церемониальная
одежда, доспехи асигару,
дайсё (катана и вакидзаси)
или вакидзаси (короткий
меч) и любые два оружия редкостью 6 или
ниже, набор для путешествий.
</p>
    `,
  },
  DragonClanTagosi: {
    title: "Татуированный Орден Тогаси [Монах]",
    key: "DragonClanTagosi",
    ringIncrease: [_rings.earth, _rings.void],
    skillAvailable: {
      items: [
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Meditaciya,
        skills.Vyzhivanie,
        skills.Teologiya,
      ],
      toSelect: 4,
    },
    startHonor: 40,
    availableTechniques: [
      techniquesGroups.kihoGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.kihoGroup,
        items: [
          kiho.Zemlyanoy_kulak,
          kiho.Zemle_glaza_ne_nuzhny,
          kiho.Ognenniy_kulak,
          kiho.Zashita_ki,
          kiho.Vodnyy_kulak,
        ],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Pronicatelnost_Povelitelya_Togasi_Drakon],
      },
    ],
    schoolAbility: schoolAbilities.KamiBlood,
    descriptionAbout: `
<p>Монахи ордена Тогаси посвятили себя открытию
своей души и исполнению её предназначения, полагая, что это их индивидуальный путь к достижению
Просветления. В этом им помогают пророческие видения их лидера, Чемпиона клана Дракона, а также
мистические татуировки, связывающие их с орденом; искусность татуировок отображает их необычную силу. Только ставшие истинным исэ дзуми знают,
что сила татуировки проистекает из крови Тогаси,
Ками клана Дракона, смешанной с чернилами для
татуировки.</p>
    `,
    startingEquipment: `
<p>Обычная одежда, бо (посох), набор для путешествий.</p>
    `,
  },
};

export const _SchoolDragon = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.description, injectImages),
}));
