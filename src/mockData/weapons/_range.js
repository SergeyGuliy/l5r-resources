import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const range = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Daikyu,
    weaponsCharacteristics_Range: "3-5",
    weaponsCharacteristics_BaseDamage: 6,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Combat],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "6 коку",
    weaponsCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.ShinjoHorseBow,
    weaponsCharacteristics_Range: "2-4",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 5,
    weaponsCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Combat],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "6 коку",
    weaponsCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Yumi,
    weaponsCharacteristics_Range: "2-5",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
   Двуручный: -
    `,
    weaponsCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 3,
    weaponsAndArmorCharacteristics_Price: "3 коку",
    weaponsCharacteristics_Category: weaponGroups.Bows,
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Oyumi,
    weaponsCharacteristics_Range: "2-5",
    weaponsCharacteristics_BaseDamage: 7,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.InPreparation,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "40 коку",
    weaponsCharacteristics_Category: weaponGroups.Crossbows,
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Skill: skills.find(
    (i) => i.link === "Boevye_iskusstva_Strelba"
  ),
}));