import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { skills } from "@/mockData/routeData/skills";
import { _bushido } from "@/mockData/routeData/bushido/_bushido";
import { injector } from "@/helpers/injector";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { replaceCharacter } from "@/helpers/replaceCharacter";

const obj = {
  CrabClan: {
    title: "Клан Краба",
    key: "CrabClan",
    ringIncrease: [_rings.earth],
    skillIncrease: [skills.Fizicheskaya_podgotovka],
    startStatus: 30,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>На восточной границе Рокугана находится мрачное
чудо - Стена Кайю, выглядящая, как большой сморщенный шрам. Её сланцево-серые блоки образуют
сооружение десяти метров в толщину и тридцати
метров в высоту. На юге лежат Теневые Земли, владения проклятых армий Дзигоку, а к северу расположены земли Клана Краба - создателя и защитника
Стены</p>
<p>Люди из Клана Краба известны как стражи и воины - победители монстров и защитники Империи.
Даже те, кто не берет в руки оружие, вносят вклад в
войну своими умами и словами, обеспечивая ключевые поставки для Клана, образовывая союзы для
защиты Стены или создавая новые технологии, чтобы повергнуть бесконечные орды Теневых Земель.
Однако, задача Клана Краба ложится тяжким грузом
на последователей Ками Хида. Они известны своей угрюмостью, боевым опытом и реалистичным
взглядом на мир. Воинская слава - жалкая награда
за ежедневные сражения с неумолимой силой Теневых Земель, и даже кажется проклятием. Тем не
менее, эти люди находят способы отдыхать и самовыражаться, наслаждаясь маленькими радостями
жизни.</p>
    `,
    descriptionCulture: `
<p>По сравнению с
остальными в Рокугане,
члены клана Краба более
шумные, прямолинейные
в общении и стремящиеся к прагматичным
решениям. Слабость
индивидуума - это слабость всей группы, одна
ошибка может привести
к катастрофе. В конце
концов, можно ли ожидать честного сражения
с гоблинами, демонами и
другими монстрами?</p>
    `,
    descriptionBushido: `
<p>Храбрость - величайшая добродетель на
землях Краба, ведь Ками Хида возложил
серьезную задачу на плечи своих потомков.
Крабы охраняют самую опасную границу
Изумрудной Империи, защищая ее от ужасающих орд Фу Лэнга. Последствия неудачи будут очевидными и ужасными.</p>
<p>Грубые и воинственные, Крабы никогда
не отличались изящным поведением, которое другие кланы требуют от своих последователей; этикет для Крабов имеет размытое понятие</p>
    `,
  },
  CraneClan: {
    title: "Клан Журавля",
    key: "CraneClan",
    ringIncrease: [_rings.air],
    skillIncrease: [skills.Kultura],
    startStatus: 35,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>На рассвете Империи, после того, как Ками пали с
Небес, они обнаружили себя в мире смертных, полном войн и жестокости. Ками Додзи - сестра Хантея,
первого Императора - преисполнилась решимости
принести порядок в эти варварские земли. Воплощение утонченности и изящества, Додзи отправилась к земным народам, успокаивая их, как ясная погода успокаивает бушующее море. Любой Журавль
с радостью расскажет о том, как она научила людей
письму, чтобы они могли запечатлевать свои достижения, политике, чтобы управлять своими землями,
экономике и торговому делу, чтобы управлять своим богатством, искусству и культуре, чтобы придать
своей жизни смысл. Те, кого ее учение затронуло
больше всего, стали её преданными последователями, первыми самураями Клана Журавля. С тех пор,
Журавли стали поэтами Империи, искусными кузнецами и фехтовальщиками. В каждом аспекте своей
жизни Журавли стремятся к мастерству во всём, к
идеалу, которому другие кланы могут лишь подражать.</p>
<p>Клан Журавля представляет собой вершину
утонченности в Рокугане и его члены известны своим изяществом и мастерством в социальных обычаях. Люди
ожидают от них красноречия,
вежливости и деликатности в
высшей мере.</p>
    `,
    descriptionCulture: `
<p>Политическое и культурное богатство Клана
Журавля неотделимы.
Как результат, утонченность, грация и чуткость
являются не просто
определяющими
особенностями Клана
Журавля, но главным
его оружием. Те, кто
терпит неудачу в достижении совершенства,
канут в безвестность
и молчаливый позор
невысказанной критики</p>
    `,
    descriptionBushido: `
<p>Учтивость крайне важна, так как политическая мощь клана основана на идее, что каждый знает свое место - и вы тоже.</p>
<p>Хотя многие в Клане Журавля обладают
храбрым сердцем, чрезмерная храбрость
может вести к безрассудству. Голова должна оставаться холодной, и в некоторых случаях от сражений стоит отказаться.</p>
    `,
  },
  DragonClan: {
    title: "Клан Дракона",
    key: "DragonClan",
    ringIncrease: [_rings.fire],
    skillIncrease: [skills.Meditaciya],
    startStatus: 30,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>В Империи, где обычно ценится уважение традиций, Клан Дракона - загадка. Вдохновленные их
таинственным основателем, Ками Тогаси, Драконы
уделяют внимание индивидуальному поиску просветления и мудрости больше, чем их собратья самураи.</p>
<p>За века, прошедшие с момента как Ками сошли
на землю, последователи Тогаси заслужили определенную репутацию за странное поведение. Изолированные северными горами, Драконы участвуют в
политике не так активно, как другие кланы - и когда они вмешиваются, причины остаются загадкой.
Секрет Драконов в том, что они руководствуются
провидением их основателя, но даже они не всегда
понимают, что Тогаси узрел в своих видениях.</p>
<p>Последователи Тогаси известны своими эзотерическими практиками, природной любознательностью и подлинной традицией пренебрежения
традициями - по крайней мере, в глазах других
кланов. Они кажутся проницательными и скромными, но также непредсказуемыми и даже опасными
индивидуалистами. Они смотрят на проблемы под
необычным углом и находят решения, о которых
другие даже не задумываются.</p>
    `,
    descriptionCulture: `
<p>Цели Клана Дракона
очень разные, даже
среди членов одних школ
и традиций. Однако,
они объединены общей
философией - улучшение
Империи через личное
самосовершенствование.
Несмотря на выраженный индивидуализм
самураев Клана Дракона,
они едины в своей задаче
следить за Империей и
записывать ее историю —
что иногда предполагает
спуск со своих уединенных гор на севере, чтобы
прочувствовать всё
лично.
</p>
    `,
    descriptionBushido: `
<p>Искренность - согласование мыслей и поступков с намерениями - величайшая добродетель в Клане Дракона. Таким образом
самурай остается честным с самим собой,
даже если это ведет к поражению.</p>
<p>Члены Клана Дракона воспринимают
свои обязанности серьезно, хотя их определение долга и верности немного отличается от других самураев. Для Дракона, беспрекословность - это вовсе не верность, и
главы Клана Дракона очень терпимо относятся к критике и даже ценят её, в то время
как остальные могут увидеть в этом грубое
нарушение субординации.</p>
    `,
  },
  LionClan: {
    title: "Клан Льва",
    key: "LionClan",
    ringIncrease: [_rings.water],
    skillIncrease: [skills.Taktika],
    startStatus: 35,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>Каждый самурай, живущий в Рокугане, измеряет храбрость, честь и долг по стандарту, заданному Кланом
Льва. Армия Клана Льва непревзойденна, более
умелых стратегов и столь многочисленных войск не
сыскать во всем Рокугане. Великое военное наследие дает Клану Льва статус Правой Руки Императора. Они защищают Императора, служат стражами и
действующей армией. </p>
<p>В свете этого, страх ничего не значит для самурая
Клана Льва. Смертельная угроза лишь ободряет и
поддерживает их храбрость, потому что нет более
славного конца, чем в почетном бою. Будучи ветеранами бесчисленных войн, Львы знают: тот, кто атакует первым - побеждает. Прежде всего, они живут и
умирают за Императора и Рокуган.</p>
<p>Самураи Клана Льва - самые узнаваемые солдаты
во всей Изумрудной Империи - знамениты свирепостью, верностью и храбростью. От них ожидают
воинственности и агрессивности, забывая, что Ками
Акодо был также мастером тактики и стратегии, способным учиться на своих ошибках и адаптировать
новые стратегемы на поле боя.</p>
    `,
    descriptionCulture: `
<p>Клан Льва - это
воплощение войны,
выкованное Ками Акодо, чтобы сокрушить
врагов Империи и
обеспечить выполнение
воли Хантея. Культура
Клана Льва живет и
дышит военными достижениями и славой.
От потомков ожидают,
что они встретят силу
- силой, а смерть - с
улыбкой. Этот нелёгкий
путь не для всех, но он
особенно труден для
обладателей чувствительной натуры. Даже
члены Клана Льва, не
являющиеся воинами,
расписывают свои
достижения, используя
боевые термины,
возводящие воинское
дело в ранг высшего из
искусств.</p>
    `,
    descriptionBushido: `
<p>Честь, по мнению Клана Льва, занимает
центральное место в Бусидо, особенно в
качестве воинской добродетели. Самураи
Клана Льва учатся строго судить себя и свои
действия, ведь без чести остальные добродетели не будут значит ничего.</p>
<p>Этот акцент на Чести характеризует отношение клана к Состраданию, поскольку
только те, кто ведет себя по Чести, достойны благосклонности Клана Льва.</p>
    `,
  },
  PhoenixClan: {
    title: "Клан Феникса",
    key: "PhoenixClan",
    ringIncrease: [_rings.void],
    skillIncrease: [skills.Teologiya],
    startStatus: 30,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>Феникс - символ противоречия: взрывная сила и
великая сдержанность, большой интеллект и глубокое смирение, благородное самопожертвование и
величественное возрождение. Это переплетение
добродетелей освещает путь самого мистического
Великого Клана, хранителей Дао Синсея и смотрителей души Империи</p>
<p>Как аромат благовоний незаметно разносится
по всем углам святилища, так и Царства Духов невидимо пересекаются с Царством Смертных. Феникс
выступает посредником между мирами, взывая к
душе этих земель. Горы обваливаются по их тихим
просьбам, пересохшие реки снова наполняются
водой, болезни изгоняются, беспокойные призраки возвращаются в небытие и урожай созревает на
ранее бесплодных пустошах. Тем не менее, Феникс
понимает что даже чистейшие намерения могут
привести к разрушительным последствиям, если
баланс элементов нарушится. Хотя другие считают
Фениксов слишком нерешительными в своих мольбах к Ками, лишь немногие достаточно безрассудны, чтобы проверить преданность Феникса гармонии и миру.</p>
<p>Ками Сиба и жрец Исава были очень разными
лидерами, один скромный, другой горделивый,
один спокойный и мудрый, другой яростный и сияющий. Люди ожидают, что члены Клан Феникса должны быть спокойными, вдумчивым и образованным,
но также страстными и иногда даже высокомерными из-за обширных знаний, которыми обладает их
клан. И Сиба, и Исава были глубоко духовными; эта
связь определяет Клан Феникса с ранних дней и
люди до сих пор ожидают, что члены Клана Феникса
будут больше озабочены космическими проблемами, нежели земными.</p>
    `,
    descriptionCulture: `
<p>Клан Феникса ценит
баланс и Дао Синсея
намного больше других
кланов, ища гармонию
между Земным Царством
и Царством Духов, так же
как и гармонию внутри
себя. Фениксы знают, что
каждый шаг посылает
рябь через весь мир, так
что нужно ступать легко и
с миром в сердце, чтобы
их действия не посеяли
диссонанс или даже хаос.
Однако такая сдержанность часто рассматривается остальными
кланами как трусость или
пассивность.</p>
    `,
    descriptionBushido: `
<p>Праведность движет самураями Клана Феникса в их занятиях, и они готовы пожертвовать собой ради правого дела. Они знают,
что когда самураи несправедливо управляют своими землями, Небеса сами выразят
свое неудовольствие.</p>
<p>В то же время некоторые истины не
должны быть явлены миру, и некоторые
тайны не предназначены даже для самураев других кланов. Клан Феникса проявляет избирательный подход к Искренности,
твердо убежденный, что он лучше всего
подготовлен, чтобы владеть определенными знаниями и защищать их.</p>
    `,
  },
  ScorpionClan: {
    title: "Клан Скорпиона",
    key: "ScorpionClan",
    ringIncrease: [_rings.air],
    skillIncrease: [skills.Zhulnichestvo],
    startStatus: 35,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>Шестью ужасными словами Ками Баюси наставлял
своих последователей в новообразованном Клане
Скорпиона на темный и опасный путь. Враги маячат снаружи границ Рокугана, но они так же таятся и
внутри. Баюси поклялся защитить Империю любыми
средствами. Скрытая Рука Императора может дотянуться там, где Кодекс Бусидо ограничивает Левую
и Правую Руки Императора - придворных Журавля
и могучие легионы Льва. Чтобы сражаться с лжецами, ворами и предателями в рядах Великих Кланов,
последователи Баюси должны лгать, воровать и предавать в ответ. Оружием Скорпиона стали шантаж,
отравления и саботаж. Скорпионы замарали свои
руки, чтобы руки других оставались чисты.</p>
<p>И всё же, несмотря на - а может и из-за - грозной
репутации клана, не найдется никого более верного,
чем Скорпионы. В клане обманщиков и манипуляторов, доверие - это заработанное тяжелым трудом сокровище, которое нужно беречь и хранить. За предательством следует молниеносное возмездие, души
вероломных оказываются навеки связаны в ужасном
забвении, в месте, известном как Роща Предателей.
Такая яростная верность это слабое утешение, учитывая опасную, но жизненно важную роль, которую
Скорпионы играли в Империи с момента, когда их
Ками произнес свои роковые слова: “Я буду твоим
злодеем, Хантей.”</p>
<p>Наследники Баюси знамениты коварным мастерством в интригах, но также и потенциальными
выгодами от партнерства с ними - ведь, не поощряя достойно союзников, они никогда не смогли
бы сохранить свое положение великих интриганов
Империи. От Скорпионов ожидают в равной
степени обольстительности и коварства - и преданности только
Императору.</p>
    `,
    descriptionCulture: `
<p>Клан Скорпиона - это
группа, объединенная
серьезными целями: сохранять жизнь - убивая,
и позволять другим
воплощать в жизнь
идеалы чести - запятнав
себя бесчестными поступками. Большинство
Скорпионов ставят на
свою человечность,
как на тот идеал, за
который они могут держаться, или на личные
связи,что удерживают
их от бесчестия. В
то время как другие
полностью исчезают
в своих масках, действительно становясь
злодеями, какими их и
считают.</p>
    `,
    descriptionBushido: `
<p>Долг и Верность - основные принципы Клана Скорпиона. Члены клана должны быть
готовы сделать всё что угодно и пожертвовать всем чем угодно на службе Империи.</p>
<p>Честь и Праведность отходят на второй
план для большинства Скорпионов. Хотя
это остаются важной частью бусидо, зацикленность на этих вещах сделала бы выполнение многих жизненно важных заданий
невозможным.</p>
    `,
  },
  UnicornClan: {
    title: "Клан Единорога",
    key: "UnicornClan",
    ringIncrease: [_rings.water],
    skillIncrease: [skills.Vyzhivanie],
    startStatus: 30,
    insignificantBushido: _bushido.Compassion,
    importantBushido: _bushido.Compassion,
    descriptionAbout: `
<p>Тысячу лет назад Клан Ки-Рин покинул Рокуган, чтобы найти врагов, прячущихся за пределами Изумрудной Империи. Их путешествие было трудным
и они обнаружили множество странных и могущественных угроз. Клан обучался, побеждая каждого врага, меняя стиль боя, магические практики и
даже философию. Чтобы выжить, он был вынужден
адаптироваться и превозмогать. После восьми веков странствий, Клан Ветра возвратился в Империю
как Клан Единорога. Они были одеты в меха, говорили на иностранных языках и носили странное
оружие. Хотя они все еще почитают Ками Синдзё,
они далеко отошли от традиций и обычаев Изумрудной Империи.</p>
<p>Потомки Синдзё известны как умелые всадники, стрелки, посыльные, и многие из них владеют
чужеземными боевыми техниками, школами и философией. Члены Клана Единорога обладают репутацией мирских и общительных людей, но немного грубых в вежливом обществе рокуганцев,
учитывая, что многие члены клана проводят
большую часть своей жизни в диких землях
Единорогов и за их пределами.</p>
    `,
    descriptionCulture: `
<p>Клан Единорога ценит
новизну и гибкость
традиций так, как это не
делают другие кланы.
Члены клана Единорога, как правило, очень
восприимчивы к новым
идеям и культурным
элементам, не опасаясь
потери или разрушения
своих собственных,
поскольку сохраняли
идентичность на протяжении долгих столетий
своих странствий. Тем не
менее, Единороги очень
амбициозны, и недостаточно энергичные члены
клана часто вытесняются
более агрессивными.</p>
    `,
    descriptionBushido: `
<p>Сострадание - самый значительный принцип бусидо для Клана Единорога, ибо взаимопонимание и сотрудничество были
ключом к выживанию Клана во время его
долгого путешествия по большому миру. В
этом путешествии члены Клана Единорога
встретили множество людей с самыми разными верованиями, культурами и ценностями, и они намного больше привыкли к сосуществованию со странными чужаками, чем
большинство самураев Великих кланов.</p>
<p>У Клана Единорога было несколько столетий, чтобы прижиться в Изумрудной Империи, в которую он вернулся. Но обычаи и
культура, которые они переняли во время
своих путешествий, остаются важной силой
внутри клана. Эти обычаи часто вступают
в противоречие с понятием вежливости
рокуганцев, и пренебрежение манерами
Единорогом - спорный момент и явное отличие клана Синдзё от кланов ее братьев и
сестер.</p>
    `,
  },
};

export const _clans = injector(obj, (original) => {
  const descriptionAbout = replaceCharacter(
    original.descriptionAbout,
    injectImages
  );
  const descriptionCulture = replaceCharacter(
    original.descriptionCulture,
    injectImages
  );
  const descriptionBushido = replaceCharacter(
    original.descriptionBushido,
    injectImages
  );

  return {
    group: groups.clans,
    descriptionAbout,
    descriptionCulture,
    descriptionBushido,
    description: `
${descriptionAbout}
<p><strong>Культура ${original.title}</strong></p>
${descriptionCulture}
<p><strong>Как видит бусидо ваш клан?</strong></p>
${descriptionBushido}
  `,
  };
});