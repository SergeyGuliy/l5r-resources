import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";

export const pole = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Bisento,
    weaponsAndArmorCharacteristics_Range: "2",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 6,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: Дистанция 1
    <br>
    Двуручный: Урон +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Strong,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Bo,
    weaponsAndArmorCharacteristics_Range: "1-2",
    weaponsAndArmorCharacteristics_BaseDamage: 6,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 2,
    weaponsAndArmorCharacteristics_Price: "2 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Dzi,
    weaponsAndArmorCharacteristics_Range: "2",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "7 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Naginata,
    weaponsAndArmorCharacteristics_Range: "2",
    weaponsAndArmorCharacteristics_BaseDamage: 6,
    weaponsAndArmorCharacteristics_Deadliness: 6,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "10 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Trident,
    weaponsAndArmorCharacteristics_Range: "2",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "10 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Yari,
    weaponsAndArmorCharacteristics_Range: "2",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.PoleWeapons,
}));
