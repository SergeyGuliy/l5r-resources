import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings, _ringSelect } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
import { schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities";
import { shuji } from "@/mockData/routeData/techniques/_shuji";
import { ritual } from "@/mockData/routeData/techniques/_ritual";
import { appeal } from "@/mockData/routeData/techniques/_appeal";
import { katas } from "@/mockData/routeData/techniques/_kata";

const obj = {
  PhoenixClanAsako: {
    title: "Школа Хранителей знаний Асако [Придворный]",
    key: "PhoenixClanAsako",
    ringIncrease: [_rings.air, _rings.earth],
    skillAvailable: {
      items: [
        skills.Kultura,
        skills.Pravitelstvo,
        skills.Boevye_iskusstva_Bezoruzhnyy_boy,
        skills.Medicina,
        skills.Vystuplenie,
        skills.Chuvstva,
        skills.Teologiya,
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
        items: [
          shuji.Vezhlivost_prevyshe_vsego,
          shuji.Raskopannaya_rodoslovnaya,
          shuji.Intonaciya,
        ],
      },
    ],
    schoolAbility: schoolAbilities.WiseOfAges,
    descriptionAbout: `
<p>Хранители знаний Асако имеют обширное образование, и на этой прочной базе они развивают свои
специальности. Редко бывает, чтобы Хранитель знаний не обладал хотя бы поверхностным знанием
вопроса, каким бы неясным он ни был. Действуя как
придворные Феникса, Хранители знаний Асако выдвигают аргументы, основанные на их компетенции
в почитаемом знании прошлого. Асако следует искать сначала в библиотеке, а затем во дворе, обычно глубоко погружённых в дискуссию. Мало кто осмеливается бросить вызов Мастеру знаний Асако в
их области, но такие споры часто являются одним из
самых ярких моментов двора.</p>
    `,
    startingEquipment: `
<p>Церемониальные одежды,
освященные одежды, дорожная одежда, вакидзаси
(короткий меч), нож, сумка для свитков, набор для
каллиграфии, набор для путешествий.</p>
    `,
  },
  PhoenixClanIsava: {
    title: "Школа Элементалистов Исава [Сюгендзя]",
    key: "PhoenixClanIsava",
    ringIncrease: [_ringSelect, _ringSelect],
    skillAvailable: {
      items: [
        skills.Kompoziciya,
        skills.Uchtivost,
        skills.Medicina,
        skills.Meditaciya,
        skills.Vystuplenie,
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
          appeal.Gashenie,
          appeal.Zahvat_Zemli,
          appeal.Put_k_vnutrennemu_pokoyu,
          appeal.Burya_Vozduha,
        ],
        toSelect: 3,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [ritual.Obshchenie_s_duhami, ritual.Gadanie],
      },
    ],
    schoolAbility: schoolAbilities.OneWithElements,
    descriptionAbout: `
<p>Ни одна традиция не обладает более полным владением духом, чем школа элементалистов Исавы. С
тех пор, как Ками упали на землю, священники Исавы искали знания и понимания Ками, Фортун и самих
элементов. На протяжении веков они совершенствовали ритуалы и молитвы, чтобы просить великих
благ от имени клана Феникса и ужасных проклятий
для низвержения своих врагов. Тем не менее, они
знают, что духи нуждаются в служении в обмен на их
благословения, из-за чего элементалисты Исавы не
решаются позвать ками, за исключением тех случаев, когда они очень нужны. Делать это без причины
- значит рисковать нарушением тонкого равновесия
в мире природы или навлечь на себя гнев духов.</p>
    `,
    startingEquipment: `
<p>Освященные одеяния, вакидзаси (короткий меч), нож, сумка для свитков, набор
для путешествий.</p>
    `,
  },
  PhoenixClanSiba: {
    title: "Школа Хранителей Сиба [Буси, Придворный]",
    key: "PhoenixClanSiba",
    ringIncrease: [_rings.earth, _rings.water],
    skillAvailable: {
      items: [
        skills.Uchtivost,
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Blizhniy_boy,
        skills.Meditaciya,
        skills.Vyzhivanie,
        skills.Taktika,
        skills.Teologiya,
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
        items: [katas.Doblest_Povelitelya_Siby_Feniks],
      },
      {
        type: techniquesGroups.kataGroup,
        items: [katas.Prochnyy_kak_Zemlya, katas.Probivnoy_kak_Voda],
        toSelect: 1,
      },
    ],
    schoolAbility: schoolAbilities.PheonixWay,
    descriptionAbout: `
<p>Как Сиба поклялся защищать Исаву, так и Школа
Хранителей Сиба делает упор на защиту и сотрудничество с Исавой; его члены дополняют и защищают священников, хранителей святынь и сюгендзя.
Хранители Сиба хорошо подготовлены, часто они
в той же мере учёные, что и воины, и они рассматривают конфликт как проблему, которую следует
решить без кровопролития, если это возможно.
Те, кто недооценивает их за нежелание отнимать
жизнь, обычно делают это только один раз: Хранители Сиба так же преданы совершенству боевых
искусств, как и другие самураи. Их приверженность
изучению теологии и долгие часы медитации научили хранителей Сиба танцевать в гармонии с
элементальными Ками, призванными воззваниями
сюгендзя.</p>
    `,
    startingEquipment: `
<p>Доспехи асигару, дорожная одежда, дайсё (катана и вакидзаси), нагината
(древковое оружие) или яри (копье), набор для путешествий.</p>
    `,
  },
  PhoenixClanKajto: {
    title: "Школа Хранителей святилищ Кайто [Монах]",
    key: "PhoenixClanKajto",
    ringIncrease: [_rings.air, _rings.water],
    skillAvailable: {
      items: [
        skills.Fizicheskaya_podgotovka,
        skills.Boevye_iskusstva_Strelba,
        skills.Meditaciya,
        skills.Vystuplenie,
        skills.Kuznechnoe_delo,
        skills.Teologiya,
      ],
      toSelect: 4,
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
        items: [katas.Tochnost_yastreba_],
      },
      {
        type: techniquesGroups.appealGroup,
        items: [appeal.Burya_Vozduha],
        toSelect: 1,
      },
      {
        type: techniquesGroups.ritualGroup,
        items: [
          ritual.Obryad_ochishcheniya,
          ritual.Obshchenie_s_duhami,
          ritual.Porogovyy_barer,
        ],
        toSelect: 2,
      },
    ],
    schoolAbility: schoolAbilities.HollyArrows,
    descriptionAbout: `
<p>Хранители святилищ Кайто работают вместе со священниками, защищая храмы по всей земле Феникса,
или самостоятельно охраняют небольшие святилища. Кайто изучают мистические искусства, чтобы
умилостивить ками — иногда даже служа для них сосудами — и практические, чтобы поддерживать святилища. Хранители святилищ используют защитную
магию — такую как офуда, бумажные амулеты — и духовно улучшенную стрельбу из лука, чтобы защитить
святилища от угроз, как мистических, так и мирских.</p>
    `,
    startingEquipment: `
<p>Освященные одежды, вакидзаси (короткий меч), юми (лук), колчан со стрелами,
бо (посох) или нож, сумка для свитков, набор для путешествий.</p>
    `,
  },
};

export const _SchoolPhoenix = injector(obj, (original) => ({
  group: groups.schools,
  clan: "PhoenixClan",
  description: replaceCharacter(original.description, injectImages),
}));
