import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { katas } from "@/mockData/routeData/techniques/_kata";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { appeal } from "@/mockData/routeData/techniques/_appeal";

const obj = {
  LionClanAkado: {
    title: "Школа Командиров Акодо [Буси]",
    key: "LionClanAkado",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Fizicheskaya_podgotovka,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Strelba,
        skills.Meditaciya,
        skills.Taktika,
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
        items: [katas.Prochnyy_kak_Zemlya, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
      {
        type: techniquesGroups.kataGroup,
        items: [shuji.Ryk_Povelitelya_Akodo_Lev],
      },
    ],
    schoolAbility: schoolAbilities.LionPath,
    descriptionAbout: `
<p>Учебный план Военного колледжа Акодо сосредоточен на контроле своего оружия, поля битвы, течения конфликта и, в конечном счете, собственного
“я”. Его ученики изучают руководство Лидерства
Акодо, которое было написано самим Ками клана
Льва. В дополнение к обучению в качестве воинов,
командиры Акодо учатся быть лидерами на полях
сражений. Они часто рассматривают войну как игру
го, которая определяется точными ходами. Командиры Акодо бьют точно и без колебаний, нанося
удары мечом и армией. Их цель - вершина военного искусства: достичь поставленных целей с минимальными потерями.</p>
    `,
    startingEquipment: `
<p>Доспехи асигару, дорожная одежда, дайсё (катана и вакидзаси), яри (копье),
любое оружие редкостью 6 или меньше, два ножа,
юми (лук), колчан со стрелами, набор для путешествий.</p>
    `,
  },
  LionClanIkoma: {
    title: "Школа Бардов Икома [Придворный]",
    key: "LionClanIkoma",
    ringIncrease: [_rings.fire, _rings.water],
    skillAvailable: {
      items: [
        skills.Kompoziciya,
        skills.Uchtivost,
        skills.Kultura,
        skills.Boevye_iskusstva_Strelba,
        skills.Vystuplenie,
        skills.Chuvstva,
        skills.Taktika,
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
        items: [katas.Reshimost_voina],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [shuji.Razduvanie_plameni, shuji.Pritoki_torgovli],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.LionsHeart,
    descriptionAbout: `
<p>В конце - после испытаний, жертв и смерти - все, что
действительно остается от самурая, - это его история. Школа бардов Икома готовит своих студентов
как историков, бардов и сказочников; не только
для того, чтобы сохранить древние истории, но и
для того, чтобы вдохновить воинов Клана Льва равняться на своих древних предков и превзойти их
достижения. Барды Икома не менее воинственны,
чем другие отпрыски Клана Льва. Однако их самая
важная обязанность заключается в том, чтобы поддержать стремление каждого Льва снискать славу
независимо от опасности, и сражаться, несмотря ни
на что, с уверенностью, что ни один герой не умрет
невоспетым.</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, вакидзаси (короткий меч), яри (копье) или тессен (военный
веер), юми (лук), колчан со стрелами, набор
для путешествий, любой музыкальный инструмент, журнал.</p>
    `,
  },
  LionClanKicy: {
    title: "Школа Медиумов Кицу [Сюгендзя]",
    key: "LionClanKicy",
    ringIncrease: [_rings.void, _rings.water],
    skillAvailable: {
      items: [
        skills.Uchtivost,
        skills.Pravitelstvo,
        skills.Meditaciya,
        skills.Vystuplenie,
        skills.Vyzhivanie,
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
          appeal.Stremitelnaya_volna,
          appeal.Put_k_vnutrennemu_pokoyu,
          appeal.Kusayushchaya_stal,
        ],
        toSelect: 2,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami, ritual.Obryad_ochishcheniya],
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Raskopannaya_rodoslovnaya],
      },
    ],
    schoolAbility: schoolAbilities.AncestorsBless,
    descriptionAbout: `
<p>Школа Медиумов Кицу, самая маленькая из школ
сюгендзя среди Великих кланов, поддерживает
эзотерическую направленность на предков, что
требует уникальной подготовки и, по крайней мере,
следа оригинальной родословной Кицу. Эта мистическая связь с их предками позволяет им творить
магию, которая недоступна другим. Медиумы Кицу -
это живой мост между прошлым и настоящим Клана
Льва, действующий как голос предков в наши дни.
Как традиционалисты, они используют родовые
имена для молитвы, чтобы почтить тех, кто первым
овладел ими.</p>
    `,
    startingEquipment: `
<p>Освященные одежды, дорожная одежда, вакидзаси (короткий меч), нож, бо
(посох), сумка для свитков, набор для путешествий.</p>
    `,
  },
  LionClanMacy: {
    title: "Школа Берсерков Мацу [Буси]",
    key: "LionClanMacy",
    ringIncrease: [_rings.earth, _rings.fire],
    skillAvailable: {
      items: [
        skills.Komandovanie,
        skills.Fizicheskaya_podgotovka,
        skills.Rabota,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Boevye_iskusstva_Strelba,
        skills.Vyzhivanie,
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
        items: [
          katas.Stil_stremitelnoy_laviny,
          katas.Stil_vrashchayushchihsya_lezviy,
        ],
        toSelect: 1,
      },
      {
        type: techniquesGroups.shujiGroup,
        items: [shuji.Razmeshivanie_ugley],
      },
    ],
    schoolAbility: schoolAbilities.MazuRage,
    descriptionAbout: `
<p>Солдаты Мацу являются основной силой армий
Льва. Их храбрость и рвение к битве не подлежат
сомнению. Додзё воинов Мацу учит первенству нападения и необходимости овладеть инициативой
во всём. Агрессия является отличительной чертой
стиля Мацу; прямое действие - их лозунг. Такое воинственное отношение часто ставит их в противоречие
с осторожными стратегиями Акодо, но Мацу служат
Льву и Империи с неоспоримой верностью.</p>
    `,
    startingEquipment: `
<p>Доспехи асигару, дорожная
одежда, дайсё (катана и вакидзаси), нодати (большой
меч) или тессен (военный веер), нож, юми (лук), колчан со стрелами, набор для путешествий.
</p>
    `,
  },
};

export const _SchoolLion = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.description, injectImages),
}));
