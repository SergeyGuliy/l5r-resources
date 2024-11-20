import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { ninjutsu } from "@/mockData/routeData/techniques/_ninjutsu";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { appeal } from "@/mockData/routeData/techniques/_appeal";

const obj = {
  ScorpionClanBaysi: {
    title: "Школа Манипуляторов Баюси [Придворный]",
    key: "ScorpionClanBaysi",
    ringIncrease: [_rings.air, _rings.fire],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Uchtivost,
        skills.Dizayn,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Vystuplenie,
        skills.Chuvstva,
        skills.Zhulnichestvo,
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
        items: [shuji.Shyopot_Povelitelya_Bayusi_Skorpion],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Intonaciya, shuji.Shelest_listev],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.WeaknessMyPower,
    descriptionAbout: `
<p>Искусно используя обман, искушение и шпионаж,
обученные Баюси придворные становятся мастерами в поиске и использовании чужих слабостей.
Ни один метод не является слишком бесчестным,
если он эффективен и не поддается отслеживанию.
Манипуляторы Баюси - это тень для света дипломатов Додзи, и их справедливо боятся все. Тем не
менее, ни один двор не обходится без своего негодяя-Скорпиона. Манипуляторы Баюси принимают
свои роли злодеев в пьесе, которая называется «Рокуган», и при этом они помогают удостовериться,
что ни один настоящий злодей не поднимет голову,
чтобы угрожать Императору.</p>
    `,
    startingEquipment: `
<p>церемониальная одежда;
повседневная одежда; дорожная одежда; вакидзаси (короткий меч); любое оружие редкости 6 или
ниже; набор для каллиграфии; набор для путешествий.</p>
    `,
  },
  ScorpionClanSesyro: {
    title: "Школа Лазутчиков Сёсуро [Синоби, Придворный]",
    key: "ScorpionClanSesyro",
    ringIncrease: [_rings.air, _rings.fire],
    skillAvailable: {
      items: [
        skills.Uchtivost,
        skills.Fizicheskaya_podgotovka,
        skills.Igry,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Vystuplenie,
        skills.Zhulnichestvo,
      ],
      toSelect: 5,
    },
    startHonor: 30,
    availableTechniques: [
      techniquesGroups.kataGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.ninjutsuGroup,
        items: [ninjutsu.Smertelnoe_zhalo],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Shyopot_dvora, shuji.Sensacionnoe_otvlechenie],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.WayOfShadows,
    descriptionAbout: `
<p>Лазутчики Сёсуро довели до совершенства искусство обмана. Благодаря своим хорошо отточенным
способностям в акробатике, маскировке и скрытности, эти агенты Скорпионов сталкиваются с очень
немногими местами, к которым они не могут получить доступ. Как агенты внезапности и разрушения,
они не стоят и сражаются, а сеют хаос и исчезают —
обычно для того, чтобы скрыть, в чем на самом деле
заключалась их миссия. Многие телохранители предотвратили очевидную попытку убийства, которая
была просто отвлечением внимания от цели, которую на самом деле искали Лазутчики Сёсуро. Такие
лазутчики могут растворяться в тени или, с таким
же мастерством, смешиваться с крестьянами, чтобы
стать невидимыми для глаз самураев.</p>
    `,
    startingEquipment: `
<p>Церемониальная одежда,
обычная одежда, дорожная одежда, дайсё (катана и
вакидзаси), нож, юми (лук), колчан со стрелами, набор для путешествий.</p>
    `,
  },
  ScorpionClanSosi: {
    title: "Школа Иллюзионистов Соси [Сюгендзя, Придворный, Синоби]",
    key: "ScorpionClanSosi",
    ringIncrease: [_rings.air, _rings.water],
    skillAvailable: {
      items: [
        skills.Uchtivost,
        skills.Fizicheskaya_podgotovka,
        skills.Igry,
        skills.Vystuplenie,
        skills.Zhulnichestvo,
        skills.Teologiya,
      ],
      toSelect: 5,
    },
    startHonor: 30,
    availableTechniques: [
      techniquesGroups.appealGroup,
      techniquesGroups.ritualGroup,
      techniquesGroups.shujiGroup,
    ],
    startingTechniques: [
      {
        type: techniquesGroups.appealGroup,
        items: [
          appeal.Bo_Vody,
          appeal.Plash_nochi,
          appeal.Prikosnovenie_prirody,
          appeal.Znak_pamyati,
        ],
        toSelect: 3,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Vsyo_v_shutku],
      },
    ],
    schoolAbility: schoolAbilities.KamiWispers,
    descriptionAbout: `
<p>Школа Иллюзионистов Соси - это школа шепота
и теней. “Изощрённость” - это лозунг иллюзионистов, когда они выполняют свои задачи. Даже их
религиозные ритуалы и обязанности, как правило,
преуменьшаются, хотя они выполняются не менее
добросовестно. Когда Скорпионам нужна духовная помощь во дворах, их изощрённые воззвания и
чуткое понимание ками позволяют им творить свои
молитвы невидимыми и неуслышанными. Иллюзионисты Соси - одни из самых практичных сюгендзя
в Империи, предпочитающие вместо пышности и
церемоний разборчивое и эффективное использование воззваний.</p>
    `,
    startingEquipment: `
<p>Освящённые облачения,
неприметная одежда, вакидзаси (короткий меч),
нож, сумка для свитков, набор для путешествий.</p>
    `,
  },
  ScorpionClanEgo: {
    title: "Школа Мастеров Оберегов Ёго [Сюгендзя]",
    key: "ScorpionClanEgo",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Kompoziciya,
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Meditaciya,
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
          appeal.Nefritovy_udar,
          appeal.Zahvat_Zemli,
          appeal.Stremitelnaya_volna,
        ],
        toSelect: 2,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Melkovode],
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami, ritual.Porogovyy_barer],
      },
    ],
    schoolAbility: schoolAbilities.MysticWrite,
    descriptionAbout: `
<p>Основанный Асако Ёго, когда он присоединился к
клану Скорпионов, додзё Мастеров Оберегов Ёго
является ведущей в Империи школой гиосецудо ¬–
искусства сверхъестественной защиты с помощью
мистической каллиграфии. На Ёго была возложена
защита двенадцати Черных Свитков, и они развивали техники своего основателя, чтобы предотвратить
обнаружение свитков темными силами и сдержать
их разрушительную мощь. Расчерчивая символы
силы на листках бумаги, пропитанных их ки, мастера
этой школы могут возводить невидимые барьеры,
связывать духов и разрушать заклинания. Ёго считают что, одна унция препарата это более чем достаточно для результата.</p>
    `,
    startingEquipment: `
<p>Освященные облачения,
скрытые доспехи, вакидзаси (короткий меч), бо (посох) или нож, три сюрикена (метательные звезды),
набор для каллиграфии, сумка для свитков, набор
для путешествий.</p>
    `,
  },
};

export const _SchoolScorpion = injector(obj, (original) => ({
  group: groups.schools,
  clan: "ScorpionClan",
  description: replaceCharacter(original.description, injectImages),
}));
