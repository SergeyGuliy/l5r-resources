import { weaponsAndArmorData } from "@/mockData/otherData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/otherData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/otherData/weaponGroups";

export const pole = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Bisento,
    weaponsCharacteristics_Range: "2",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 6,
    weaponsCharacteristics_Grip: `
    Одноручный: Дистанция 1
    <br>
    Двуручный: Урон +2
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Strong,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Bo,
    weaponsCharacteristics_Range: "1-2",
    weaponsCharacteristics_BaseDamage: 6,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Secular],
    weaponsAndArmorCharacteristics_Rare: 2,
    weaponsAndArmorCharacteristics_Price: "2 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Dzi,
    weaponsCharacteristics_Range: "2",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "7 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Naginata,
    weaponsCharacteristics_Range: "2",
    weaponsCharacteristics_BaseDamage: 6,
    weaponsCharacteristics_Deadliness: 6,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Bulky,
      weaponsAndArmorProperties.Combat,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "10 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Trident,
    weaponsCharacteristics_Range: "2",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "10 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Yari,
    weaponsCharacteristics_Range: "2",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Combat],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.PoleWeapons,
}));
