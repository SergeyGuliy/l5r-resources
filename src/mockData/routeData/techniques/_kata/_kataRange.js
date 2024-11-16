import { replaceCharacter } from "@/helpers/replaceCharacter";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { injector } from "@/helpers/injector";

const obj = {
  Tochnost_yastreba_: {
    title: "Точность ястреба ",
    rank: 1,
    description:
      "<p><em>Хотя предполагается, что большинство буси умеют пользоваться луком, некоторые из них ужасающе точны и способны поражать цели далеко за пределами ожидаемой дистанции поражения</em></p><p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Стрельба], вы можете потратить Y следующим образом:</p><p><strong>Y+:</strong> Увеличьте дистанцию оружия на 1 за каждую Y, потраченную таким образом, до максимальной дистанции 6</p>        ",
    key: "Tochnost_yastreba_",
  },
  Stil_prolivnogo_grada: {
    title: "Стиль проливного града",
    rank: 2,
    description:
      "<p><em>Залп стрел на поле боя может быть смертельным, но, что наиболее важно со стратегической точки зрения, он наводит ужас даже на самых стойких ветеранов. Даже если только один из десяти выстрелов попадает в цель, залп пугает противников и заставляет проявлять осторожность.</em></p><p><strong>Активация:</strong> Когда вы совершаете проверку Боевых искусств [Стрельба], вы можете потратить Y следующим образом:</p><p><strong>Y+:</strong> Выберите количество других персонажей на дистанции 0-2 от вашей цели, равное Y потраченным таким образом. Каждый выбранный персонаж получает смятение, равное базовому урону вашего оружия.</p>        ",
    key: "Stil_prolivnogo_grada",
  },
  Pronzit_veer: {
    title: "Пронзить веер",
    rank: 5,
    description:
      "<p><em>Хотя убить на расстоянии одной стрелой сложно, это, конечно, можно сделать, и мастера-лучники совершали легендарные подвиги меткости с первых дней существования Рокугана. От знаменитых выстрелов Хантея Гэндзи до стрелы, выпущенной Додзи Хотару, которая сразила Акодо Арасу, смертельные выстрелы часто меняли ход истории Изумрудной империи.</em></p><p><strong>Активация:</strong> В качестве действия Атаки и Перемещения с использованием подготовленного оружия дальнего боя вы можете выполнить <strong>проверку Боевых искусств [Стрельба]</strong>, нацеленную на одного персонажа в пределах дистанции вашего оружия. ЦЧ проверки равно бдительности цели плюс дистанция атаки.</p><p><strong>Эффекты:</strong> При успехе, цель получает урон, равный удвоенному базовому урону оружия плюс ваши бонусные успехи.</p><p><strong>Y:</strong> Если цель становится Недееспособной в результате этого действия, она получает критическое попадание с серьезностью, равной удвоенной смертоносности оружия плюс ваши бонусные успехи.</p>        ",
    key: "Pronzit_veer",
  },
};

export const _kataRange = injector(obj, (original) => ({
  group: groups.kata,
  subgroup: groups.kataRange,
  description: replaceCharacter(original.description, injectImages),
}));
