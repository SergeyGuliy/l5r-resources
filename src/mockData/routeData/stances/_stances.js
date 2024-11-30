import { replaceCharacter } from "@/helpers/replaceCharacter";
import { injector } from "@/helpers/injector";

import { groups, injectImages } from "@/mockData/routeData/constants";

const obj = {
  Zemlya: {
    title: "Земля",
    key: "Zemlya",
    description: `
<p><em>Вы концентрируетесь на стойкости и используете тактику, которая удерживает вас в строю и позволяет выждать нужный момент для действия.</em></p>
<p><strong>Эффект стойки:&nbsp;</strong>Когда другие персонажи совершают проверки действий Атаки и Козней, нацеленных на вас, они не могут тратить Y, чтобы нанести вам критическое попадание или наложить состояние на вас.</p>
 `,
  },
  Ogon: {
    title: "Огонь",
    key: "Ogon",
    description: `
<p><em>Вы идете в атаку, продавливая своих врагов, и доверяетесь внутреннему импульсу, чтобы оказаться в безопасном месте в нужный момент.</em></p>
<p><strong>Эффект стойки:</strong> Когда вы успешно проходите проверку, считайте, что у вас есть по одному дополнительному Успеху за каждое T на сохраненных костях.</p>
 `,
  },
  Voda: {
    title: "Вода",
    key: "Voda",
    description: `
<p><em>Вы остаетесь гибким, готовым адаптироваться к ситуации, использовать возможности по мере их возникновения или направлять силу соперника против него самого.</em></p>
<p><strong>Эффект стойки:</strong>&nbsp;В течение вашего хода вы можете выполнить одно дополнительное действие, которое не требует проверки. Это действие не может использовать тип действия, которое вы уже выполнили в этом ходу.</p>
 `,
  },
  Vozduh: {
    title: "Воздух",
    key: "Vozduh",
    description: `
<p><em>Вы переходите в стойку, которая способствует изящности, проворно обходя ваших противников, в то время как их атаки безвредно скользят мимо вас.</em></p>
<p><strong>Эффект стойки:</strong> Увеличьте ЦЧ проверок действий Атаки и Козней, направленных на вас, на 1. Если ваш ранг школы 4 или выше, вместо этого увеличьте ЦЧ на 2.</p>
 `,
  },
  Pustota: {
    title: "Пустота",
    key: "Pustota",
    description: `
<p><em>Вы занимаете позицию, которая не придерживается какого-либо направления или тактики, читая потенциальную энергию ситуации и затем действуя в качестве проводника для ее освобождения.</em></p>
<p><strong>Эффект стойки:&nbsp;</strong>Вы не получаете смятение от T на ваших сохраненных костях. Вы всё ещё можете получать смятение из других источников.</p>
 `,
  },
};

export const _stances = injector(obj, (original) => ({
  description: replaceCharacter(original.description, injectImages),
  group: groups.stances,
}));
