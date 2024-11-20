import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyAkado: {
    title: "Семья Акодо",
    key: "FamilyAkado",
    ringIncrease: [_rings.air, _rings.earth],
    skillIncrease: [skills.Komandovanie, skills.Pravitelstvo],
    startGlory: 44,
    startMoney: "5 коку",
    description: `
<p>Акодо — лучшие стратеги и тактики Империи, никто
не понимает войну лучше них. Акодо олицетворяют
дисциплину и контроль клана Льва, всегда взвешивая несколько вариантов, чтобы нанести удар в
идеальное время. Это ученые-воины, стремящиеся
понять войну и сражение во всей их сложности; ни
одна часть боевых дисциплин не является слишком
маленькой для их изучения, и ни одна часть не является слишком большой, чтобы ускользнуть от их понимания. «Ни одна армия под предводительством
Акодо не знала поражений» — известная поговорка,
и Акодо не допустит, чтобы она стала ложью.</p>
    `,
  },
  FamilyIkoma: {
    title: "Семья Икома",
    key: "FamilyIkoma",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Kompoziciya, skills.Vystuplenie],
    startGlory: 40,
    startMoney: "5 коку",
    description: `
<p>Икома — лучшие рассказчики Империи. Их гордые
голоса превозносят достоинства бусидо и, таким
образом, клана Льва. Они служат хранителями воспоминаний не только Клану Льва, но и Империи в
целом; ни один факт не считается исторической
правдой, если он не является частью историй за
авторством Икома. Придворные Икома — выразительное лицо Льва; их барды открыто показывают
эмоции, которые должен скрывать самурай Льва.
Хвастовство, слезы и истории — вот инструменты, которые Икома используют для продвижения Льва
в светском обществе.</p>
    `,
  },
  FamilyKicy: {
    title: "Семья Кицу",
    key: "FamilyKicy",
    ringIncrease: [_rings.void, _rings.water],
    skillIncrease: [skills.Meditaciya, skills.Teologiya],
    startGlory: 40,
    startMoney: "4 коку",
    description: `
<p>Все самураи почитают своих предков, но родословная Кицу, связанная с потусторонними существами,
порождает членов, которые могут приоткрыть завесу между мирами и поговорить с ними. Кицу известны своей традиционностью и консервативностью
даже среди Львов. Все Кицу разговаривают с предками. Те, у кого нет таланта говорить с духами, ведут
генеалогию, ухаживают за могилами и святынями и
иным образом почитают благородных умерших.</p>
    `,
  },
  FamilyMachu: {
    title: "Семья Мацу",
    key: "FamilyMachu",
    ringIncrease: [_rings.earth, _rings.fire],
    skillIncrease: [skills.Komandovanie, skills.Fizicheskaya_podgotovka],
    startGlory: 44,
    startMoney: "5 коку",
    description: `
<p>Мацу — мужественное и неумолимое сердце Льва.
Как самая большая семья в Империи, Мацу пополняют ряды огромных львиных армий. Основанные
леди Мацу, одной из величайших самураев ранней
Империи, они сохраняют многие матриархальные
традиции в ее честь, в том числе несколько элитных воинских частей, состоящих исключительно из
женщин. Мацу олицетворяют суровый милитаризм
бусидо. Из-за их количества они являются наиболее
известными Львами в популярной культуре. Пламенный, благородный, безжалостный: хотя стереотипы Льва преувеличивают эти черты, все они являются частью характера Мацу</p>
    `,
  },
};

export const _LionClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "LionClan",
  description: replaceCharacter(original.description, injectImages),
}));
