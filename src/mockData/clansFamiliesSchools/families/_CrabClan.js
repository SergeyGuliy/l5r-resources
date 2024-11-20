import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyHida: {
    title: "Семья Хида",
    key: "FamilyHida",
    ringIncrease: [_rings.earth, _rings.fire],
    skillIncrease: [skills.Komandovanie, skills.Taktika],
    startGlory: 44,
    startMoney: "4 коку",
    description: `
<p>Семья Хида стоит на страже Теневых Земель, её задача — вечное бдение, чтобы защитить Империю от
темных сил Дзигоку. Как и основатель семьи, Ками
Хида, они внушительные и сильные, выносливые и
стойкие, не терпящие чужих слабостей. Их тяжкий
долг делает членов семьи Хида чрезвычайно прагматичными, у них мало времени на вежливые придворные выдумки. Они скрепя зубами терпят насмешливую снисходительность в отношении своих
манер и одежды со стороны других кланов, которых
защищают.</p>
    `,
  },
  FamilyHiruma: {
    title: "Семья Хирума",
    key: "FamilyHiruma",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Zhulnichestvo, skills.Vyzhivanie],
    startGlory: 39,
    startMoney: "3 коку",
    description: `
<p>Хирума - это глаза и уши Краба за пределами Стены,
они предупреждают об атаках и организуют разрушительные набеги на бесконечные орды - отчаянная и неблагодарная работа. Предупреждения, полученные с помощью навыков Хирумы, позволяют
Крабу быстро реагировать на любую угрозу. Из-за
непрекращающейся опасности Теневых Земель
члены семьи Хирума чередуют службу за Стеной
и службу внутри Империи, где они действуют как
разведчики, посыльные и йодзимбо (телохранители). Стройные и быстрые, Хирума контрастируют с
непоколебимыми Хида, полагаясь вместо этого на
скорость и точность.</p>
    `,
  },
  FamilyKajy: {
    title: "Семья Кайю",
    key: "FamilyKajy",
    ringIncrease: [_rings.earth, _rings.fire],
    skillIncrease: [skills.Kuznechnoe_delo, skills.Rabota],
    startGlory: 40,
    startMoney: "5 коку",
    description: `
<p>Памятники мастерству Кайю на землях Краба находятся повсюду, от огромной Стены Кайю до доспехов и оружия, используемых её стражами. Кайю
ответственны за сеть дорог, укрепления, осадные машины, которые сокрушают силы Теневых Земель, а
также оборонительные сооружения, разбросанные
по внутренней территории владений Крабов. Существует мало проблем, которые Кайю не попытаются
решить с помощью прикладной инженерии.
</p>
    `,
  },
  FamilyKyni: {
    title: "Семья Куни",
    key: "FamilyKyni",
    ringIncrease: [_rings.earth, _rings.void],
    skillIncrease: [skills.Medicina, skills.Teologiya],
    startGlory: 40,
    startMoney: "4 коку",
    description: `
<p>Ни одна семья сюгэндзя не вызывает в Империи
большего страха, чем Куни, которые искореняют любые признаки порчи. Куни используют в своей охоте
все имеющиеся в их распоряжении средства; даже
самураи Хида иногда бледнеют перед их методами. Куни готовы углубиться в тайны Теневых Земель,
изучая, наблюдая и даже вскрывая их, несмотря на
то, что такой тесный контакт с темными созданиями
угрожает их душам.</p>
    `,
  },
  FamilyJasuki: {
    title: "Семья Ясуки",
    key: "FamilyJasuki",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Torgovlya, skills.Dizayn],
    startGlory: 39,
    startMoney: "10 коку",
    description: `
<p>Стройные и болтливые Ясуки не вписываются в стереотипы Крабов, однако оказывают важную услугу
своему клану. Первые хозяева рынков в Империи,
Ясуки используют инструменты торговли и промышленности, чтобы снабжать и кормить армию Краба,
даже если это означает заключение сомнительных
сделок. Торговая сеть Ясуки простирается по всей
Империи; членов этой семьи, ищущих новые соглашения, можно найти практически где угодно</p>
    `,
  },
};

export const _CrabClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "CrabClan",
  description: replaceCharacter(original.description, injectImages),
}));
