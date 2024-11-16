import { injector } from "@/helpers/injector";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { replaceCharacter } from "@/helpers/replaceCharacter";

export const obj = {
  Zamorazhivanie_zhiznennoy_sily: {
    title: "Замораживание жизненной силы",
    rank: 2,
    key: "Zamorazhivanie_zhiznennoy_sily",
    description: `
<p><em>Монах касается одной точки на теле цели и ледяным взглядом заставляет ки внутри цели застыть, сокращая мышцы до спазмов, а затем заставляя их расслабится.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Поддержки вы можете выполнить <strong>проверку Боевых искусств [Безоружный бой] с ЦЧ 2 (Вода)</strong>, чтобы усилить свои безоружные удары. Когда вы активируете эту технику, вы можете выбрать одного персонажа на дистанции 0-1 в качестве цели для взрывного эффекта.</p>
<p><strong>Эффект улучшения:</strong> При успехе, это кихо активируется. Пока это кихо активно, после того, как персонаж защищается от урона, который вы наносите действием Атаки, используя удар кулаком или ногой, он получает состояние Паралича, если только он не решит получить 3 усталости.</p>
<p><strong>Взрывной эффект:</strong> Если у вас есть два или более бонусных успеха, цель получает сверхъестественный урон, равный вашему Кольцу Воды, игнорируя её сопротивление, а также состояние Паралича.</p>
<p>Если вы добьетесь успеха с четырьмя или более бонусными успехами, цель вместо этого получит критическое попадание, серьёзность которого равна вашему Кольцу Воды плюс ваш ранг в Медицине.</p>
    `,
  },
  Zashita_ki: {
    title: "Защита ки",
    rank: 1,
    key: "Zashita_ki",
    description: `
<p><em>Монах прикасается к пострадавшему, ощущая поток его ки и используя свой собственный, чтобы мягко направить его течение. Пока монах поддерживает это кихо, его прикосновение продолжает исцелять, хотя многократное повторение этого действия истощает организм.</em></p>
<p><strong>Активация:</strong> В качестве действия Перемещения и Поддержки вы можете выполнить <strong>проверку Медитации с ЦЧ 1 (Вода)</strong>. Вы можете выбрать одного персонажа на дистанции 0-1 в качестве цели для взрывного эффекта.</p>
<p><strong>Эффект улучшения:</strong> При успехе, это кихо активируется. Пока это кихо активно, когда вы выполняете действие Успокаивающее дыхание, вы можете снять 2 усталости вместо 1.</p>
<p>Пока это кихо активно, после выполнения действия вы можете потратить 1 очко Пустоты, чтобы снять усталость, равную вашему рангу в Медицине, с другого персонажа на дистанции 0-1.</p>
<p><strong>Взрывной эффект:</strong> Если у вас есть 2 или более бонусных успехов, ваша цель снимает усталость, равную вашему рангу в Медицине плюс ваши бонусные успехи. Каждая цель не может быть снова затронута этим эффектом до конца сцены.</p>
    `,
  },
  Verkh_na_drakone_Vody: {
    title: "Верх на драконе Воды",
    rank: 3,
    key: "Verkh_na_drakone_Vody",
    description: `
<p><em>Монах меняет позицию и движется с неумолимой целеустремлённостью, делая своё ки текучим и позволяя мистической энергии стекать с него подобно безвредным каплям дождя.</em></p>
<p><strong>Активация:</strong> В качестве действия Перемещения и Поддержки вы можете выполнить <strong>проверку Медитации с ЦЧ 3 (Вода)</strong>, чтобы стать устойчивым к сверхъестественным эффектам.</p>
<p><strong>Эффект улучшения:</strong> При успехе, это кихо активируется. Пока это кихо активно, когда вы становитесь целью проверки воззвания, махо или кихо, увеличьте ЦЧ проверки на величину вашего ранга в Медитации.</p>
<p>По усмотрению ведущего, пока это кихо активно, вы можете проходить через определенные сверхъестественные барьеры и обереги, не вызывая их эффектов и не предупреждая их владельцев.</p>
<p><strong>Взрывной эффект:</strong> Если у вас есть два или более бонусных успеха, удалите с себя все другие постоянные эффекты из сверхъестественных источников (таких как воззвания, махо или кихо).</p>
<p>Если у вас есть четыре или более бонусных успеха, вместо этого удалите все другие постоянные эффекты из сверхъестественных источников (таких как воззвания, махо или кихо) у всех персонажей на дистанции 0-2.</p>
    `,
  },
  Vodnyy_kulak: {
    title: "Водный кулак",
    rank: 1,
    key: "Vodnyy_kulak",
    description: `
<p><em>Монах наносит мягкий удар по ближайшему предмету и превращает своё ки в воду, проходящую рябью по соседним объектам и проскальзывающую мимо защиты, чтобы достичь цели. Сила этого удара проходит через любую контактную поверхность, поражая другую цель, коснувшуюся её, даже если она находится по другую сторону деревянной двери, каменной стены или другого физического барьера.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Поддержки вы можете выполнить <strong>проверку Боевых искусств [Безоружный бой] с ЦЧ 1 (Вода)</strong>, чтобы усилить свои безоружные удары. Когда вы выполняете это действие, вы можете выбрать одного персонажа на дистанции 0-3, который разделяет с вами контактную поверхность, в качестве цели для взрывного эффекта.</p>
<p><strong>Эффект улучшения:</strong> При успехе, это кихо активируется. Пока это кихо активно, ваши проверки Атаки с использованием профиля безоружных атак игнорируют физическое сопротивление вашей цели в пределах двукратного ранга вашего Кольца Воды.</p>
<p>Пока это кихо активно, вы можете потратить 1 очко Пустоты, чтобы выполнить Атаку, используя удар кулаком или ногой, через любую твердую поверхность, к которой прикасается ваша цель. Пока вы и ваша цель соприкасаетесь с одной и той же твердой поверхностью (например, стеной, полом или водоёмом) на дистанции от 0 до числа, равного вашему Кольцу Воды, цель считается находящейся на дистанции для любого выполняемого вами действия Атаки с вашим профилем безоружной атаки.</p>
<p><strong>Взрывной эффект:</strong> В случае успеха вы наносите физический урон цели, равный вашему Кольцу Воды.</p>
    `,
  },
  Put_morskoy_peny: {
    title: "Путь морской пены",
    rank: 1,
    key: "Put_morskoy_peny",
    description: `
<p><em>Монах перемещается и подстраивает свои движения под окружающую обстановку, скользит на ногах и выпрямляется, как утка, плывущая по поверхности пруда. В этом состоянии монах может даже перемещаться по воде, его ки поддерживает его, когда он соприкасается с волнами</em></p>
<p><strong>Активация:</strong> В качестве действия Перемещения и Поддержки вы можете совершить <strong>проверку Медитации с ЦЧ 1 (Вода)</strong>.</p>
<p><strong>Эффект улучшения:</strong> При успехе, это кихо активируется. Пока это кихо активно, вы можете ходить по воде, как если бы это была твердая земля.</p>
<p><strong>Взрывной эффект:</strong> Если у вас есть два или более бонусных успеха, снимите с себя состояние Обездвиженный и Распластанный. Затем вы можете переключиться на любую стойку и переместиться на 2 диапазона дистанции.</p>
    `,
  },
};

export const _kihoWater = injector(obj, (original) => ({
  group: groups.kiho,
  subgroup: groups.kihoWater,
  description: replaceCharacter(original.description, injectImages),
}));
