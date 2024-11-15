import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";

export const swords = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Bokken,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +2
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Secular],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "1 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Chokuto,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 5,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Dao,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 6,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Gao,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Grasping],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Jian,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +1    
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.RazorSharp],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Katana,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 5,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2    
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Nodachi,
    weaponsCharacteristics_Range: "1-2",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 6,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Scimitar,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 5,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Strong,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Wakizashi,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 5,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Zanbato,
    weaponsCharacteristics_Range: "1-2",
    weaponsCharacteristics_BaseDamage: 6,
    weaponsCharacteristics_Deadliness: 7,
    weaponsCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "40 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.Swords,
}));
