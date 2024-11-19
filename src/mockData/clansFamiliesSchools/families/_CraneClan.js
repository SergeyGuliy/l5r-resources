import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyAsahina: {
    title: "Семья Асахина",
    key: "FamilyAsahina",
    ringIncrease: [_rings.water, _rings.void],
    skillIncrease: [skills.Estetika, skills.Teologiya],
    startGlory: 40,
    startMoney: "6 коку",
    description: `
<p>Асахина ищут гармонии и мира во всем, воплощая
философию сострадания и пацифизма, отличающую
их даже от их собратьев-Журавлей. Через искусство
и молитвы они стремятся успокоить и умиротворить
мир вокруг себя и распространить мир и согласие
по всей Империи. Асахина знают, что истинный мир
можно купить только через жертву, и это цена, которую они заплатят, чтобы создать лучшую Империю.</p>
    `,
  },
  FamilyDajdodzi: {
    title: "Семья Дайдодзи",
    key: "FamilyDajdodzi",
    ringIncrease: [_rings.earth, _rings.water],
    skillIncrease: [skills.Fizicheskaya_podgotovka, skills.Taktika],
    startGlory: 40,
    startMoney: "7 коку",
    description: `
<p>Дайдодзи — это практичные и трудолюбивые Журавли, составляющие ядро постоянной армии клана. Преданные служению своему клану, Дайдодзи
являются его недооцененной основой — от Железных Воинов, составляющих основу армий Клана
Журавля, и осторожных йодзимбо, защищающих
придворных Додзи, до Торгового Совета Дайдодзи,
ответственного за обеспечение сырьем и средствами для искусств Журавля. Самоотверженные усилия
Дайдодзи имеют основополагающее значение для
защиты Журавля и достижения его целей.
</p>
    `,
  },
  FamilyDodzi: {
    title: "Семья Додзи",
    key: "FamilyDodzi",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Uchtivost, skills.Dizayn],
    startGlory: 44,
    startMoney: "8 коку",
    description: `
<p>Потомки Ками Додзи олицетворяли искусство утонченности и изысканную культуру Империи с момента
ее зарождения. Ни один крупный двор не обходится
без представителей Додзи, распространяющих искусство, дружбу и — до недавнего времени — щедрые
подарки. Для придворных новостей и слухов коммуникационная сеть Додзи не имеет себе равных. Эта
сеть помогает Додзи опережать своих соперников
так же, как и их мастерство в этикете и искусстве. Редко кто может позволить себе оскорбить Додзи; еще
более редки те, кто делает это более одного раза.</p>
    `,
  },
  FamilyKakita: {
    title: "Семья Какита",
    key: "FamilyKakita",
    ringIncrease: [_rings.air, _rings.fire],
    skillIncrease: [skills.Estetika, skills.Meditaciya],
    startGlory: 44,
    startMoney: "7 коку",
    description: `
<p>В то время как Додзи стремятся к совершенству во
всем, Какита, как правило, сосредотачиваются на
одном умении, которым они стремятся полностью
овладеть. Независимо от того, является ли этот умение искусством владения мечом или кистью, они
концентрируются на нём полностью. Грациозные Какита обычно демонстрируют красоту Журавля в более спортивной манере, чем их кузены Додзи. Они
считаются одними из лучших дуэлянтов в Империи,
и выпускники их академии защищают честь Журавля
со всей решительностью.</p>
    `,
  },
};

export const _CraneClan = injector(obj, (original) => ({
  group: groups.families,
  description: replaceCharacter(original.description, injectImages),
}));
