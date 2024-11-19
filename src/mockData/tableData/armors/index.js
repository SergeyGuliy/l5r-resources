import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";

export const armors = [
  {
    armorCharacteristics_Name: weaponsAndArmorData.SleepingOutfit,
    armorCharacteristics_Resistance: "-",
    armorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 2,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.RegularClothes,
    armorCharacteristics_Resistance: "Физическое 1",
    armorCharacteristics_Properties: [_weapArmProp.Secular],
    weaponsAndArmorCharacteristics_Rare: 1,
    weaponsAndArmorCharacteristics_Price: "1 бу",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.CeremonialClothes,
    armorCharacteristics_Resistance: "Физическое 1",
    armorCharacteristics_Properties: [
      _weapArmProp.Ceremonial,
      _weapArmProp.Magnificent,
    ],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.ConsecratedVestments,
    armorCharacteristics_Resistance: `
    Физическое 1
    <br>
    Сверхъестественное 3
    `,
    armorCharacteristics_Properties: [_weapArmProp.Ceremonial],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "4 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.RoadClothing,
    armorCharacteristics_Resistance: "Физическое 2",
    armorCharacteristics_Properties: [
      _weapArmProp.Strong,
      _weapArmProp.Secular,
      _weapArmProp.Skillful,
    ],
    weaponsAndArmorCharacteristics_Rare: 2,
    weaponsAndArmorCharacteristics_Price: "2 бу",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.HiddenArmor,
    armorCharacteristics_Resistance: "Физическое 2",
    armorCharacteristics_Properties: [_weapArmProp.Secret],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.AshigaruArmor,
    armorCharacteristics_Resistance: "Физическое 3",
    armorCharacteristics_Properties: [_weapArmProp.Combat],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.LacqueredArmor,
    armorCharacteristics_Resistance: "Физическое 4",
    armorCharacteristics_Properties: [
      _weapArmProp.Ceremonial,
      _weapArmProp.Bulky,
      _weapArmProp.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "25 коку",
  },
  {
    armorCharacteristics_Name: weaponsAndArmorData.PlateArmor,
    armorCharacteristics_Resistance: "Физическое 5",
    armorCharacteristics_Properties: [
      _weapArmProp.Bulky,
      _weapArmProp.Strong,
      _weapArmProp.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "40 коку",
  },
];
