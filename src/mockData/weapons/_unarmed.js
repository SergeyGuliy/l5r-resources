import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const unarmed = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.PunchHand,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 1,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: "",
    weaponsCharacteristics_Properties: [weaponsAndArmorProperties.Grasping],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.KickLeg,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 2,
    weaponsCharacteristics_Deadliness: 1,
    weaponsCharacteristics_Grip: "",
    weaponsCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.BiteMouth,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 0,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: "",
    weaponsCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.UnarmedAttacks,
  weaponsCharacteristics_Skill: skills.find(
    (i) => i.link === "Boevye_iskusstva_Bezoruzhnyy_boy"
  ),
}));