import { injector } from "@/helpers/injector";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { replaceCharacter } from "@/helpers/replaceCharacter";

const obj = {
  air: {
    title: "Воздух",
    key: "air",
    description: `
<p>Кольцо Воздуха отражает грациозную, хитрую и точную личность. Этот подход тонкий или полон нюансов, а персонаж двигается слишком проворно или
говорит слишком уклончиво, чтобы не дать себя
остановить. Персонаж с высоким рангом Кольца
Воздуха красноречив, физически и социально ловок
и проницателен.  В зависимости от задачи, персонаж может использовать подход Воздуха (названия
подходов выделены в следующем разделе <strong>жирным</strong>
шрифтом) следующим образом:</p>
<ul>
  <li>В ремесле подход Воздуха может позволить
персонажу <strong>усовершенствовать</strong> предмет,
сделать ещё изящнее, отточить детали или
избавить от лишнего.</li>
  <li>При исследовании и обучении подход Воздуха может помочь персонажу <strong>анализировать</strong>
информацию, чтобы он мог подмечать и
понимать детали, обнаруживать нюансы и
разгадывать долгоиграющие последствия и
скрытые значения.</li>
  <li>При общении подход Воздуха позволяет <strong>обхитрить</strong> других, использовать проницательность и сообразительность, чтобы наполнить
слова множеством смыслов или скрыть
правду. Персонаж убеждает других в своем
мнении, обманывает (напрямую или умалчивая правду), говорит двояко и контролирует,
какой информацией обладают другие. Это
не всегда злонамеренно, но всегда манипуляция.</li>
  <li>Во время боя подход Воздуха позволяет
персонажу <strong>сделать ложный выпад</strong>, используя
свою точность и гибкость, играть на недостатках в атаках и обороне противника. Он
фокусируется на поддержании контроля над
телом персонажа на каждом шагу. Вместо
того чтобы пытаться сокрушить оппозицию
лоб в лоб, он ищет возможности преуспеть
или получить преимущество, требующее
точного позиционирования и времени.</li>
  <li>В торговле подход Воздуха позволяет персонажу <strong>жирным</strong>обманывать других, получая что-то
даром. Также персонаж может завышать цены
на товары, которые продает сам, убеждать
других доверять ему ресурсы и воровать.</li>
</ul>
    `,
  },
  earth: {
    title: "Земля",
    key: "earth",
    description: `
<p>Кольцо Земли отражает способность персонажа к
размеренному, тщательному и обоснованному подходу к проблемам. Этот подход осторожен и внимателен, персонаж работает для достижения результатов, избегая потерь и не беря ненужных рисков.
Персонаж с высоким рангом Кольца Земли, вероятно, будет выносливым, психически устойчивым и надежным. В зависимости от задачи, персонаж может
использовать подход Земли (названия подходов выделены в следующем разделе <strong>жирным</strong> шрифтом)
следующим образом:
</p>
<ul>
  <li>В ремесле подход Земли позволяет персонажу <strong>восстанавливать</strong> поврежденные предметы. Он показывает склонность персонажа
к ремонту и выполнению технического обслуживания. Он также охватывает смежные
задачи, такие как архивирование и хранение.</li>
  <li>При исследовании и обучении, подход Земли позволяет персонажу <strong>вспоминать</strong> информацию. В этом подходе не полагаются на интуицию или запутанные логические цепочки,
но он незаменим для аккумулирования известных факторов и фактов, на которых можно строить выводы.</li>
  <li>При общении подход Земли помогает <strong>аргументировать</strong> в диалоге с другими людьми,
призывая их мыслить рационально, откладывать в сторону свои эмоции, помнить об
обязанностях и ответственности. Он также
используется для наставления, поддержания подчиненных в порядке и поддержания
порядка.</li>
  <li>Во время боя подход Земли позволяет персонажу <strong>выдерживать</strong> атаки до тех пор, пока
не наступит идеальный момент для нанесения ответного удара. Любая задача может
быть выполнена с достаточной степенью
упорства. Земной подход в бою осторожен,
медлителен, чтобы избежать ловушек или
истощения.</li>
  <li>В торговле подход Земли позволяет персонажу <strong>производить</strong> то, что ему нужно, с помощью физического труда. Он также помогает
персонажу собирать урожай, ресурсы окружающей среды, создавать запасы, безопасно
хранить и распределять товары.</li>
</ul>
    `,
  },
  fire: {
    title: "Огонь",
    key: "fire",
    description: `
<p>Кольцо Огня отражает свирепую, непосредственную и изобретательную
личность. Этот подход взрывоопасен и
интенсивен, персонаж пытается добиться
результатов независимо от того, чего это будет стоить ему или другим. Персонаж с высоким
рангом Кольца Огня, скорее всего, будет страстным, любопытным, физически быстрым, иногда резким, быстро обучающимся. В зависимости от задачи он может использовать подход Огня (названия
подходов выделены в следующем разделе <strong>жирным</strong>
шрифтом) следующим образом:</p>
<ul>
  <li>В ремесле подход Огня позволяет <strong>изобретать</strong> новые вещи, рисуя и создавая инновационные произведения из просто сырья.</li>
  <li>При исследовании и обучении, подход Огня
позволяет персонажу <strong>теоретизировать</strong> на
тему, творчески и энергично подходя к проблеме, в поисках решений, которые никто
прежде не рассматривал. Он позволяет
персонажу экстраполировать на основании
текущей информации и предполагаемого будущего, свести разрозненные факты к одному
знаменателю и определить нестыковки в споре, плане, идее.</li>
  <li>При общении подход Огня позволяет персонажу <strong>подстрекать</strong> других, используя их эмоции и желания, а не логику. Он также может
быть использован для того, чтобы побудить
других действовать в соответствии с этими
эмоциями и желаниями, несмотря на очевидные ловушки или оправданные страхи.</li>
  <li>Во время боя подход Огня основывается на
всплеске силы, скорости или ловкости, чтобы
<strong>преодолеть</strong> вызов одним махом. Такая тактика представляет собой агрессивную, ничем
не сдерживаемую демонстрацию силы, которая сокрушает оборону и пугает очевидцев.
Подход Огня использует прилив адреналина
в битве для атаки, для бегства, для движений
в боевых искусствах или боевых криках берсеркеров Мацу</li>
  <li>В торговле подход Огня отражает <strong>изобретательность</strong> персонажа, он может разрабатывать новые технологии и методы, создавать
новые продукты и услуги и получать ресурсы
другими способами.</li>
</ul>
    `,
  },
  water: {
    title: "Вода",
    key: "water",
    description: `
<p>Кольцо Воды отражает способность к адаптации, сильную и проницательную личность. Подход опирается на
баланс, с ним работают над
достижением результатов, без
перегрузок и недоработок. Персонаж с высоким значением Кольца
Воды от природы приветлив, физически гибок, наблюдателен и добродушен. В зависимости от задачи персонаж может
использовать подход Воды (названия подходов выделены в следующем разделе <strong>жирным</strong>
шрифтом) следующим образом:</p>
<ul>
  <li>В ремесле подход Воды помогает персонажу
<strong>адаптировать</strong> предмет, или заставить функционировать по-новому, преобразуя. Переводя произведения литературы и искусства
на другие языки или донося до масс людей,
или разбивая на составные части, чтобы они
служили подспорьем для чего-то нового.</li>
  <li>В изучении подход Воды позволяет персонажу <strong>исследовать</strong> окружение, предоставляя информацию о нём и детальные обстоятельства
происходящего. Подход можно использовать
для определения вещей в конкретной области знаний, выявления общих тенденций и
течений или выяснения того, как все работает
в практическом смысле.</li>
  <li>При общении подход Воды помогает персонажу <strong>очаровывать</strong> других, устанавливая с
ними взаимопонимание. Это позволяет персонажу внушать желания и эмоции, раскрывать тайные желания других и завоевывать
симпатии людей.</li>
  <li>Во время боя подход Воды опирается на постоянное <strong>изменение</strong>, чтобы обстоятельства
и окружение работали на них. Он ищет путь
наименьшего сопротивления для достижения наибольшей эффективности. Те, кто
использует подход Воды в бою, стремятся
перенаправить поступающую энергию, а не
расходовать свою собственную.</li>
  <li>В торговле подход Воды позволяет персонажу <strong>обмениваться</strong> ресурсами или трудом. Это
помогает персонажу приобретать предметы
и услуги эффективно и по низкой цене.</li>
</ul>
    `,
  },
  void: {
    title: "Пустота",
    key: "void",
    description: `
<p>Кольцо Пустоты отражает сосредоточенную, непоколебимую личность; оно также может представлять «состояние потока». Избавившись от страданий, присущих эгоистичным желаниям, самурай
может преодолеть земные ограничения. Это просвещенный подход, принимающий природу всех
Элементов, но не позволяющий ни одному Элементу доминировать. Персонаж с высоким значением Кольца Пустоты, скорее всего, будет духовно
чувствительным, мудрым и интроспективным. В
зависимости от задачи персонажи могут использовать подход Пустоты (названия подходов выделены
в следующем разделе <strong>жирным</strong> шрифтом) следующим образом:</p>
<ul>
  <li>В ремесле подход Пустоты позволяет персонажу <strong>настроиться</strong> на созидание, понять цель
предмета, узнать, зачем предмет появился в
этом месте, и ощутить сверхъестественные
качества предмета, если они у него есть.</li>
  <li>При исследовании подход Пустоты позволяет персонажу <strong>ощущать</strong> нарушения в своем
окружении, которые были бы незаметны для
большинства. Это - «шестое чувство» персонажа, дающее ему догадки о сверхъестественных явлениях и даже будущих событиях.</li>
  <li>При общении подход Пустоты позволяет
персонажу <strong>просвещать</strong> других, бросая вызов
их основным убеждениям, заставляющая их
пересматривать свои решения и действия.
Подход можно использовать, чтобы заставить
пересмотреть свои желания или освободиться от сильных эмоциональных состояний или
мистических манипуляций.</li>
  <li>Во время боя подход Пустоты позволяет
персонажу <strong>жертвовать</strong> своей защитой, безопасностью или даже намеренно причинять
физический вред для достижения целей. Персонаж движется инстинктивно, в гармонии с
ритмом космоса. Не руководствуясь никакими сознательными мыслями, он делает то,
что необходимо для успеха, чего бы это ни
стоило.</li>
  <li>В обмене подход Пустоты позволяет персонажу <strong>существовать</strong>, живя в гармонии со своим
окружением и находя способы извлечь максимальную выгоду из очень малого, не нарушая своего окружения.</li>
</ul>
    `,
  },
};

export const _rings = injector(obj, (original) => ({
  group: groups.rings,
  description: replaceCharacter(original.description, injectImages),
}));

export const _ringSelect = {
  title: "к двум разным Кольцам",
  key: "select",
};
