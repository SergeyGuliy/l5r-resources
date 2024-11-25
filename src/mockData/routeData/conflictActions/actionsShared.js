import { replaceCharacter } from "@/helpers/replaceCharacter";
import { injector } from "@/helpers/injector";

import { groups, injectImages } from "@/mockData/routeData/constants";

const obj = {
  Initiative: {
    title: "Инициатива",
    key: "Initiative",
    subgroup: [
      groups.conflictActionsIntrigues,
      groups.conflictActionsBattle,
      groups.conflictActionsDuels,
    ],
    description: `
<p><strong>Проверка инициативы</strong> помогает определить значение инициативы персонажа для сцены. Каждый
тип конфликта использует свой навык для проверки
Инициативы, как перечислено ниже:</p>
<ul>
  <li><strong>Интриги: </strong>Проверка Чувств с ЦЧ 1.</li>
  <li><strong>Дуэль: </strong>Проверка Медитации с ЦЧ 1.</li>
  <li><strong>Схватка: </strong>Проверка Тактики с ЦЧ 1.</li>
  <li><strong>Массовое сражение: </strong> Проверка Командования с ЦЧ 1.</li>
</ul>
<p><strong>Персонаж может использовать любое кольцо для этой проверки.</strong>После того, как персонаж совершил
свою проверку инициативы, он становится в стойку,
соответствующую Кольцу, которое он использовал.</p>
<p><strong>Значение инициативы </strong>персонажа основано на его
состоянии готовности, в момент начала конфликта.</p>
<ul>
  <li>Если персонаж был готов к конфликту, его базовое значение инициативы равно <strong>значению концентрации</strong></li>
  <li>Если персонаж не был готов (например, пойман врасплох), его базовое значение инициативы равно <strong>значению бдительности.</strong></li>
</ul>
<p>Затем, если персонаж преуспел в своей проверке Инициативы, он добавляет 1 к значению базовой
инициативы, а также дополнительную сумму, равную его бонусным успехам.</p>
 `,
  },
  CalmBreath: {
    title: "Успокаивающее дыхание",
    key: "CalmBreath",
    subgroup: [
      groups.conflictActionsIntrigues,
      groups.conflictActionsBattle,
      groups.conflictActionsDuels,
    ],
    description: `
<p><strong>Описание: </strong>во время конфликта вы можете глубоко
вдохнуть перед выдохом, опираясь на свою внутреннюю силу.</p>
<p><strong>Активация: </strong>в качестве действия Поддержки вы можете сделать глубокий вдох, чтобы успокоиться и
восстановить выносливость.</p>
<p><strong>Эффекты: </strong>если ваше смятение превышает половину
вашего хладнокровия, вы удаляете 1 смятение. Если
ваша усталость превышает половину вашей выносливости, вы снимаете 1 усталость.</p>
`,
  },
  UniqueAction: {
    title: "Уникальное Действие",
    key: "UniqueAction",
    subgroup: [
      groups.conflictActionsIntrigues,
      groups.conflictActionsBattle,
      groups.conflictActionsDuels,
    ],
    description: `
<p><strong>Описание: </strong>вы совершаете проверку, используя навык для механического или повествовательного эффекта, как описано в Главе 3: Навыки (см стр. 140).</p>
<p><strong>Активация: </strong>в качестве действия вы совершаете проверку навыка, чтобы выполнить задачу, которую вы
описали Ведущему.</p>
<p><strong>Эффекты: </strong>если вы преуспели, вы можете использовать этот навык для его повествовательных эффектов,
для реализации любого примера использования,
приведённого в книге, который может быть выполнен за одно действие, или для выполнения другой
задачи, которую Ведущий сочтет целесообразной.</p>
`,
  },
};

export const actionsShared = injector(obj, (original) => ({
  description: replaceCharacter(original.description, injectImages),
  group: groups.conflictActions,
}));

export const combatActionShared = injector(
  {
    Attack: {
      title: "Нападение",
      key: "Attack",
      subgroup: [groups.conflictActionsBattle, groups.conflictActionsDuels],
      description: `
<p><strong>Описание: </strong>вы совершаете атаку на одного врага.</p>
<p><strong>Активация: </strong>в качестве действия Атаки с использованием одного подготовленного оружия вы можете выполнить <strong>проверку Боевых искусств с ЦЧ 2</strong>, используя
соответствующий навык для оружия, нацеливаясь на
одного персонажа в пределах досягаемости оружия</p>
<p><strong>Эффекты: </strong> если вы преуспели, вы наносите цели физический урон, равный базовому урону оружия плюс
ваши бонусные успехи.</p>
<p><strong style="color: #754e40;">Возможности Нападения</strong></p>
<p><strong>YY: </strong>если вы преуспели, нанесите Критическое
Попадание по вашей цели с серьёзностью, равной
смертельности вашего оружия.</p>
`,
    },
    PrepareTheItem: {
      title: "Подготовить предмет",
      key: "PrepareTheItem",
      subgroup: [groups.conflictActionsBattle, groups.conflictActionsDuels],
      description: `
<p><strong>Описание: </strong>вы готовите или убираете одно оружие
или другой предмет.</p>
<p><strong>Активация: </strong>в качестве действия Поддержки вы можете взаимодействовать с одним предметом.</p>
<p><strong>Эффекты: </strong>подготовьте один предмет для использования, приготовьте оружие в выбранном вами хвате
или уберите предмет.</p>
`,
    },
  },
  (original) => ({
    description: replaceCharacter(original.description, injectImages),
    group: groups.conflictActions,
  })
);
