import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const special = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Blowpipe,
    weaponsAndArmorCharacteristics_Range: "2-3",
    weaponsAndArmorCharacteristics_BaseDamage: 1,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: "Одноручный: -",
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "5 бу",
    weaponsAndArmorCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Strelba"
    ),
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Kama,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: "Одноручный: -",
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "1 коку",
    weaponsAndArmorCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.KusariGama,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
   Одноручный: -
   <br>
   Двуручный: Дистанция 2-3
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "5 коку",
    weaponsAndArmorCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Shuriken,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 2,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
   Одноручный [Ближний бой]: -
   <br>
   Одноручный [Стрельба]: Дистанция 1-3
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "1 коку",
    weaponsAndArmorCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.SpecialWeapons,
}));
