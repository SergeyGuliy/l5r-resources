import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyAsako: {
    title: "Семья Асако",
    key: "FamilyAsako",
    ringIncrease: [_rings.air, _rings.fire],
    skillIncrease: [skills.Kultura, skills.Chuvstva],
    startGlory: 40,
    startMoney: "5 коку",
    description: `
<p>Асако - тихая семья, достаточно образованная, чтобы заниматься наукой и философией, пока Исава
занимается делами Феникса. Асако ценят знания,
но еще больше они ценят мудрость; они используют свои исследования для продвижения духовной
эволюции и политических планов. Асако служат
придворными Феникса и они очень востребованы
по всей Империи в качестве придворных ученых и
наставников.</p>
    `,
  },
  FamilyIsava: {
    title: "Семья Исава",
    key: "FamilyIsava",
    ringIncrease: [_rings.fire, _rings.void],
    skillIncrease: [skills.Meditaciya, skills.Teologiya],
    startGlory: 44,
    startMoney: "5 коку",
    description: `
<p>Мастера Стихий, входящие в Совет Пяти, являются
истинными правителями Феникса, и почти всегда
набираются из семьи Исава. Члены семьи Исава,
одной из старейших семей сюгэндзя в Империи,
веками учились общаться с духами и просить их
благословения самым эффективным способом. Некоторых может ввести в заблуждение их авторитет
вкупе с высокомерием, однако в глубине души они
набожны и покорны, и посвящают себя обеспечению гармонии и равновесия.
</p>
    `,
  },
  FamilyKajto: {
    title: "Семья Кайто",
    key: "FamilyKajto",
    ringIncrease: [_rings.air, _rings.void],
    skillIncrease: [skills.Fizicheskaya_podgotovka, skills.Teologiya],
    startGlory: 40,
    startMoney: "4 коку",
    description: `
<p>Небольшой семье Кайто поручено охранять множество храмов, разбросанных по владениям Феникса,
от маленьких алтарей под защитой одного дерева,
до огромных святилищ. Чтобы выполнить свои обязанности, Кайто научились использовать зачарованные стрелы и молитвы для защиты храмов от спиритических врагов, и мастерскую стрельбу из лука для
отражения более смертных опасностей. Кайто редко
видят за пределами земель Феникса из-за их рода
деятельности, но они иногда совершают паломничества чтобы посетить другие храмы.</p>
    `,
  },
  FamilySiba: {
    title: "Семья Сиба",
    key: "FamilySiba",
    ringIncrease: [_rings.earth, _rings.water],
    skillIncrease: [skills.Meditaciya, skills.Taktika],
    startGlory: 40,
    startMoney: "5 коку",
    description: `
<p>Семья Сиба происходит от Ками Сиба. Он претендовал на лидерство в Фениксе, но в начале своей истории преклонил колено перед семьей Исава и с тех
пор его семья верно служит Исаве. Сиба сосредоточены на обеспечении безопасности клана Феникса и полагаются в первую очередь на дипломатию,
и только потом на силу. Ожидается, что Сиба будут
обучены наукам в той же степени, что и воинским искусствам; они понимают сюгэндзя, которым служат,
лучше многих других буси.</p>
    `,
  },
};

export const _PhoenixClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "PhoenixClan",
  description: replaceCharacter(original.description, injectImages),
}));
