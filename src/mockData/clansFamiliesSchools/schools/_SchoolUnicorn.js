import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
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
<p>Самое дружелюбное лицо клана Единорога - это
Идэ. Торговцы Идэ всегда пытаются решить проблемы в первую очередь при помощи переговоров,
поскольку они знают, что любые деловые отношения между людьми (друзьями и равными) создают
узы, крепкие, как сталь. Хотя некоторые из других
кланов считают Идэ мягкими, никто из них не может указать, когда они смогли воспользоваться этой
предполагаемой слабостью. Торговцы Идэ игнорируют оскорбления и вежливо приветствуют комплименты в равной мере. Они обладают обширными
знаниями культур, как Рокугана, так и зарубежных,
что позволяет им с точностью подходить к своим
сделкам.</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, вакидзаси (короткий меч), юми (лук), колчан со стрелами,
набор для каллиграфии, набор для путешествий,
боевой конь Единорогов (см. стр. 326), дневник.</p>
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
<p>На понимание Единорогами магии и духов большое
влияние оказали годы их путешествий за пределами
Империи, и изготовление магических талисманов,
мейсёдо, остается основным направлением их ремесла. Магия Мастеров Мейсёдо Иути уникальна
среди сюгендзя Рокугана: научившись у иностранных
колдунов словам силы, они связывают духов в талисманы, которые затем могут быть подарены другим
для использования. Их наследие делает Иути семьёй
с одним из самых широких взглядов среди семей
сюгендзя.</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, церемониальная одежда, вакидзаси (короткий меч), одно
оружие редкости 6 или ниже, набор для каллиграфии, набор для путешествий, боевой конь Единорогов (см. стр. 326).</p>
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
<p>В то время как большинство додзе Единорогов фокусируются на быстрых и сложных техниках, боевой
стиль Завоевателей Мото предпочитает прямолинейную и безжалостную силу. Они сражаются, издавая много шума, используют размашистые движения и владеют оружием, которое многие Рокуганцы
не признают. В результате немногие самураи знают,
как реагировать на стиль Мото, не говоря уже о том,
чтобы защищаться от него. Другие кланы считают
Мото варварами, и «орда» использует это в своих
интересах. Если Империя не приложит усилий, чтобы понять пути Мото, тогда как она сможет противостоять им?</p>
    `,
    startingEquipment: `
<p>Дорожная одежда, скрытые доспехи, дайсе (ятаган и вакидзаси), юми (лук),
колчан со стрелами, два ножа, набор для путешествий, боевой конь Единорогов (см. стр. 326).</p>
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
<p>Являясь ядром армии Единорога, Наездники Синдзё
делают упор на скорость и гибкость. Все Наездники
Синдзё учатся искусству разведки и тому, как извлечь
максимальную пользу из своих лошадей. Ни один самурай не является более мобильным, чем конный
Наездник Синдзё. Их любимое оружие - конный лук
Синдзё, который они используют с большой точностью даже во время езды галопом. Обученные жить
вне страны, Наездники Синдзе тщательно изучают
местность каждого потенциального поля битвы, прежде чем вступать в бой</p>
    `,
    startingEquipment: `
<p>Доспехи Асигару, дорожная
одежда, дайсе (катана или ятаган, вакидзаси), юми
(лук), колчан со стрелами, нож, набор для путешествий, боевой конь Единорогов (см. стр. 326).</p>
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
<p>Самая традиционная и престижная из школ Клана
Единорога, Сиотоме, или “Боевые девы”, почитается
как легендарная кавалерия. В додзё принимаются
только женщины, носящие имя Утаку, и даже тогда
будущие ученицы должны соответствовать строгим
стандартам доблести и чести. Это единственная
школа в Империи, которая обучает секретам, необходимым для укрощения мощных скакунов Утаку,
массивных боевых коней, которые отказываются от
всех других наездников. В бою грациозные и непрерывные движения характеризуют их стиль, как и их
пугающее спокойствие. Даже бросаясь в жар битвы,
Боевые Девы часто движутся в полной тишине.</p>
    `,
    startingEquipment: `
<p>Лакированные доспехи,
церемониальная одежда, дайсё (катана или ятаган,
вакидзаси), яри (копьё), юми (лук), колчан со стрелами, нож, набор для путешествий, конь Утаку (см.
стр. 327).</p>
    `,
  },
};

export const _SchoolUnicorn = injector(obj, (original) => ({
  group: groups.schools,
  clan: "UnicornClan",
  description: replaceCharacter(original.description, injectImages),
}));
