import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";

import { groups, injectImages } from "@/mockData/routeData/constants";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";

const obj = {
  FamilyBajusi: {
    title: "Семья Баюси",
    key: "FamilyBajusi",
    ringIncrease: [_rings.air, _rings.fire],
    skillIncrease: [skills.Uchtivost, skills.Dizayn],
    startGlory: 44,
    startMoney: "8 коку",
    description: `
<p>Девиз основной линии клана Скорпионов, «Я умею
плавать», исходит из предостерегающей истории
об их коварной природе. Очаровательные, безжалостные, лживые и злобные Баюси выглядят как
злодеи, за которых себя выдают. Они представляют собой зловещую сторону власти, используя искусство шантажа, отравления и обольщения, чтобы
контролировать врагов Империи, при этом балансируя на грани, чтобы самим не впасть в истинное
злодейство. Стабильность и процветание Империи
- вот цель Баюси, оправдывающая средства.</p>
    `,
  },
  FamilySesuro: {
    title: "Семья Сёсуро",
    key: "FamilySesuro",
    ringIncrease: [_rings.air, _rings.water],
    skillIncrease: [skills.Uchtivost, skills.Vystuplenie],
    startGlory: 40,
    startMoney: "6 коку",
    description: `
<p>Семья Сёсуро известна благодаря их актерскому
таланту и театральному мастерству. Империя не
осознает, насколько хорошо Сёсуро вживаются в
роль; многие из лучших шпионов Скорпионов происходят из семьи Сёсуро и живут под другими именами среди других кланов. Несмотря на то, что они
мастера развлечений, их часто просят использовать
свои навыки акробатики, актерского мастерства и
много другого для более темных и кровавых целей
своего клана.</p>
    `,
  },
  FamilySosi: {
    title: "Семья Соси",
    key: "FamilySosi",
    ringIncrease: [_rings.air, _rings.void],
    skillIncrease: [skills.Dizayn, skills.Teologiya],
    startGlory: 40,
    startMoney: "6 коку",
    description: `
<p>Семью Соси часто упускают из виду, и они предпочитают, чтобы все так и оставалось. Они наиболее
эффективны, когда невидимы, вознося молитвы за
Скорпиона в тишине. Соси действуют тонко: нежный
толчок, слово, произнесенное шепотом, которое
приводит все в движение. Но иногда за это приходится платить, поскольку они предпочитают искать
идеальный момент, что делает их чрезвычайно осторожными и склонными к чрезмерному сбору информации и планированию.</p>
    `,
  },
  FamilyEgo: {
    title: "Семья Ёго",
    key: "FamilyEgo",
    ringIncrease: [_rings.earth, _rings.void],
    skillIncrease: [skills.Kompoziciya, skills.Teologiya],
    startGlory: 39,
    startMoney: "4 коку",
    description: `
<p>Семья Ёго — самая несчастная семья в Империи: каждому их потомку предначертано предать того, кого
он любит больше всего. Они пытаются игнорировать
проклятие, погружаясь в свою работу и посвящая
себя служению. Чтобы попытаться снять это проклятие, они неустанно изучали молитвы защиты и особенно обереги, с помощью которых они освоили
множество техник выявления злой магии и борьбы с
ней. Ёго — самые прилежные и недооцененные слуги
Скорпиона.</p>
    `,
  },
};

export const _ScorpionClan = injector(obj, (original) => ({
  group: groups.families,
  clan: "ScorpionClan",
  description: replaceCharacter(original.description, injectImages),
}));
