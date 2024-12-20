import { replaceCharacter } from "@/helpers/replaceCharacter";
import { injector } from "@/helpers/injector";

import { groups, injectImages } from "@/mockData/routeData/constants";
import {
  actionsShared,
  combatActionShared,
} from "@/mockData/routeData/conflictActions/actionsShared";

const obj = {
  ...actionsShared,
  ...combatActionShared,
  CallToDuel: {
    title: "Вызов",
    key: "CallToDuel",
    subgroup: groups.conflictActionsBattle,
    description: `
<p><strong>Описание: </strong>вы бросаете вызов врагу, призывая его
встретиться с вами в поединке.</p>
<p><strong>Активация: </strong>в качестве действия Козней, вы можете
выполнить проверку <strong>Командования с ЦЧ 1</strong>, чтобы
выполнить формальный боевой вызов, нацеленный
на одного персонажа на дистанции 0–5. Вы должны
поставить 10 очков чести и 5 славы на вызов, которые
вы теряете, если проигрываете поединок.</p>
<p><strong>Эффекты: </strong> если вы преуспели, цель должна выбрать,
принять или отклонить ваш вызов; т.е. принять одно
из следующих решений:</p>
<ul>
  <li>Если цель <strong>принимает</strong> вызов, она ставит 10 очков чести и 5 славы, которые она теряет, если
предпримет какое-либо действие Атаки или
Козней до поединка. В конце раунда начинается поединок.</li>
  <li>Чтобы <strong>отказаться</strong>, цель должна потерять славу,
равную вашему рангу Командования плюс
ваши бонусные успехи. Каждый из её союзников со славой меньше текущей славы цели,
получает 2 смятения. Затем вы получаете 1
очко Пустоты.</li>
</ul>
<p>Если вы выиграете поединок, каждый из ваших
противников в схватке получает 3 смятения. Если вы
проиграете поединок, каждый из ваших союзников получает по 3 смятения.</p>
`,
  },
  Defence: {
    title: "Защита",
    key: "Defence",
    subgroup: groups.conflictActionsBattle,
    description: `
<p><strong>Описание: </strong>вы сосредотачиваетесь на том, чтобы отразить атаки врагов от себя или союзника, обороняясь, укрываясь, нанося отвлекающие удары или даже
стреляя угрожающе близко к врагу.</p>
<p><strong>Активация: </strong>в качестве действия Поддержки с использованием подготовленного оружия вы можете
выполнить <strong>проверку Тактики с ЦЧ 1</strong>, выбирая в качестве цели себя или одного другого персонажа в
пределах досягаемости оружия.</p>
<p><strong>Эффекты: </strong>если вам это удастся, вы <strong>защищаете</strong>
цель до начала вашего следующего хода. Увеличьте сложность проверок Атаки против защищаемой
цели на 1, и дополнительно ещё на 1 за каждые два
бонусных успеха.</p>
`,
  },
  Move: {
    title: "Манёвр",
    key: "Move",
    subgroup: groups.conflictActionsBattle,
    description: `
<p><strong>Описание: </strong>вы перемещаетесь по полю битвы, переходя в более выгодную позицию.</p>
<p><strong>Активация: </strong>в качестве действие Перемещения, вы
можете изменить свое положение на несколько
большее расстояние. Вы можете совершить <strong>проверку Физической подготовки с ЦЧ 2</strong> как часть этого
действия.</p>
<p><strong>Эффекты: </strong> переместитесь на 1 диапазон дистанции.
Если вы решите сделать проверку Физической
Подготовки и у вас это получится, вы можете вместо
этого переместиться на два диапазона дистанции, и
в дополнение на 1 дополнительный диапазон дистанции за два бонусных успеха.</p>
`,
  },
  Waiting: {
    title: "Выжидание",
    key: "Waiting",
    subgroup: groups.conflictActionsBattle,
    description: `
<p><strong>Описание: </strong>вы ждёте своего часа, подгадывая момент
для начала своего хода.</p>
<p><strong>Активация: </strong>: в качестве действия Атака, Козней и Поддержки вы можете объявить действие, не связанное
с Перемещением, которое вы будете выполнять после наступления определенного события до конца
раунда.</p>
<p><strong>Эффекты: </strong>после того, как указанное событие произойдет до конца раунда, вы можете выполнить действие. Вы все еще должны использовать Кольцо, соответствующее вашей стойке для этого действия.</p>
<p>Если указанное событие не происходит в этом
раунде, вы можете выполнить одно действие по вашему выбору (кроме «Выжидания») в конце раунда.</p>
`,
  },
};

export const _conflictActionsBattle = injector(obj, (original) => ({
  description: replaceCharacter(original.description, injectImages),
  group: groups.conflictActions,
}));
