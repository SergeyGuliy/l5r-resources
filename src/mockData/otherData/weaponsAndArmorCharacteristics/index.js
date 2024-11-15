const weaponsAndArmorCharacteristics = {
  weaponsAndArmorCharacteristics_Rare: {
    key: "weaponsAndArmorCharacteristics_Rare",
    title: "Редкость",
    width: "80px",
    description: `
  <p>Определяет насколько сложно найти в продаже</p>
      `,
  },
  weaponsAndArmorCharacteristics_Price: {
    key: "weaponsAndArmorCharacteristics_Price",
    title: "Цена",
    width: "70px",
    description: `
  <p>Цена предмета</p>
      `,
  },
};

export const weaponsCharacteristics = {
  weaponsCharacteristics_Name: {
    key: "weaponsCharacteristics_Name",
    title: "Название",
    width: "110px",
    description: `
<p>Название оружия</p>
    `,
  },

  weaponsCharacteristics_Category: {
    key: "weaponsCharacteristics_Category",
    title: "Категория",
    width: "110px",
    description: `
<p>Архетип оружия, такой как “мечи”,
“древковое” или “луки”. Некоторые техники
требуют особенные категории.</p>
    `,
  },
  weaponsCharacteristics_Skill: {
    key: "weaponsCharacteristics_Skill",
    title: "Навык",
    width: "150px",
    description: `
  <p>Особый навык для владения этим
  оружием. Обычно, это один из навыков
  Боевых Искусств: Боевое Искусство [Ближний
  бой], [Стрельба] или [Безоружный бой]</p>
      `,
  },
  weaponsCharacteristics_Range: {
    key: "weaponsCharacteristics_Range",
    title: "Дистанция",
    width: "100px",
    description: `
  <p>Расстояние, в диапазоне дистанции которого, атакующий может
  поразить цель. Обозначается как одно число
  (1), так и диапазон чисел (1-2). Важно то, что
  дистанция ограничивается как максимумом,
  так и минимумом; цель, которая находится
  ближе, чем меньшее значение дистанции оружия,
  не считается досягаемой
  при атаке этим оружием</p>
      `,
  },
  weaponsCharacteristics_BaseDamage: {
    key: "weaponsCharacteristics_BaseDamage",
    title: "Базовый урон",
    width: "110px",
    description: `
  <p>Отображает то, как быстро такое оружие может
  повергнуть защищающегося. Атакующие действия
  часто ссылаются на это
  значение.
  </p>
      `,
  },
  weaponsCharacteristics_Deadliness: {
    key: "weaponsCharacteristics_Deadliness",
    title: "Смертоносность",
    width: "130px",
    description: `
  <p>Летальность этого оружия.
  Оружие с высокой смертоносностью легче наносит
  ужасные ранения или приводит к смерти (смотри
  стр. 269)</p>
      `,
  },
  weaponsCharacteristics_Grip: {
    key: "weaponsCharacteristics_Grip",
    title: "Хват",
    description: `
  <p>Способ хвата этого оружия (одноручный, двуручный). Если в списке оружия
  указано несколько хватов, в каждом из них
  перечислены изменения характеристик,
  которые применяются при использовании
  этого хвата</p>
      `,
  },
  weaponsCharacteristics_Properties: {
    key: "weaponsCharacteristics_Properties",
    title: "Свойства",
    description: `
  <p>Любые дополнительные эффекты, не предусмотренные характеристиками
  оружия.</p>
      `,
  },
  ...weaponsAndArmorCharacteristics,
};

export const armorCharacteristics = {
  armorCharacteristics_Name: {
    key: "armorCharacteristics",
    title: "Название",
    width: "110px",
    description: `
<p>Название брони</p>
    `,
  },
  armorCharacteristics_Resistance: {
    key: "armorCharacteristics_Resistance",
    title: "Cопротивление",
    width: "110px",
    description: `
<p>Большинство видов брони обеспечивают
защиту от одной или нескольких категорий
повреждений. Пока персонаж оснащен
набором брони, он получает указанное количество <strong>сопротивления</strong> против типов урона,
перечисленных для брони. Двумя распространенными категориями являются:</p>
<ul>
  <li><strong>Физическое:</strong> Обеспечивает указанноесопротивление к физическому вреду во  многих его формах</li>
  <li><strong>Сверхъестественное:</strong> Обеспечивает указанное сопротивление к воззваниям,  махо и другим мистическим эффектам.</li>
</ul>
    `,
  },
  armorCharacteristics_Properties: {
    key: "armorCharacteristics_Properties",
    title: "Свойства",
    description: `
  <p>Любые нестандартные эффекты, не предусмотренные профилем
или описанием брони</p>
      `,
  },
  ...weaponsAndArmorCharacteristics,
};
