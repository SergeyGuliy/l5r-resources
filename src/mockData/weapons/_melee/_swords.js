import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";

export const swords = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Bokken,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "1 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Chokuto,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 5,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Dao,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 6,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Gao,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Jian,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +1    
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Katana,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 5,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2    
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Nodachi,
    weaponsAndArmorCharacteristics_Range: "1-2",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 6,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Scimitar,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 5,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Strong,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Wakizashi,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 5,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Zanbato,
    weaponsAndArmorCharacteristics_Range: "1-2",
    weaponsAndArmorCharacteristics_BaseDamage: 6,
    weaponsAndArmorCharacteristics_Deadliness: 7,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "40 коку",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.Swords,
}));
