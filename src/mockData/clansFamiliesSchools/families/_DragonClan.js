import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyAgasya: {
    title: "Семья Агася",
    key: "FamilyAgasya",
    ringIncrease: [_rings.fire, _rings.void],
    skillIncrease: [skills.Medicina, skills.Kuznechnoe_delo],
    startGlory: 40,
    startMoney: "4 коку",
    description: `
<p>Агася постоянно развиваются, как элементы природы. Хотя они считаются пацифистами, многие их
приёмы бесценны в бою. Когда-то преданные мистицизму, теперь они сочетают его с практическими
искусствами. Однако, от семей Дракона постоянно
ожидают перемен. Агася глубоко погрузились в
алхимию, металлургию и медицину. Они сочетают
практические эффекты химии и конструирования
с мистическими эффектами вызова духов. Это уникальный подход, который время от времени приводит к зрелищным катастрофам. Однако они редко
впадают в уныние, так как учатся на неудачах лучше,
чем на успехах</p>
    `,
  },
  FamilyKichyki: {
    title: "Семья Кицуки",
    key: "FamilyKichyki",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Pravitelstvo, skills.Chuvstva],
    startGlory: 44,
    startMoney: "6 коку",
    description: `
<p>Как и подобает странной натуре их клана, даже придворные Дракона необычны: самураи семьи Кицуки наиболее известны своей проницательностью и
методами расследования, основанными на вещественных доказательствах. Они привносят в физический мир такое же внимание к деталям, какое Агася
привносят в духовные вопросы. Небольшая семья,
они служат Империи в качестве магистратов, а Клану Дракона - в качестве придворных. В обеих ролях
их чутье на обман и умение находить правду служат
им хорошую службу.</p>
    `,
  },
  FamilyMirumoto: {
    title: "Семья Мирумото",
    key: "FamilyMirumoto",
    ringIncrease: [_rings.earth, _rings.water],
    skillIncrease: [skills.Fizicheskaya_podgotovka, skills.Taktika],
    startGlory: 44,
    startMoney: "5 коку",
    description: `
<p>Хотя Мирумото известны своим уникальным стилем
владения двумя мечами, называемым нитэн или
«Два Неба», они больше, чем просто воины. Мирумото наблюдают за управлением и обязанностями
клана Дракона, позволяя монахам Тогаси следовать
своим путям к Просветлению. Это делает Мирумото
практичными и приземленными, готовыми вмешаться и помочь крестьянам, когда это необходимо. Будучи самой многочисленной семьей в своем клане,
Мирумото — это самураи, которых чаще всего представляют, когда думают о Драконе.</p>
    `,
  },
  FamilyTagosi: {
    title: "Семья Тогаси",
    key: "FamilyTagosi",
    ringIncrease: [_rings.earth, _rings.void],
    skillIncrease: [skills.Fizicheskaya_podgotovka, skills.Teologiya],
    startGlory: 45,
    startMoney: "3 коку",
    description: `
<p>Орден Тогаси больше похож на монашеский орден,
чем на семью. Орден Тогаси приветствует всех, кто
готов принять их учение и решить задачи, необходимые для вступления, первая из которых — найти один
из монастырей Тогаси, спрятанных высоко в горах.
По правде говоря, многие из тех, кто смог найти свой
путь в Орден, были его членами в прошлой жизни,
вернувшись, чтобы продолжить свое обучение и духовное путешествие под руководством Чемпиона
Клана Дракона. Для остальной части Империи орден известен мастерством в коанах (созерцательных
загадках), боевыми искусствами, а также красивыми
и мистическими татуировками, наделяющими представителей ордена сверхъестественными способностями.</p>
    `,
  },
};

export const _DragonClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "DragonClan",
  description: replaceCharacter(original.description, injectImages),
}));
