import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { techniquesGroups } from "@/mockData/routeData/other/techniquesGroups";
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
<p>Создавая самых стойких защитников Рокугана,
противостоящих ужасам, сосредоточившимся за
Стеной Кайю, Школа Защитников Хида учит своих
последователей стойкости, мужеству и практичности. Гоблины, демоны и нежить - враги, не имеющие
чести, поэтому Защитники Хиды не могут позволить
себе честно сражаться с этими существами. Любой
воин, имеющий сильную волю, может попытаться
убить каменнокожего они или умереть в процессе,
однако Защитники Хида знают, что их долг - стойко
держаться. От тяжелой брони до техники разрушения железных шкур мощными ударами молота,
Защитники Хида разработали арсенал и стиль боя,
которые дают им максимальное преимущество и
шанс не только на победу, но и на выживание.</p>
    `,
    startingEquipment: `
<p>лакированная броня, дорожная одежда, дайсё (катана и вакидзаси), тэцубо
или оцути (боевая дубина или молот), булава, нож,
набор для путешествий.</p>
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
<p>Теневые Земли никогда не спят, как и те, кто наблюдает за ними. Разведка Теневых Земель - опасная
задача, требующая интенсивной подготовки. Хирума видели, как их земли были поглощены силами
демонов, и они умрут, прежде чем увидят Империю, потерянную под их тенью. У самураев школы
Хирума, обученных наблюдать и отступать, наносить
удары только тогда, когда награда превышает риск,
терпение и выносливость - важные черты. Они мастера выживания и мобильности. Когда разведчика
Хирума отправляют на службу в пределах Империи,
его затравленный взгляд и настороженное поведение выдают в нем ветерана.</p>
    `,
    startingEquipment: `
<p>дорожная одежда, доспехи
асигару, дайсё (катана и вакидзаси), яри (копье) или
юми (лук) и колчан со стрелами, нож, набор для путешествий, нефритовый палец.</p>
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
<p>Со времени основания клана Краба долг Кайю заключался в оснащении самураев клана оружием,
осадными машинами и знаниями, чтобы победить
своих врагов. Будучи изобретателями оружия Краба, инженеры Кайю предоставляют все эти вещи.
Обученное логистике, сведущее в тактике и наполненное изобретательностью, додзё Кайю является
не только школой воинов, но и передовой инженерной школой Империи. Именно инженеры Кайю поддерживают пехотинцев Краба, строят мосты через
негостеприимную местность, изготавливают доспехи достаточно сильные, чтобы противостоять даже
удару óни, и куют редкие клинки Кайю, которые являются одними из величайших мечей в Империи.
Если ситуация мрачная, и нет ясного пути к победе,
инженер Кайю создаст этот путь!</p>
    `,
    startingEquipment: `
<p>дорожная одежда, церемониальная одежда, доспехи асигару, дайсё (катана и
вакидзаси), дубинка, оюми (арбалет), колчан болтов,
набор для путешествий.</p>
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
<p>Очистители Куни овладевают знаниями и молитвами, чтобы лишить силы Теневых Земель какой-либо
опоры внутри Империи. С этой целью они специализировались на призывах Ками земли, чтобы
нанести удар или изгнать злых слуг Фу Ленга. Со
времени основания своей школы очистители Куни
стремятся понять природу угрозы, с которой борются Крабы. Это привело их на опасный путь, и немалое число пало от того самого проклятия, которое
они изучают. Очистители Куни окрашивают свои
лица в стилизованные узоры Кабуки, чтобы защитить свои истинные личности от коварных врагов
из Теневых Земель. Вечная бдительность, переходящая в бесконечную паранойю, является уделом
очистителей Куни.</p>
    `,
    startingEquipment: `
<p>Освященные облачения,
вакидзаси (короткий меч), нож, набор для макияжа,
сумка для свитков, набор для путешествий.</p>
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
<p>Враги Краба говорят, что Ясуки немногим больше,
чем торговцы, — Ясуки ответят, что они гораздо больше. Они - мастера искусства торговли и направления
потока товаров, что в Рокугане считается грубым и
скверным набором навыков. Ясуки могут приобретать товары и услуги, даже те, нужду в которых человек ещё не осознает, в обмен на обещания помощи
своей семье и клану в будущем. Ясуки всегда соблюдают условия сделки и следят за тем, чтобы их партнеры делали то же самое</p>
    `,
    startingEquipment: `
<p>дорожная одежда, церемониальная одежда, вакидзаси (короткий меч), нож,
юми (лук), колчан со стрелами, набор для каллиграфии, набор для путешествий.</p>
    `,
  },
};

export const _SchoolCrab = injector(obj, (original) => ({
  group: groups.schools,
  description: replaceCharacter(original.descriptionAbout, injectImages),
}));
