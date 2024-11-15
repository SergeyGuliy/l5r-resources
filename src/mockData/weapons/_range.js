import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const range = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Daikyu,
    weaponsAndArmorCharacteristics_Range: "3-5",
    weaponsAndArmorCharacteristics_BaseDamage: 6,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "6 коку",
    weaponsAndArmorCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.ShinjoHorseBow,
    weaponsAndArmorCharacteristics_Range: "2-4",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 5,
    weaponsAndArmorCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "6 коку",
    weaponsAndArmorCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Yumi,
    weaponsAndArmorCharacteristics_Range: "2-5",
    weaponsAndArmorCharacteristics_BaseDamage: 5,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "3 коку",
    weaponsAndArmorCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Oyumi,
    weaponsAndArmorCharacteristics_Range: "2-5",
    weaponsAndArmorCharacteristics_BaseDamage: 7,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.InPreparation,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "40 коку",
    weaponsAndArmorCharacteristics_Category: weaponGroups.Crossbows,
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Skill: skills.find(
    (i) => i.link === "Boevye_iskusstva_Strelba"
  ),
}));
