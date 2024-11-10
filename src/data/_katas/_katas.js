import {kataGroups, techGroups} from '@/data/groups';
import {replaceCharacter} from '@/data/replaceCharacter';

const general = [
    {
        name: 'Битва в разуме',
        rank: 3,
        description: `
<p><em>Когда два мастера любого боевого искусства сходятся перед дуэлью, каждый стремится предсказать угол атаки и стратегию другого, а также способы, которыми противник может контратаковать.</em></p>
<p><strong>Активация</strong>: Когда вы совершаете проверку Инициативы в дуэли, используя свое Кольцо Пустоты, вы можете потратить Y следующим образом:</p>
<p><strong>Пустота Y:</strong> Вы называете два кольца, затем ваш противник должен назвать одно из этих двух колец. Когда ваш противник выбирает свою стойку во время первого хода дуэли, он не может выбрать кольцо, которое он назвал своей стойкой.&nbsp;</p>
<p><strong>Пустота Y+:</strong> Выберите категорию техник. Изучите одну из известных техник вашего противника из этой категории (выбранную противником) за каждую потраченную таким образом Y</p>
        `
    },
    {
        name: 'Стиль дыхания ветра',
        rank: 4,
        description: `
<p><em>Быстрый удар в солнечное сплетение или горло может заставить цель пошатнуться; опытный буси может перехватить дыхание у своего противника быстрым ударом даже во время выполнения другой атаки.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Воздух), вы можете потратить Y следующим образом:</p>
<p><strong>Воздух Y+:</strong> Одна цель вашего действия должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 3 (Земля 4, Огонь 1)</strong> или получить состояние Дезориентации и усталость, равную недобору успехов. Увеличьте ЦЧ защитной проверки на 1 за Y, потраченную таким образом.</p>
        `
    },
    {
        name: 'Стиль разбивающих волн',
        rank: 4,
        description: `
<p><em>Волна обрушивается на камень, обтачивая его, а оружие буси проходит через плоть противника, оставляя после себя кровавую рану или иную травму, что обязательно замедлит врага, даже если удар не смертелен.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Вода), вы можете потратить Y следующим образом:</p>
<p><strong>Вода Y+:</strong> Одна цель вашего действия должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 3 (Земля 1, Огонь 4)</strong> или получить состояние Кровотечения и усталость, равную недобору успехов. Увеличьте ЦЧ защитной проверки на 1 за Y, потраченную таким образом.</p>
        `
    },
    {
        name: 'Стиль полумесяца',
        rank: 2,
        description: `
<p><em>Нанести удар первым - это ценно, но также ценно и выжить. Чтобы защищаться, не жертвуя нападением, буси должен быть готов быстро нанести ответный удар после блокирования или уклонения. Быстрым движением буси переключается с обороны на то, чтобы обрушить всю свою силу на врага.</em></p>
<p><strong>Активация:</strong> Когда вы выполняете действие Защита (смотри стр. 264), вы можете потратить Y следующим образом:</p>
<p><strong>Y:</strong> После того, как персонаж на дистанции 1-2 выполнит действие Атаки, нацеленное на вас или другого персонажа, которого вы охраняете, вы можете выполнить действие Нападения одним из подготовленных оружий Боевых искусств [Ближний бой или Безоружный бой], нацеленное на этого персонажа (если он находится в пределах дистанции вашего оружия). Этот эффект сохраняется до начала вашего следующего хода или до тех пор, пока вы не выполните Нападение таким образом.</p>
        `
    },
    {
        name: 'Удар багровых листьев',
        rank: 3,
        description: `
<p><em>Взмахнув клинком по неожиданной дуге, буси наносит удар поверх оружия противника, выбивая его из рук, как падающие листья</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки с использованием подготовленного оружия вы можете выполнить <strong>проверку Боевых искусств с ЦЧ 4 (Земля)</strong> с соответствующим навыком для этого оружия, нацелившись на одного персонажа в пределах дистанции оружия.</p>
<p><strong>Эффекты:</strong> При успехе, ваша цель получает физический урон, равный вашему Кольцу Земли, плюс дополнительный урон, равный вашим бонусным успехам. Выберите одно подготовленное оружие вашей цели; цель должна пройти защитную проверку Физической подготовки с ЦЧ 4 (Воздух 2, Вода 5) или потерять контроль над выбранным оружием, которое перемещается на 3 диапазона дистанции в выбранном вами направлении.</p>
<p><strong>Земля Y:</strong> Если вы разоружаете своего противника, вы можете взять под контроль его оружие, а не выбрасывать его.</p>
        `
    },
    {
        name: 'Стиль исчезающего мира',
        rank: 4,
        description: `
<p><em>Не видя ничего, кроме своего врага, буси бросается вперед в шквале ударов, стремясь нанести быстрый удар по глазам, вискам или в другую уязвимую область после его первоначальной атаки. Этот ошеломляющий удар может поразить противника, давая буси шанс закончить битву своей следующей атакой.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Огонь), вы можете потратить Y следующим образом:</p>
<p><strong>Огонь Y+:</strong> Одна цель вашего действия должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 3 (Воздух 4, Вода 1)</strong> или получить состояние Ошеломления и усталость, равную недобору успехов. Увеличьте ЦЧ защитной проверки на 1 за Y, потраченную таким образом.</p>
        `
    },
    {
        name: 'Удар текущей воды',
        rank: 3,
        description: `
<p><em>Опытный воин не ограничен предполагаемой дальностью действия своего оружия и может сокращать или увеличивать расстояние, чтобы компенсировать позиционные недостатки.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Перемещения с использованием подготовленного оружия вы можете выполнить <strong>проверку Боевых искусств с ЦЧ 3 (Вода)</strong>, используя соответствующий навык для этого оружия, нацеливаясь на одного персонажа на дистанции 0-2 (независимо от обычных ограничений дистанции оружия).</p>
<p><strong>Эффекты:</strong> При успехе, цель получает физический урон, равный вашему Кольцу Воды, и получает состояние Кровотечения. Цель должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 4 (Земля 2, Огонь 5)</strong>; если она потерпит неудачу, увеличьте физический урон, на величину базового урона вашего оружия.</p>
<p><strong>Вода Y:</strong> Снимите с себя состояние Ошеломления, Дезориентации, Паралича или Распластанности.</p>
        `
    },
    {
        name: 'Удар пронзающий сердце',
        rank: 3,
        description: `
<p><em>Битва - это искусство убивать, и горе тому воину, который забывает об этом. С рёвом буси бросается вперёд, нанося удары своим оружием, чтобы смертельно пронзить своего врага. Даже если удар не убьет противника, он, вероятно, значительно ослабит его.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Перемещения с использованием подготовленного оружия вы можете выполнить <strong>проверку Боевых искусств с ЦЧ 4 (Огонь)</strong>, используя соответствующий навык для этого оружия, нацеливаясь на одного персонажа в пределах дистанции оружия.</p>
<p><strong>Эффекты:</strong> При успехе, ваша цель получит критическое попадание, серьёзность которого равна смертоносности вашего оружия плюс ваши бонусные успехи. ЦЧ защитной проверки Физической подготовки от критического попадания равно 3 (Воздух 4, Вода 1) вместо обычного ЦЧ.</p>
<p>При провале, вы получаете состояние Дезориентации.</p>
<p><strong>ОгоньY:</strong> Перед разрешением эффекта переместитесь на 1 диапазон дистанции в сторону вашей цели</p>
        `
    },
    {
        name: 'Стиль железа в горах',
        rank: 4,
        description: `
<p><em>Буси наносит удары с сокрушительной силой, ломая ноги врага и сбивая его назем или нарушая его стойку хорошо поставленным ударом ноги.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Земля), вы можете потратить Y следующим образом:</p>
<p><strong>Земля Y+:</strong> Одна цель вашего действия должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 3 (Воздух 1, Вода 4)</strong> или получить состояние Распластанности и усталость, равную недобору успехов. Увеличьте ЦЧ защитной проверки на 1 за Y, потраченную таким образом.</p>
        `
    },
    {
        name: 'Захват Повелителя Хида (Краб)',
        rank: 2,
        description: `
<p><em>Ками Хида, покровитель Клана Краба, был легендарным истребителем монстров. Он обезглавил огромного демона, который когда-то угрожал дворцу из розового мрамора, и вырвал один череп у двуглавого Кабуто но Они и раздавил им другую голову. Однако Хида не был грубым мясником: убивая монстров, он часто прибегал к хитростям, используя их слабости. Воины клана Краба обучаются схожим приёмам. Они обращают огромный вес своих врагов против них самих, прижимая или стратегически повреждая определенные части тела.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки вы можете выполнить <strong>проверку Физической подготовки (Пустота)</strong>, нацелившись на одно существо с фигурой 3 или больше на дистанции 0-1. ЦЧ проверки равно фигуре цели (минимум 1)</p>
<p><strong>Эффекты:</strong> При успехе, ваша цель получает состояние Обездвиженный.</p>
<p>При успехе, вы оказываете помощь (смотри стр. 26) всем персонажам, которые совершают действия Атаки против вашей цели. Этот эффект сохраняется до начала вашего следующего хода</p>
<p><strong>Пустота Y:</strong> Ваша цель должна пройти защитную проверку Физической подготовки или получить физический урон, равный её фигуре, игнорируя сопротивление, а также получить состояние Распластанности. ЦЧ этой проверки равно вашему рангу школы.</p>
        `
    },
    {
        name: 'Доблесть Повелителя Сибы (Феникс)',
        rank: 2,
        description: `
<p><em>Однажды, в Теневых Землях, Ками Сиба стоял один среди огромной толпы грязных её обитателей, последний из Семи Громов после их победы над Фу Ленгом. Обнажив легендарный меч Офусикай, Сиба прорубил себе путь сквозь толпу к Первому Они. Легенды гласят, что их клинки сверкали в течение ста дней, разбивая горы вокруг них и рассекая огромные трещины на земле. В конце концов, каждый убил другого, но Сиба пал, не нарушив свою клятву защищать нерушимое.</em></p>
<p><strong>Активация:</strong> Один раз за игровую встречу, в качестве действия Поддержки с использованием одного подготовленного оружия, вы можете выполнить <strong>проверку Тактики с ЦЧ 2 (Пустота)</strong>, нацеленную на любое количество дружественных персонажей на дистанции вашего оружия.</p>
<p><strong>Эффекты:</strong> При успехе, другие не смогут выбрать этих персонажей в качестве целей своих действий Атаки или Козней, если они могут выбрать вас вместо этого. Если действие имеет несколько целей, вы должны быть первой выбранной целью. Этот эффект сохраняется в течение нескольких раундов, равных вашему рангу школы.</p>
<p><strong>Пустота Y:</strong> При успехе, увеличьте ЦЧ проверок Атаки и Козней, нацеленных на вас, на 1. Этот эффект сохраняется до конца вашего следующего хода.</p>
        `
    },
    {
        name: 'Парящий порез',
        rank: 1,
        description: `
<p><em>Совершая резкий замах рукой, буси бросает свое оружие в противника, надеясь застать его врасплох или открыть брешь обороне.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки, используя одно подготовленное оружие с хватом одной рукой, вы можете выполнить <strong>проверку Боевых искусств с ЦЧ 2</strong> с соответствующим навыком для оружия, нацеливаясь на одного персонажа на дистанции 2-3.</p>
<p><strong>Эффекты:</strong> Вы бросаете свое оружие в цель. При успехе, вы наносите цели физический урон, равный базовому урону оружия, плюс ваши бонусные успехи. Оружие приземляется на дистанции в выбранном вами направлении от цели, если она защищается от урона, или вонзается в нее, если она получает критическое попадание. При провале, оружие пролетает количество диапазонов дистанции, равное максимальной дистанции техники в направлении цели.</p>
<p><strong>Y+:</strong> Увеличьте дистанцию этой техники на 1 за каждую Y, потраченную таким образом.</p>
<p><strong>Y:</strong> Уменьшите ЦЧ следующего действия Атаки против этой цели до конца вашего следующего хода на 1.</p>
        `
    },
    {
        name: 'Раскол души',
        rank: 5,
        description: `
<p><em>В то время как буси, как правило, менее подготовлен к борьбе со сверхъестественными угрозами, чем сюгендзя, мастерство в любом искусстве показывает, насколько взаимосвязан весь мир. Воины, глубоко погруженные в тайны меча, могут настроиться на клинки своих предков, чтобы рубить даже тех существ, которые ходят между мирами и чью плоть сталь обычно не берёт.</em></p>
<p><strong>Активация:</strong> В качестве действия Поддержки вы можете выполнить <strong>проверку Медитации с ЦЧ 4 (Пустота)</strong>, чтобы настроить свой клинок на дух ваших почитаемых предков.</p>
<p><strong>Эффекты:</strong> При успехе, выберите одно подготовленное оружие. Оно приобретает Священное качество, и когда вы используете его, чтобы нанести критическое попадание Потустороннему существу, увеличьте его смертоносность на количество ваших бонусных успехов. Этот эффект сохраняется до конца вашего следующего хода.</p>
<p><strong>Пустота Y+:</strong> Этот эффект сохраняется в течение одного дополнительного раунда за каждую Y, потраченную таким образом.</p>
<p><strong>Пустота YY:</strong> Потусторонние существа не могут совершать действия Атаки, нацеленные на вас, до начала вашего следующего хода.</p>
<p><strong>Пустота YY:</strong> Вы можете немедленно совершить действие Нападения, используя свое подготовленное оружие.</p>
        `
    },
    {
        name: 'Устремлённый как Воздух',
        rank: 1,
        description: `
<p><em>Не каждый удар, наносимый воином в бою, предназначен для убийства - даже если все они ведут к этой конечной цели. Опытный боец может определить, когда атака не удастся, и тонко переключить ее на другой вид атаки, призванный прощупать оборону противника или выбить его из защитной позиции. Тщательно выстраивая атаку за атакой, мастер клинка может в конечном итоге сократить количество вариантов для противника, пока не останется ничего, кроме смерти.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Воздух), вы можете потратить Y следующим образом:</p>
<p><strong>Воздух Y+:</strong> Зарезервируйте одну из ваших брошенных костей, плюс одну дополнительную кость за YY, потраченные таким образом. Эти кости становятся удалёнными костями. Совершая проверку с тем же навыком до конца вашего следующего хода, вы можете бросить на одну меньше за каждую зарезервированную и на одну меньше за каждую зарезервированную , а затем добавить зарезервированные кости к своему броску. Эти кости считаются брошенными, но добавляют результат, который был у них при резервировании.</p>
        `
    },
    {
        name: 'Прочный как Земля',
        rank: 1,
        description: `
<p><em>После нанесения удара буси опускается ближе к земле, присаживаясь, чтобы убедиться, что его броня примет на себя основную тяжесть удара, или поднимает оружие в защитное положение, чтобы оно могло отразить урон, не будучи поврежденным</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Земля), вы можете потратить Y следующим образом:</p>
<p><strong>Земля Y+:</strong> Увеличьте своё физическое сопротивление на 1 за каждую Y, потраченную таким образом, до начала вашего следующего хода.</p>
        `
    },
    {
        name: 'Разрушительный как Огонь',
        rank: 1,
        description: `
<p><em>Победа не может быть достигнута только за счет защиты, и только плохой ученик меча забывает, что его самая важная цель проста: уничтожить своего врага. Все остальное отходит на второй план, когда буси яростно наседает на противника, пытаясь заставить его ошибиться или открыть возможность покончить с ним.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Огонь) для действия Атаки, вы можете потратить Y следующим образом:</p>
<p><strong>Огонь Y+:</strong> В следующий раз, когда ваша цель получит критическое попадание, увеличьте его серьезность на 1 за каждую Y, потраченную таким образом. Этот эффект сохраняется до конца вашего следующего хода</p>
        `
    },
    {
        name: 'Совершенный как Пустота',
        rank: 5,
        description: `
<p><em>Будущее - это часть Пустоты, бесконечная в возможностях и непостижимая в глубине. Будущее нельзя изменить, пока оно бесформенно, но в тот момент, когда оно обретает форму, можно всё повернуть иначе. Буси выжидает до последней возможной секунды, позволяя потенциальной энергии своего удара обрести форму только тогда, когда противник уже не сможет ответить</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Пустота), вы можете потратить Y следующими способами:</p>
<p><strong>Пустота Y:</strong> Немедленно переключитесь на другую стойку по вашему выбору.</p>
<p><strong>Пустота Y:</strong> При провале, вы можете совершить другое действие. Это должно быть действие, которое вы еще не выполняли в этот ход. Вы можете активировать эту возможность только один раз за раунд</p>
        `
    },
    {
        name: 'Пробивной как Вода',
        rank: 1,
        description: `
<p><em>Самые лучшие доспехи бесполезны, если воин может обойти их, проскользнув клинком сквозь щели, позволяющие противнику двигаться, или те, которые сам пробил грубой силой. Когда буси наносит удар, он пытается проскользнуть мимо защиты цели, чтобы нанести смертельный удар</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой, Стрельба или Безоружный бой] (Вода) для действия Атаки, вы можете потратить Y следующим образом:</p>
<p><strong>Вода Y+:</strong> Ваша цель снижает свое физическое сопротивление на 1 за каждую Y, потраченную таким образом. Этот эффект сохраняется до конца вашего следующего хода.</p>
        `
    },
    {
        name: 'Тактическая оценка',
        rank: 2,
        description: `
<p><em>Лидерство Акодо и Ложь Баюси сходятся в нескольких вопросах, поскольку оба лидера были в определенной степени практичными. Даже если Акодо, как известно, презирал многие методы Баюси. Как отметила ученый Хида Фуюко в своем откровенном комментарии к Урокам лидерства для командиров на Стене Кайю, самая известная встреча этих двух умов происходит в вопросе подготовки: битвы выигрываются не на поле боя, а в преддверии конфликта. Даже в небольших стычках обычно побеждает тот воин, который лучше знает местность, силу собственных войск и состав войск противника</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку по Инициативе, вы можете потратить Y следующим образом:</p>
<p><strong>Воздух Y:</strong> Выберите врага в конфликте. Изучите одно из его преимуществ (по его выбору) и его физическое или сверхъестественное сопротивление (на ваш выбор).</p>
<p><strong>Земля Y:</strong> Выберите персонажа в конфликте. Он не применяет ни один из своих недостатков к своим проверкам до конца своего первого хода.</p>
<p><strong>Вода Y:</strong> Выберите участок местности в сцене (смотри Местность на стр. 267). До начала вашего первого хода она считается обладающей Заслоняющим качеством для проверок действий Атаки, нацеленных на вас и ваших союзников.</p>
<p><strong>Огонь Y:</strong> Выберите персонажа в конфликте и одно из его преимуществ, которое вы знаете. До конца своего первого хода он применяет это преимущество ко всем своим проверкам.</p>
        `
    },
    {
        name: 'Решимость воина',
        rank: 1,
        description: `
<p><em>Буси делает глубокий вдох и выдох, поднимаясь на ноги. Боль можно победить, пока есть долг, который нужно выполнить. Говорят, честь крепче стали, и самураю предстоит доказать это.</em></p>
<p><strong>Активация:</strong> Один раз за сцену, в качестве действия Поддержки, вы можете потратить 1 очко Пустоты на восстановление.</p>
<p><strong>Эффекты:</strong> Снимите усталость, равную вашему рангу чести.</p>
        `
    },
].map(kata => ({
    ...kata,
    subgroup: kataGroups.general,
}))

const melee = [
    {
        name: 'Стиль извивающейся змеи',
        rank: 2,
        description: `
<p><em>Техники захвата могут быть выполнены с использованием множества различных видов оружия, от кусари-гамы, которой владеют разбойники, до богато украшенных шестов с крючковатыми наконечниками, используемых величайшими мастерами копья клана Феникса.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой] или Боевых искусств [Безоружный бой], используя Хватающее оружие, вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> Выберите одно подготовленное оружие цели; это оружие не может быть использовано для действий Атаки. Этот эффект сохраняется до конца вашего следующего хода.</p>
<p><strong>YY+:</strong> Одна цель вашего действия за Y Y, потраченные таким образом, становится Обездвиженной.</p>
        `
    },
    {
        name: 'Удар иайдзюцу: Перекрёстный клинок',
        rank: 2,
        description: `
<p><em>Буси горизонтально выхватывают оружие из ножен, совершая широкий взмах в зоне досягаемости.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Перемещения, используя одно Бритвенно-острое оружие, вложенное в ножны, вы можете выполнить <strong>проверку Боевых искусств [Ближний бой] с ЦЧ 2</strong>, нацелившись на одного персонажа на дистанции 1-2.</p>
<p><strong>Эффекты:</strong> Вы вытаскиваете и подготавливаете вложенное в ножны оружие одноручным хватом. При успехе, вы наносите цели физический урон, равный смертоносности оружия плюс ваши бонусные успехи.</p>
<p><strong>Y:</strong> Приготовьте еще одно Бритвенно-острое оружие, вложенное в ножны.</p>
        `
    },
    {
        name: 'Удар иайдзюцу: Восходящий клинок',
        rank: 2,
        description: `
<p><em>Буси прижимает ножны к бедру и делает выпад вверх, чтобы поймать наступающего противника, не будучи атакованным.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки, используя одно Бритвенно-острое оружие, вложенное в ножны, вы можете выполнить <strong>проверку Боевых искусств [Ближний бой]</strong>, нацелившись на одного персонажа на дистанции 0-1. ЦЧ этой проверки равно бдительности цели.</p>
<p><strong>Эффекты:</strong> Вы вытаскиваете и подготавливаете вложенное в ножны оружие одноручным хватом.&nbsp;При успехе, вы нанесете цели физический урон, равный смертоносности оружия. Ваша цель не сможет защититься от этого урона, если она Нестабильна.</p>
<p><strong>Y:</strong> Приготовьте еще одно Бритвенно-острое оружие, вложенное в ножны.</p>
        `
    },
    {
        name: 'Стиль железного леса',
        rank: 2,
        description: `
<p><em>Буси, владеющий копьем, может контролировать расстояние между оппонентом, заставляя врага рисковать каждый раз, когда он двигается. Или они протыкают концом копья свободную одежду и открытые части тела противника. Лидерство Акодо ссылается на такую технику, как стиль Железного леса, который превращает длину копья в непреодолимое расстояние.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой], используя копьё, вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> Область на дистанции вашего оружия считается Опасной местностью для одной цели вашего действия за каждую Y, потраченную таким образом. Когда выбранный персонаж пытается приблизиться к вам, он должен выполнить <strong>проверку Физической подготовки с ЦЧ 4 (Воздух 2, Вода 5)</strong>; если он потерпит неудачу, он не сможет продвинуться. Этот эффект сохраняется до начала вашего следующего хода</p>
       `
    },
    {
        name: 'Стиль открытой руки',
        rank: 2,
        description: `
<p><em>Сила приходит не только от скорости. Мастер боевых искусств может применять силу для максимального эффекта, делая даже аккуратные движения разрушительно эффективными блоками и ударами. Имея достаточный опыт, мастер боевых искусств может даже контролировать стойку своего противника</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Безоружный бой], используя Хватающее оружие, вы можете потратить Yследующим образом:</p>
<p><strong>YY+:</strong> Одна цель вашего действия за Y Y, потраченные таким образом, должна переключиться на другую стойку по вашему выбору. Цели с фигурой 3 или выше могут совершить защитную <strong>проверку Физической подготовки с ЦЧ 3</strong> и игнорировать этот эффект в случае успеха.</p>
        `
    },
    {
        name: 'Стиль стремительной лавины',
        rank: 2,
        description: `
<p><em>Применяя этот стиль, буси наносит удары с безрассудством, используя тяжелое вооружение. Благодаря огромному весу оружия и свирепости ударов, даже скользящий удар может причинить серьезный вред, а мощный &ndash; обычно заканчивает сражение</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой] с использованием тупого оружия, вы можете потратить Y следующим образом:</p>
<p><strong>Y:</strong> При успехе с недобором двух или менее успехов, ваша цель получает физический урон, равный вашему рангу в Физической подготовке.</p>
<p><strong>Y:</strong> Если вы преуспеете и ваша цель Распластана, увеличьте наносимый вами урон на величину вашего ранга в Физической подготовке.</p>
        `
    },
    {
        name: 'Стиль вращающихся лезвий',
        rank: 2,
        description: `
<p><em>Самым большим преимуществом боя двумя руками обычно является не удар двумя оружиями одновременно, в основном потому, что это очень трудный подвиг, а то, что воину не нужно жертвовать защитой во время атаки или нападением во время защиты. Вспомогательное оружие опасно даже тогда, когда буси атакует основным, так как он может нанести им удар, пока как основное оружие заблокировано лезвием противника. Любое оружие может принести смерть, и поэтому враг должен всегда следить за обоими.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой] или Боевых искусств [Безоружный бой] для действия Атаки, если у вас есть второе подготовленное оружие, которое вы не использовали для атаки, вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> Вы должны потратить количество Y, равное бдительности вашей цели, чтобы активировать эту технику. Вы используете второе подготовленное оружие против одной цели вашего действия, нанося физический урон, равный его базовому урону. Если эта цель Ошеломлена, увеличьте этот урон на величину вашего ранга в навыке, который вы использовали для проверки</p>
        `
    },
    {
        name: 'Удар грома',
        rank: 3,
        description: `
<p><em>Размахивая своим оружием по широкой дуге, буси наносит удары по врагам, отбрасывая их назад, чтобы освободить место для следующего хода.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки с использованием подготовленного оружия вы можете выполнить <strong>проверку Боевых искусств [Ближний бой или Безоружный бой] с ЦЧ 3 (Воздух)</strong>, используя соответствующий навык для этого оружия, нацеленный на каждого персонажа в пределах дистанции оружия.</p>
<p><strong>Эффекты:</strong> При успехе, каждая цель получает урон, равный базовому урону вашего оружия, и должна пройти <strong>защитную проверку Физической подготовки с ЦЧ 3 (Земля 4, Огонь 1</strong>) или переместиться на 2 диапазона дистанции прямо от вас.</p>
<p><strong>Воздух Y+:</strong> Увеличьте ЦЧ защитных проверок на 1 за каждую Y, потраченную таким образом.</p>
        `
    },
    {
        name: 'Стиль скрытой угрозы',
        rank: 2,
        description: `
<p><em>Убийства и другие тайные тактики не одобряются многими самураями. Однако никто не может отрицать эффективность таких методов. Отвлекая взгляд своего врага от истинной угрозы, буси часто могут склонить чашу весов в бою против сильного врага.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Ближний бой] или Боевых искусств [Безоружный бой] для действия Атаки, используя оружие в одноручном хвате, вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> При успехе, выберите одну неподозревающую или Дезориентированную цель вашего действия. Эта цель получает критическое попадание, серьёзность которого равна смертоносности вашего оружия плюс 1 за каждую Y, потраченную таким образом после первой.</p>
        `
    },
].map(kata => ({
    ...kata,
    subgroup: kataGroups.melee,
}))

const range = [
    {
        name: 'Точность ястреба ',
        rank: 1,
        description: `
<p><em>Хотя предполагается, что большинство буси умеют пользоваться луком, некоторые из них ужасающе точны и способны поражать цели далеко за пределами ожидаемой дистанции поражения</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Стрельба], вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> Увеличьте дистанцию оружия на 1 за каждую Y, потраченную таким образом, до максимальной дистанции 6</p>
        `
    },
    {
        name: 'Стиль проливного града',
        rank: 2,
        description: `
<p><em>Залп стрел на поле боя может быть смертельным, но, что наиболее важно со стратегической точки зрения, он наводит ужас даже на самых стойких ветеранов. Даже если только один из десяти выстрелов попадает в цель, залп пугает противников и заставляет проявлять осторожность.</em></p>
<p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Стрельба], вы можете потратить Y следующим образом:</p>
<p><strong>Y+:</strong> Выберите количество других персонажей на дистанции 0-2 от вашей цели, равное Y потраченным таким образом. Каждый выбранный персонаж получает смятение, равное базовому урону вашего оружия.</p>
        `
    },
    {
        name: 'Пронзить веер',
        rank: 5,
        description: `
<p><em>Хотя убить на расстоянии одной стрелой сложно, это, конечно, можно сделать, и мастера-лучники совершали легендарные подвиги меткости с первых дней существования Рокугана. От знаменитых выстрелов Хантея Гэндзи до стрелы, выпущенной Додзи Хотару, которая сразила Акодо Арасу, смертельные выстрелы часто меняли ход истории Изумрудной империи.</em></p>
<p><strong>Активация:</strong> В качестве действия Атаки и Перемещения с использованием подготовленного оружия дальнего боя вы можете выполнить <strong>проверку Боевых искусств [Стрельба]</strong>, нацеленную на одного персонажа в пределах дистанции вашего оружия. ЦЧ проверки равно бдительности цели плюс дистанция атаки.</p>
<p><strong>Эффекты:</strong> При успехе, цель получает урон, равный удвоенному базовому урону оружия плюс ваши бонусные успехи.</p>
<p><strong>Y:</strong> Если цель становится Недееспособной в результате этого действия, она получает критическое попадание с серьезностью, равной удвоенной смертоносности оружия плюс ваши бонусные успехи.</p>
        `
    },
].map(kata => ({
    ...kata,
    subgroup: kataGroups.range,
}))

export const katas = [
    ...general,
    ...melee,
    ...range,
].map(kata => ({
    ...kata,
    description: replaceCharacter(kata.description),
    group: techGroups.kata
}))