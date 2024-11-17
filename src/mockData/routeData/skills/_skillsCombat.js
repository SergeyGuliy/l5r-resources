import { injector } from "@/helpers/injector";
import { replaceCharacter } from "@/helpers/replaceCharacter";
import { groups, injectImages } from "@/mockData/routeData/constants";

export const obj = {
  Boevye_iskusstva_Bezoruzhnyy_boy: {
    title: "Боевые искусства [Безоружный бой]",
    key: "Boevye_iskusstva_Bezoruzhnyy_boy",
    description: `
<p>Большинство самураев практикуют рукопашный бой. Это важный элемент многих стилей вооруженного боя, поскольку на практике вооруженный и невооруженный бой глубоко переплетены. Однако, в некоторых школах этому учат исключительно по философским или практическим соображениям. Монахи, например, не могут законно владеть дайсё и поэтому часто практикуют продвинутые невооруженные техники</p>
<p>Как и в случае с другими боевыми искусствами, традиции часто возникают и исчезают на протяжении веков, и при посещении монастыря нередко можно обнаружить, что его члены практикуют искусства, которые редко можно увидеть за его стенами.</p>
<p>Боевые искусства [Безоружный бой] охватывают бой при помощи тела в качестве основного оружия как на практике, так и в теории, а также использование некоторых видов импровизированного оружия.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Сражаться, обороняясь, блокировать решительно, изматывать своего противника, практиковать техники, которые полагаются на выносливость.</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Сражаться, отвечая на действия противника, перенаправление силы, выманивание противника, отработка техник, основанных на плавности движений и гибкости.</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Сражаться агрессивно, атаковать напрямую, вывести противника из себя, практиковать приемы, основанные на всплесках скорости и силы.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Сражаться неуловимо, атаковать исподтишка, перехитрить противника, уклоняться от атак, практиковать приемы, основанные на грации и уравновешенности.</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Сражаться инстинктивно или без оглядки на свою жизнь, установить свой разум выше материи.</li>
</ul>
`,
  },
  Boevye_iskusstva_Blizhniy_boy: {
    title: "Боевые искусства [Ближний бой]",
    key: "Boevye_iskusstva_Blizhniy_boy",
    description: `
<p>Какими бы другими искусствами ни занимались буси, главным искусством для них всегда является искусство боя, и даже самураи, которые редко выходят на поле боя, часто интенсивно тренируются в боевых искусствах в качестве упражнения в самообладании. Почти все они проходят некоторую подготовку по обращению с оружием ближнего боя, даже если они предпочитают такое оружие, как лук. В то время как многие самураи считают бой на мечах самым утонченным из боевых искусств, существует множество школ, которые более известны своим использованием другого оружия ближнего боя. Самураи в Рокугане используют большие дубинки, известные как тэцубо, копья, нагинату и другое древковое оружие, и даже посохи, в зависимости от учения их школы и их личных предпочтений.</p>
<p>Боевые искусства [Ближний бой] охватывают бой с применением оружия ближнего боя, как на практике, так и в теории.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Сражаться, обороняясь, блокировать с особой внимательностью, изматывать своего противника, практиковать приемы, которые полагаются на выносливость</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Сражаться, отвечая на действия противника, перенаправление силы, выманивание противника, отработка техник, которые основаны на плавности движений и гибкости.</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Сражаться агрессивно, атаковать напрямую, вывести из себя противника, практиковать приемы, основанные на всплесках скорости и силы.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Сражаться неуловимо, атаковать исподтишка, перехитрить своего противника, уклоняться от атак, практиковать приемы, основанные на грации и уравновешенности, считывать ходы вашего противника.</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Сражаться инстинктивно или без оглядки на свою жизнь, атаковать, не обращая внимания ни на что другое, установить свой разум выше материи.</li>
</ul>
`,
  },
  Boevye_iskusstva_Strelba: {
    title: "Боевые искусства [Стрельба]",
    key: "Boevye_iskusstva_Strelba",
    description: `
<p>Любой воин, регулярно выходящий на поле боя, хорошо знает ценность лука &mdash; и риск его недооценки. В то время как броня часто может отразить стрелу на расстоянии, а лук не может заменить оружие ближнего боя, когда боевые порядки сближаются, эффект от хорошо скоординированного залпа может быть ошеломляющим, поскольку каждый раненый воин удаляет с поля боя не только одного врага, но и любых других бойцов, которые пытаются забрать их. На мастера-лучника страшно смотреть, он способен убивать врагов со значительного расстояния. Даже скромное оружие дальнего боя, такое как праща и метательные снаряды, может быть весьма смертоносным в бою, выводя бойцов из сражения. На другом конце спектра дальнего оружия Клан Краба сконструировал множество осадных орудий дальнего боя, предназначенных для поражения крупных демонов и других сверхъестественных ужасов с высоты стены Кайю.</p>
<p>Боевые искусства [Стрельба] охватывают бой с использованием метательного оружия, как на практике, так и в теории.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Поддержание постоянной области обстрела, подавление целей, ведение огня, чтобы не дать целям занять позицию, правильная укладка оружия дальнего боя.</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Сражаться, отвечая на действия противника, перенаправление силу, выманивание противника, вести обстрел, чтобы создать возможность для перемещения</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Стрельба, позволяющая истощить силы противника, стрельба, позволяющая союзникам продвинуться вперед, стрельба, позволяющая напугать врага.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Вести стрельбу, не выдавая своей позиции, попадание в определенные части цели, стрельба для создания уязвимостей в обороне цели</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Подставиться под удар, чтобы попасть в цель, вложить свою веру во вселенную, чтобы ваш выстрел попал в цель</li>
</ul>
`,
  },
  Meditaciya: {
    title: "Медитация",
    key: "Meditaciya",
    description: `
<p>Жизнь самурая - это жизнь стрессов и потрясений. Медитация помогает самураю забыть о заботах, о завтрашнем дне, упущенных возможностях прошлого и даже о настойчивости мира настоящего, чтобы обрести покой внутри себя.</p>
<p>Боевые навыки определяются борьбой, и для многих воинов величайшая борьба - это внутренняя. Медитация - это навык, который охватывает битвы, происходящие в собственном уме. Это навык, используемый для обработки собственных эмоций, восстановления ментального контроля при шоке и сопротивления замешательству и сверхъестественному влиянию разума. Война может быть устремлением самурая, но человек на войне должен столкнуться с постоянным разрушением души или рискует полностью поддаться жестокости. Большинство самураев тренируются в медитации как для того, чтобы подготовить свой разум к ужасам битвы, так и для того, чтобы искать в себе большее космическое знание.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Использование логики для преодоления ваших личных чувств, размышление о природе ваших обязанностей, сохранение хладнокровия, несмотря на вызовы и провокации, сопротивление искушению.</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Понимание своих собственных эмоций и желаний, размышление о природе своих желаний, понимание того, как согласовать свои цели с вашими желаниями, сопротивление гневу.</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Использование своих эмоций, чтобы отвергнуть, казалось бы, неизбежный вывод, поддержание концентрации на одной теме, длительное пребывание в эмоциональном состоянии, сопротивление страху.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Убеждение себя в истинности чего-либо, поиск слабых мест в своих взглядах и идеологиях, понимание того, как согласовать свои цели с идеалами, сопротивление отчаянию</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Понимание своего места во вселенной, понимание роли, уготованной вам судьбой, знание того, от чего вы готовы отказаться для достижения своих целей, видение проблесков вашего собственного будущего, сопротивление сверхъестественному ментальному вмешательству</li>
</ul>
`,
  },
  Taktika: {
    title: "Тактика",
    key: "Taktika",
    description: `
<p>Лидерство &mdash; это не только харизма и сила воли - самурай, выходящий на поле боя, должен также принимать мудрые решения. Сражения не выигрываются без потерь, и каждый командир тратит жизни своих солдат на достижение победы, но это не значит, что они меньше ценят эти жизни.</p>
<p>Самураи изучают многие искусства, но практика войны входит в число их основных обязанностей. Хотя, может быть, и верно, что исход каждого сражения решается до того, как первый солдат сделает шаг, на долю лидеров боевых действий, от генералов до сержантов отделений, ложится задача воплотить этот исход в реальность. Тактика определяет руководство на поле боя, от палатки генерала до линии фронта. Это отражает осведомленность персонажа о ходе сражения и его способность как придерживаться своих приказов, так и использовать возникающие возможности с наибольшим эффектом. В то время как навык Командования используется для мотивации солдат, восстановления боевого духа и поддержания порядка, навык Тактики используется для эффективного управления войсками, которые уже послушны. В то время как навык Правительства управляет логистикой в преддверии битвы, навык Тактики управляет способностью персонажа думать и реагировать после вступления в битву.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Сопротивление лобовому нападению, удержание позиции любой ценой, уменьшение потерь при отступлении, надзор за строительством осадных орудий.</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Выполнение контратаки, быстрое изменение позиции после атаки, полное использование полезной местности, перемещение и эксплуатация осадных орудий.</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Проведение лобовой атаки, захват врага, разрушение боевого духа противника с помощью ужасающей тактики, разработка осадных орудий.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Выполнение притворного отступления, обход противника с фланга, выявление слабых мест в обороне противника и представляющих интерес целей.</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Отправка подразделения на смерть, чтобы создать стратегическую брешь, командование силами, не раскрывая свою личность врагу.</li>
</ul>
`,
  },
  Fizicheskaya_podgotovka: {
    title: "Физическая подготовка",
    key: "Fizicheskaya_podgotovka",
    description: `
<p>Физическая подготовка - это отражение способности самурая совершать подвиги физической доблести и грации. Она регулирует такие виды деятельности, как бег, прыжки, поднятие тяжелых предметов, пеший переход на большие расстояния, быстрое плавание и другие подобные физические упражнения, которые основаны на быстрых всплесках силы и точности или длительных физических усилиях. Кроме того, навык Физической подготовки определяет способность персонажа избегать смертельного урона при ударе, противостоять Скверне Теневых Земель и восстанавливаться после яда и болезней. Наконец, физическую подготовку можно использовать для того, чтобы сопротивляться, выдерживать или иным образом принимать удары на поле боя.</p>
<ul>
  <li><strong>Подход выдержки (Кольцо Земли):</strong> Двигаться осторожно, доводить свое тело до предела, не причиняя непоправимого вреда, преодолевать большие расстояния, удерживать тяжелые предметы в течение длительного периода времени, прятаться, принимая неподвижное положение, принимать удар</li>
  <li><strong>Подход перенаправления (Кольцо Воды):</strong> Обходить препятствия и пробираться сквозь толпу без замедления, влезать в небольшие пространства, выполнять упражнения для ускорения восстановления после травм, скрыться от преследователей в толпе, уворачиваться от ударов.</li>
  <li><strong>Подход превосходства (Кольцо Огня):</strong> Перемещаться, не обращая внимания на препятствия, прыгать на большие расстояния, быстро сдвигать и поднимать тяжелые предметы, разрушение вещей, ловля кого-то на бегу, встречать атаки с равной противнику силой.</li>
  <li><strong>Подход притворства (Кольцо Воздуха):</strong> Двигаться скрытно, поддержание равновесия, преследование кого-то без его ведома, безопасное падать и изящно приземляться, скрыться от кого-то при помощи бега, контроль того, куда попадают удары на вашем теле.</li>
  <li><strong>Подход пожертвования (Кольцо Пустоты):</strong> Действовать, основываясь на чистый инстинкт, доведение своего тела до предела для достижения цели, преодоление физических ограничений с помощью чистой воли, принимать удары напрямую.</li>
</ul>
`,
  },
};

export const _skillsCombat = injector(obj, (original) => ({
  group: groups.skills,
  subgroup: groups.skillsCombat,
  description: replaceCharacter(original.description, injectImages),
}));
