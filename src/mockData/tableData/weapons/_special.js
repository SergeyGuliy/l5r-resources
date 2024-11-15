import { weaponsAndArmorData } from "@/mockData/otherData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/otherData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/otherData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const special = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Blowpipe,
    weaponsCharacteristics_Range: "2-3",
    weaponsCharacteristics_BaseDamage: 1,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: "Одноручный: -",
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Secret],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "5 бу",
    weaponsCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Strelba"
    ),
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Kama,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: "Одноручный: -",
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Secret],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "1 коку",
    weaponsCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.KusariGama,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
   Одноручный: -
   <br>
   Двуручный: Дистанция 2-3
    `,
    weaponsCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Grasping,
      weaponsAndArmorProperties.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "5 коку",
    weaponsCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Shuriken,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 2,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
   Одноручный [Ближний бой]: -
   <br>
   Одноручный [Стрельба]: Дистанция 1-3
    `,
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Secret],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "1 коку",
    weaponsCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.SpecialWeapons,
}));
