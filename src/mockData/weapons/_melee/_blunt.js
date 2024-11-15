import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";

export const blunt = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Club,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +1
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 1,
    weaponsAndArmorCharacteristics_Price: "1 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Hammer,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "3 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Kiseru,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 2,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Otsuchi,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 8,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "30 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Tetsubo,
    weaponsAndArmorCharacteristics_Range: "1-2",
    weaponsAndArmorCharacteristics_BaseDamage: 7,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
      weaponsAndArmorProperties.Strong,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.BluntWeapons,
}));
