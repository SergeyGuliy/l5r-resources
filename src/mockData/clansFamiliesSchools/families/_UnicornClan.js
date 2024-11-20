import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyIde: {
    title: "Семья Идэ",
    key: "FamilyIde",
    ringIncrease: [_rings.earth, _rings.water],
    skillIncrease: [skills.Torgovlya, skills.Uchtivost],
    startGlory: 40,
    startMoney: "9 коку",
    description: `
<p>Идэ неустанно служат дипломатами, курьерами и
торговцами по всему Рокугану. Несмотря на натуру
Единорогов, Идэ научились смешивать чужеземные
обычаи с традициями Империи, чтобы лучше взаимодействовать со своими братьями. Идэ работают,
излучая спокойствие и компетентность, стремясь
налаживать союзы и дружественные отношения по
всей Империи.</p>
    `,
  },
  FamilyIuti: {
    title: "Семья Иути",
    key: "FamilyIuti",
    ringIncrease: [_rings.air, _rings.void],
    skillIncrease: [skills.Meditaciya, skills.Teologiya],
    startGlory: 40,
    startMoney: "5 коку",
    description: `
<p>Иути — семья жрецов, чьи обряды восходят к временам, когда Единорог еще не вернулся в Рокуган.
Сюгэндзя Иути практикуют уникальную форму колдовства, известную как мейсёдо, искусство использования талисманов и имен для воздействия на духов. Их история делает Иути более открытыми для
исследования различных мистических путей, чем
семьи, связанные вековыми традициями.</p>
    `,
  },
  FamilyMoto: {
    title: "Семья Мото",
    key: "FamilyMoto",
    ringIncrease: [_rings.earth, _rings.fire],
    skillIncrease: [skills.Komandovanie, skills.Vyzhivanie],
    startGlory: 40,
    startMoney: "6 коку",
    description: `
<p>Мото по меркам Империи считается наименее цивилизованной семьёй Единорогов. Самураям Рокугана
Мото кажутся чужеродными и странными из-за их
коренастого телосложения, стиля одежды и густых
бород их мужчин. Действительно, Мото не нужны
мягкие атрибуты того, что некоторые называют цивилизацией; они принимают суровую жизнь кочевых
воинов, ищущих следующую битву. Их наследие и
культура часто ставятся под сомнение в Рокугане, но
не их храбрость.</p>
    `,
  },
  FamilySindze: {
    title: "Семья Синдзё",
    key: "FamilySindze",
    ringIncrease: [_rings.fire, _rings.water],
    skillIncrease: [skills.Chuvstva, skills.Vyzhivanie],
    startGlory: 44,
    startMoney: "8 коку",
    description: `
<p>Синдзё — ядро Единорога, клана исследователей, последовавших за своим Ками Синдзё в опасный мир
за пределами Империи. Эта любовь к открытиям не
покинула Синдзё, и они много путешествуют, когда
могут. Они управляют и руководят Единорогом, работая над тем, чтобы все части клана были связаны
воедино. Отличные наездники и разведчики, Синдзё
стремятся к миру, но никогда не боятся войны.</p>
    `,
  },
  FamilyUtaky: {
    title: "Семья Утаку",
    key: "FamilyUtaky",
    ringIncrease: [_rings.fire, _rings.earth],
    skillIncrease: [skills.Vyzhivanie, skills.Taktika],
    startGlory: 44,
    startMoney: "6 коку",
    description: `
<p>Ни одна другая семья Единорогов так глубоко и духовно не приняла Бусидо, как Утаку, представители
которой воплощают его в своих элитных Боевых Девах, Сиотомэ. Матриархальные Утаку только своим
женщинам позволяют ездить на войну верхом; мужчины Утаку служат в пехоте, в конюшнях и домашних хозяйствах, что делает их необычными среди их
собственного клана. В Империи нет лучшей тяжелой
кавалерии, чем Боевые Девы, и нет лучших конюших, чем мужчины Утаку</p>
    `,
  },
};

export const _UnicornClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "UnicornClan",
  description: replaceCharacter(original.description, injectImages),
}));
