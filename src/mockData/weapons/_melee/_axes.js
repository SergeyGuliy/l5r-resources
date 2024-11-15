import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";

export const axes = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Masakari,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "3 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Ono,
    weaponsAndArmorCharacteristics_Range: "1-2",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 6,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.Axes,
}));
