import { injector } from "@/helpers/injector";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { replaceCharacter } from "@/helpers/replaceCharacter";

export const obj = {
  Blagoslovennyy_veter: {
    title: "Благословенный ветер",
    rank: 1,
    key: "Blagoslovennyy_veter",
    description: `
<p style="text-align: center;"><em>Пыльная Буря в Бутылке (Алхимия), Упрек Тамона (Фортунист), Колонна Мира (Иноземное)</em></p>
<p><em>Сюгэндзя произносит короткую песнь, и пыль взмывает вверх, увлекаемая извилистыми потоками воздуха, которые срывают и отклоняют летящие предметы. Камни, стрелы и даже более крупные снаряды отбрасываются сильным ветром, защищая цель от таких атак</em></p>
<p><strong>Активация:</strong> В качестве действия Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 2 (Воздух)</strong>, выбрав целью одну позицию на дистанции 0&ndash;3.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете кружащийся ветер в указанной точке. Любой персонаж на дистанции 0&ndash;2 от выбранной позиции считается находящимся в Заслоняющей местности (см. <strong>Местность</strong> на стр. 267) для действий Атаки, нацеленных на него. Этот эффект сохраняется в течение одного раунда плюс дополнительные раунды, равные количеству ваших бонусных успехов.</p>
<p><strong>Воздух Y:</strong> вместо этого данный эффект сохраняется до конца сцены.</p>
    `,
  },
  Prizyv_vetra: {
    title: "Призыв ветра",
    rank: 2,
    key: "Prizyv_vetra",
    description: `
<p style="text-align: center;"><em>Нежные Крылья Крапивника (Алхимия), Шаги Додзи (Родовое), Улыбки Бентена (Фортунист) </em></p>
<p><em>Сюгэндзя шепчет безмолвную молитву и поднимается с земли, когда легкий ветер уносит его ввысь. Обычно, духи воздуха грациозно несут своих подопечных, не роняя их и не спотыкаясь - обычно.</em></p>
<p><strong>Активация:</strong> В качестве действия Перемещения вы можете совершить <strong>проверку Теологии с ЦЧ 4 (Воздух)</strong>, выбрав целью себя.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы дополняете свое движение порывом ветра, который уносит вас ввысь. Помимо возможности свободно перемещаться по вертикали, вы игнорируете влияние местности во время полета. Этот эффект сохраняется до конца сцены.&nbsp;</p>
<p><strong>Воздух YY+:</strong> Во время полета, вы можете нести с собой до одного дополнительного готового к этому персонажа на дистанции 0&ndash;2 за каждые Y Y, потраченные таким образом.</p>
    `,
  },
  Svetom_Gospodina_Luny: {
    title: "Светом Господина Луны",
    rank: 1,
    key: "Svetom_Gospodina_Luny",
    description: `
<p style="text-align: center;"><em>Глаза Кицуки (Родовое), Ветер Рассеивает Тень (Стихийное), Раскрыть Мир Призраков (Иноземное) </em></p>
<p><em>Когда сюгэндзя выполняет это воззвание, свет превращается в лунную ночь, расплетая тени что бы обнажить то, что они скрывают. Скрытые объекты слабо светятся серебряным светом, а мистические иллюзии проявляются в виде полупрозрачных, паутинных форм.</em></p>
<p><strong>Активация:</strong> В качестве действия Козни вы можете совершить <strong>проверку Теологии с ЦЧ 2 (Воздух)</strong>, выбрав целью область на дистанции 0&ndash;2 от вас.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы выискиваете каждого скрытого персонажа и скрытый объект (такой как потайные отделения, люки и спрятанное оружие) в выбранной области, показывая их иллюзорными, светящимися очертаниями, которые можете видеть только вы. Это воззвание открывает только объекты и людей, скрытые светскими средствами.</p>
<p><strong>Воздух Y+:</strong> Если вы преуспели, вы также можете обнаружить один объект, скрытый магией, за каждую Y, потраченную таким образом.</p>
<p><strong>Воздух Y Y+:</strong> Выберите одного дополнительного персонажа на дистанции 0-1 за каждые Y Y потраченные таким образом. Выбранные персонажи также могут видеть скрытые объекты.</p>
    `,
  },
  Plash_nochi: {
    title: "Плащ ночи",
    rank: 1,
    key: "Plash_nochi",
    description: `
<p style="text-align: center;"><em>Дым Украденного Света (Алхимия), Покров Северного Ветра (Фортунист), Прогулка в Мире Теней (Иноземное) </em></p>
<p><em>Достаточно обученный сюгэндзя может призвать ками воздуха, чтобы выполнить один из их самых простых и эффективных трюков: заключить в их объятия предмет или человека, и скрыть его из виду.</em></p>
<p><strong>Активация:</strong> В качестве действия Козни и Поддержки вы можете совершить <strong>проверку Теологии (Воздух)</strong>, выбрав целью один объект или персонажа на дистанции 0&ndash;1. ЦЧ соответствует фигуре цели (см. стр. 265).</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы дополняете цель иллюзией, которая делает ее невидимой для невооруженного глаза. Объект все еще физически присутствует, и его можно потрогать, понюхать или ощутить любым обычным чувством, кроме зрения. Этот эффект сохраняется в течение одного раунда плюс дополнительные раунды, равные количеству ваших бонусных успехов.</p>
<p><strong>Воздух YY+:</strong> Выберите одну дополнительную цель той же фигуры или меньше за каждые Y Y, потраченные таким образом.</p>
    `,
  },
  Lozhnoe_Carstvo_Duhov_Lisy: {
    title: "Ложное Царство Духов Лисы",
    rank: 4,
    key: "Lozhnoe_Carstvo_Duhov_Lisy",
    description: `
<p style="text-align: center;"><em>Икома Вспоминает Сказку (Родовое), Затерянный в Исава Мори (Фортунист), Раскрась Линзу Подзорной Трубы (Иноземное) </em></p>
<p><em>Ками не так тесно связаны с Царством Смертных Нингэн-до, как смертные (даже сюгэндзя). Они могут видеть, как царства смертных и духов соприкасаются и разъединяются, и, когда их умоляет сюгэндзя, они могут даже переносить видения из одного царства в другое, создавая обширную, почти осязаемую иллюзию, которая обманывает всех, кроме самых проницательных наблюдателей.</em></p>
<p><strong>Активация:</strong> В качестве действия Козни вы можете совершить <strong>проверку Теологии с ЦЧ 5 (Воздух)</strong>, выбрав целью одну позицию на дистанции 0&ndash;4.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете иллюзорную местность в выбранной позиции, которая простирается на дистанцию, не превышающую ваш ранг Кольца Воздуха. Персонаж, не подозревающий о ложной природе иллюзии, должен пройти <strong>проверку Выживания c ЦЧ 4 (Земля 5, Огонь 2)</strong>, чтобы осознать её ложность на расстоянии. Поскольку иллюзия не имеет сущности, любой физический контакт раскрывает ложь (хотя иллюзия остается на месте). Количество раундов (или минут во время повествования или сцены простоя), в течение которых сохраняется этот эффект, равно рангу вашего Кольца Воздуха плюс количество ваших бонусных успехов.</p>
<p><strong>Воздух Y:</strong> Вместо этого данный эффект сохраняется до конца сцены.</p>
<p><strong>Воздух Y+:</strong> Иллюзорная местность, которую вы вызываете, имеет одно из следующих свойств местности за каждую Y потраченную таким образом: Опасная, Опутывающая или Заслоняющая (см. Местность, стр. 267).</p>
    `,
  },
  Hvata_drakona_Vozduha: {
    title: "Хватка дракона Воздуха",
    rank: 3,
    key: "Hvata_drakona_Vozduha",
    description: `
<p style="text-align: center;"><em>Прыжок Шикадзина (Родовое), Путешествие Дзикодзю (Фортунист), Колыбель Ветра (Иноземное) </em></p>
<p><em>Сюгэндзя делает долгий выдох в конце заклинания и протягивает руку. Наступает тишина, через мгновение разразится буря. Затем облака высоко над головой, извиваясь, тянутся с небес как праздничные ленты. Ветер устремляется к цели и подбрасывает ее в воздух, унося в безопасное место или навстречу гибели, в зависимости от воли сюгэндзя.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки или Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 4 (Воздух)</strong>, выбрав целью одного персонажа на дистанции 3&ndash;5.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете ураганный ветер, который перемещает цель на дистанцию, равную вашему Кольцу Воздуха плюс ваши бонусные успехи (максимальная дальность 6), игнорируя любую встречающуюся местность. Вы можете осторожно опустить цель на землю (если вы выбрали действие Поддержки) или бросить её на землю со всей силой (если вы выбрали действие Атаки). Когда вы швыряете цель на землю таким образом, цель должна пройти <strong>проверку Физической Подготовки с ЦЧ 4 (Земля 5, Огонь 2)</strong> или она пострадает от эффектов падения с дистанции 3 (см. <strong>Падение</strong> на стр. 269).</p>
<p><strong>Воздух Y+:</strong> Максимальная дальность действия этой техники увеличивается на 1 за каждую Y, потраченную таким образом.</p>
<p><strong>Воздух YY+:</strong> Увеличивает высоту падения цели на 1 за каждые потраченные таким образом YY</p>
    `,
  },
  Maska_vetra: {
    title: "Маска ветра",
    rank: 2,
    key: "Maska_vetra",
    description: `
<p style="text-align: center;"><em>Глина Движущихся Черт (Алхимия), Лицо Фуруяри (Родовое), Шутка Садахако (Фортунист) </em></p>
<p><em>Обман &mdash; это не путь самурая, но часто это путь целесообразности. Сюгэндзя просит ками воздуха скрыть свои черты лица и даже голос, заставляя наблюдателей воспринимать его как другого человека.</em></p>
<p><strong>Активация:</strong> В качестве действия Козни и Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 3 (Воздух)</strong>, выбрав целью себя.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы дополняете себя иллюзией, которая сделает вас похожим на кого-то другого. Наблюдатель должен пройти <strong>проверку Чувств c ЦЧ 4 (Земля 5, Огонь 2)</strong>, чтобы заметить что-то неладное с вашим внешним видом; если он преуспел, он может потратить Y, чтобы узнать вас. Этот эффект сохраняется до конца сцены.</p>
<p><strong>Воздух Y:</strong> Вы можете также изменить свой голос, чтобы он звучал как чей-то другой, пока действует иллюзия. Наблюдатель должен пройти <strong>проверку Чувств с ЦЧ 4 (Земля 5, Огонь 2)</strong>, чтобы заметить что-то неладное в звучании вашего голоса; если он преуспел, он может потратить Y, чтобы узнать вас.</p>
<p><strong>Воздух YY+:</strong> Этот эффект сохраняется в течение одной дополнительной сцены за каждые Y Y, потраченные таким образом.</p>
    `,
  },
  Prikosnovenie_prirody: {
    title: "Прикосновение природы",
    rank: 1,
    key: "Prikosnovenie_prirody",
    description: `
<p style="text-align: center;"><em>Шепот Синдзё (Родовое), Беги Вместе с Ки-Рином (Фортунист), Голос Короля Глен (Иноземное) </em></p>
<p><em>Чтобы выполнить этот обряд, сюгэндзя обращается к Тикусё-до, Царству Животных, в окружающем его мире и в своем собственном сердце. Это позволяет сюгэндзя общаться с животными царства смертных (хотя и не управлять ими).</em></p>
<p><strong>Активация:</strong> В качестве действия Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 1 (Воздух)</strong>, выбрав целью себя.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы дополняете себя способностью разговаривать с животными из обычного мира (но не с Потусторонними или Осквернёнными существами). Животные могут понимать вас (естественно, в пределах своих возможностей &mdash; человеческие политические отношения не будут иметь никакого значения для лошадей, сколько бы раз вы их ни объясняли). Однако они не обязаны вам подчиняться. Этот эффект сохраняется до конца сцены.&nbsp;</p>
<p><strong>Воздух Y:</strong> До конца сцены вы можете понимать речь животных.</p>
<p><strong>Воздух Y:</strong> Если вы преуспели, животное также машинально действует по отношению к вам благосклонно благодаря вашей вежливости, выполняя одну просьбу, которая не подвергает его опасности, без необходимости стимулирования едой или последующими проверками.</p>
<p><strong>Воздух YY:</strong> Если вы преуспели, вы сможете таким образом общаться с потусторонним существом, если ему есть что вам сказать.</p>
    `,
  },
  Sekrety_na_vetru: {
    title: "Секреты на ветру",
    rank: 2,
    key: "Sekrety_na_vetru",
    description: `
<p style="text-align: center;"><em>Шепот на ухо Баюси (Родовое), Дар Тэндзина (Фортунист), Соглядатай на Северной Стене (Иноземное) </em></p>
<p><em>Духам воздуха не нужно никаких побуждений, чтобы сплетничать, даже если их бездыханный ропот часто непонятен человеческому уху. Чтобы совершить это тайное воззвание, сюгэндзя преподносит благовония из сандалового дерева и сливы, чтобы убедить ками воздуха повторить сказанное вдалеке.</em></p>
<p><strong>Активация:</strong> В качестве действия Козни вы можете совершить <strong>проверку Теологии с ЦЧ 3 (Воздух)</strong>, выбрав целью одну позицию на дистанции 0.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, в шепчущихся ветрах вы начинаете слышать все, что происходит в выбранной позиции. Ками Воздуха могут подслушать все сказанное в диапазоне дистанций, равном вашему Кольцу Воздуха. Этот эффект сохраняется в течение двадцати четырех часов или до тех пор, пока вы не назначите новую область для подслушивания. Пока этот эффект сохраняется, вы можете потратить действие, чтобы услышать что-нибудь, что говорят в данный момент в обозначенной области.</p>
<p><strong>Воздух Y:</strong> Помимо того, что вы слышите звуки из обозначенной области, вы также можете чувствовать запахи в этой области.</p>
<p><strong>Воздух Y:</strong> Если другой персонаж обнаруживает ваше воззвание, эффект немедленно прекращается, не позволяя ему понять, что это ваша работа.</p>
<p><strong>Воздух YY+:</strong> Эффект сохраняется в течение двадцати четырех дополнительных часов за каждые Y Y, потраченные таким образом.</p>
    `,
  },
  Vosstan_Vozduh: {
    title: "Восстань, Воздух",
    rank: 4,
    key: "Vosstan_Vozduh",
    description: `
<p style="text-align: center;"><em>Шепот Синдзё (Родовое), Беги Вместе с Ки-Рином (Фортунист), Голос Короля Глен (Иноземное) </em></p>
<p><em>Воплощенный ками воздуха &mdash; мерцающее, изменчивое нечто, вихрь силы с хлещущими руками, который кричит голосом шторма. Он возвышается над самыми высокими из людей, но может найти путь сквозь тончайшие щели. Малейшая потеря концентрации при управлении таким существом может привести к бесчисленным разрушениям, поскольку дитя бури прокладывает себе путь через ландшафт.</em></p>
<p><strong>Активация:</strong> В качестве действия Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 6 (Воздух)</strong>, выбрав целью одну позицию на дистанции 3&ndash;5.</p>
<p>Эффекты: Если вы преуспели, вы призываете <strong>Воплощенного ками воздуха</strong> (см. стр. 322), чтобы он сражался за вас. Он появляется в указанной позиции и подчиняется вам в течение двух раундов плюс дополнительные раунды, равные вашим бонусным успехам, и в каждом раунде делает свой ход сразу после вашего. Когда этот эффект прекращается, он уходит или, если его разозлить, начинает следовать своим собственным целям. Если он начинает действовать самостоятельно, он не атакует призвавшего его сюгэндзя, если только его не спровоцировать.&nbsp;</p>
<p><strong>Воздух Y:</strong> Воплощенный ками воздуха прибывает в виде урагана, который отбрасывает в сторону все, что находится поблизости. Каждый персонаж на дистанции 0&ndash;2 от целевой позиции должен совершить <strong>защитную проверку Физической Подготовки с ЦЧ 4 (Земля 5, Огонь 2)</strong>, или получить сверхъестественный урон, равный вашему Кольцу Воздуха, и быть отброшенным на 2 диапазона дистанции.</p>
    `,
  },
  Prizyv_tumana: {
    title: "Призыв тумана",
    rank: 2,
    key: "Prizyv_tumana",
    description: `
<p style="text-align: center;"><em>Бегство Соси (Родовое), Вуаль Рассвета (Стихийное), Покоящиеся Кудри Дзотея (Фортунист) </em></p>
<p style="text-align: left;"><em>Из одежды или доспехов персонажа вырываются щупальца тумана, вздымающиеся перед ним и окутывающие его зловещей дымкой.</em></p>
<p style="text-align: left;"><strong>Активация:</strong> В качестве действия Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 2 (Воздух)</strong>, выбрав одну позицию на дистанции 0&ndash;4.</p>
<p style="text-align: left;"><strong>Эффекты:</strong> Если вы преуспели, вы вызываете клубящийся туман, который заполняет область, простирающуюся на 1 диапазон дистанции вокруг целевой позиции. Эта полоса тумана считается Заслоняющей местностью (см. <strong>Местность</strong> на стр. 267).</p>
<p style="text-align: left;"><strong>Воздух Y:</strong> Вы можете выбрать персонажа вместо позиции. Клубящийся туман следует за этим персонажем.</p>
<p style="text-align: left;"><strong>Воздух Y+:</strong> Туман расстилается на 1 дополнительный диапазон дистанции за каждую Y, потраченную таким образом (максимум до 6 дистанции).</p>
<p style="text-align: left;"><strong>Воздух Y Y:</strong> Туман превращается в ледяную бурю, из-за чего он также становится Опасной местностью.</p>
    `,
  },
  Burya_Vozduha: {
    title: "Буря Воздуха",
    rank: 1,
    key: "Burya_Vozduha",
    description: `
<p style="text-align: center;"><em>Флакон Бури (Алхимия), Вой Исоры (Фортунист), Взмах Крыльев Виверны (Иноземное) </em></p>
<p><em>Сюгэндзя умоляет духов воздуха наброситься на всех вокруг него, призывая бушующие ветры, чтобы отбросить врагов назад или даже швырнуть их на землю.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки вы можете совершить <strong>проверку Теологии с ЦЧ 3 (Воздух)</strong>, выбирая целью каждого персонажа на дистанции 2&ndash;3.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, порывы ветра поражают всех в зоне действия. Каждая цель получает сверхъестественный урон, равный вашему Кольцу Воздуха, и должна сопротивляться, совершив <strong>проверку Физической Подготовки с ЦЧ 4 (Земля 5, Огонь 2)</strong>, или получить состояние Дезориентации.</p>
<p><strong>Воздух Y+:</strong> Каждая цель, провалившая проверку Физической Подготовки, также отталкивается от вас на 1 диапазон дистанции за каждую Y, потраченную таким образом.</p>
    `,
  },
  Par_koshmarov: {
    title: "Пар кошмаров",
    rank: 3,
    key: "Par_koshmarov",
    description: `
<p style="text-align: center;"><em>Мягко Говорит Тогаси (Родовое), Враг Твоего Сердца (Стихийное), Тень Кармического Колеса (Фортунист) </em></p>
<p><em>Сюгэндзя шепчет воззвание, которое цель едва слышит, и по мере того, как зловещее пение стихает, а ароматное облако ладана растворяется, воплощение страха цели предстает в виде иллюзорного фантома.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки вы можете совершить <strong>проверку Теологии с ЦЧ 4 (Воздух)</strong>, выбрав целью одного персонажа на дистанции 2&ndash;3.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете иллюзию самого большого страха вашей цели. Ваша цель должна пройти <strong>проверку Медитации с ЦЧ 4 (Земля 5, Огонь 2)</strong>, чтобы видеть сквозь этот фантом; если она терпит неудачу, она страдают от смятения, равного вашему Кольцу Воздуха плюс ваши бонусные успехи, и должна немедленно сорвать маску, если она таким образом становится Нестабильной. Если она срывает маску в присутствии фантома, она сосредотачивает своё внимание на фантоме, атакуя его, убегая от него или обрушивая на него грубые слова (вместо того, чтобы иметь дело с вами или кем-либо еще). Фантом существует в течение количества раундов, равного вашему Кольцу Воздуха.</p>
<p><strong>Воздух Y:</strong> Если цель проваливает проверку Медитации, она также получает состояние Дезориентации.</p>
<p><strong> Воздух Y:</strong> Фантом сохраняется до конца сцены.</p>
    `,
  },
  Znak_pamyati: {
    title: "Знак памяти",
    rank: 1,
    key: "Znak_pamyati",
    description: `
<p style="text-align: center;"><em>Загадка Агаси (Родовое), Обман Ками Воздуха (Стихийное), Шутка Эбису (Фортунист) </em></p>
<p><em>После выполнения этого воззвания сюгэндзя создает иллюзию из воздуха, игру света, пойманную в руки</em></p>
<p><strong>Активация:</strong> В качестве действия Козни вы можете совершить <strong>проверку Теологии с ЦЧ 2 (Воздух)</strong>, выбрав целью одну позицию на дистанции 0&ndash;1.&nbsp;</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете иллюзию одного неодушевленного предмета в выбранном месте. Размер иллюзорного объекта &mdash; это Фигура, равная вашим бонусным успехам (начиная с 0, или небольшого предмета, помещающегося в руке). Предмет кажется реальным, но на самом деле его не существует, и его нельзя использовать. Любой персонаж, столкнувшийся с одной из этих иллюзий, должен пройти <strong>проверку Кузнечного дела или Дизайна с ЦЧ 4 (Земля 5, Огонь 2)</strong>, используя подход Учёных навыков, чтобы распознать ее иллюзорную природу. Объект сохраняется до конца сцены.</p>
<p><strong>Воздух Y:</strong> Объект может выглядеть как существо или человек (хотя он не движется).</p>
<p><strong>Воздух Y+:</strong> Призовите один дополнительный иллюзорный объект на дистанции за каждую Y, потраченную таким образом.</p>
<p><strong>Воздух Y Y:</strong> Иллюзорные объекты, которые вы вызываете таким образом, имеют массу, и их можно использовать так, как если бы они были реальными (хотя они все еще неодушевленные и поэтому не двигаются сами по себе). Они по-прежнему исчезают, когда эффект заканчивается.</p>
    `,
  },
  Gnev_Kaze_no_Kami: {
    title: "Гнев Казе-но-Ками",
    rank: 5,
    key: "Gnev_Kaze_no_Kami",
    description: `
<p style="text-align: center;"><em>Тайфун в Бутылках (Алхимия), Паническое Бегство Утаку (Родовое), Ярость Дракона Воздуха (Стихийное) </em></p>
<p><em>Разгневанные с помощью самых сокровенных секретов искусства сюгэндзя, духи ветра превращаются в воющий смерч, кружась вокруг жреца и поднимая его над землей, они опустошают все в пределах досягаемости; выкорчевывают деревья, разрушают здания и сокрушают врагов.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки вы можете совершить <strong>проверку Теологии с ЦЧ 5 (Воздух)</strong>, выбирая целью каждого персонажа на дистанции 2&ndash;4.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы вызываете ураган, который поражает всех персонажей в радиусе действия. В конце каждого вашего хода каждая цель в пределах досягаемости должна пройти <strong>защитную проверку Физической Подготовки с ЦЧ 4 (Земля 5, Огонь 2)</strong>, или получить сверхъестественный урон, равный вашему Кольцу Воздуха, и получить состояние Дезориентации. Ураган сохраняется в течение количества раундов, равного вашему Кольцу Воздуха, и может разрушать объекты или строения по усмотрению вашего Ведущего.</p>
<p><strong>Воздух Y:</strong> В качестве действия, вы можете в любой момент остановить ураган.</p>
<p><strong>Воздух Y+:</strong> Если вы преуспели, каждая цель, провалившая проверку Физической подготовки в конце этого хода, отбрасывается от вас на расстояние, равное Y, потраченным таким образом. После приземления каждая цель страдает от негативных эффектов падения с высоты диапазонов дистанции, на которые она переместилась (см. <strong>Падение</strong> на стр. 269).</p>
<p><strong>Воздух Y Y:</strong> Находясь внутри урагана, вы можете летать, двигаться вертикально и игнорировать влияние местности.</p>
    `,
  },
  Yari_Vozduha: {
    title: "Яри Воздуха",
    rank: 1,
    key: "Yari_Vozduha",
    description: `
<p style="text-align: center;"><em>Жезл Яри Ветра (Алхимия), Копье Суйдзина (Фортунист), Алебарда Джинна (Иноземное) </em></p>
<p><em>Сюгэндзя принимает стойку копьеносца, и в его руке возникает вихрящаяся, стремительная масса. Она почти ничего не весит, но поражает с силой удара грома.</em></p>
<p><strong>Активация:</strong> В качестве действия Поддержки вы можете совершить <strong>проверку Теологии с ЦЧ 1 (Воздух)</strong>, чтобы призвать копье, сделанное из вихря ветра, в вашу руку.</p>
<p><strong>Эффекты:</strong> Если вы преуспели, вы призываете и готовите копье (см. <strong>Оружие</strong>, стр. 230), сделанное из ветра, видимое только тонким контуром. Оно имеет свойство Потайное. Когда вы совершаете проверку действия Атаки или Поддержки с помощью невидимого копья, во время <strong>Шага 5: Выберите оставленные кости</strong> добавьте с выпавшей Y к результату броска. Копье сохраняется до конца хода, в котором оно покидает ваш хват, или до конца столкновения, после чего оно рассеивается в ветре.&nbsp;</p>
<p><strong>Воздух Y:</strong> Вызываемое вами оружие может быть любым оружием ближнего или дальнего боя вместо копья.</p>
<p><strong>Воздух Y:</strong> После выполнения этого действия вы можете немедленно выполнить действие Охраны, используя вызванное вами оружие.</p>
<p><strong>Воздух Y Y:</strong> Вы можете призвать пару видов оружия вместо одного.</p>
    `,
  },
};

export const _appealAir = injector(obj, (original) => ({
  group: groups.appeal,
  subgroup: groups.appealAir,
  description: replaceCharacter(original.description, injectImages),
}));
