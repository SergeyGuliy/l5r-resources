import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { skills } from "@/mockData/routeData/skills";

export const unarmed = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.PunchHand,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 1,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: "",
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Grasping,
    ],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.KickLeg,
    weaponsAndArmorCharacteristics_Range: "1",
    weaponsAndArmorCharacteristics_BaseDamage: 2,
    weaponsAndArmorCharacteristics_Deadliness: 1,
    weaponsAndArmorCharacteristics_Grip: "",
    weaponsAndArmorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.BiteMouth,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 0,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: "",
    weaponsAndArmorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: "",
    weaponsAndArmorCharacteristics_Price: "",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.UnarmedAttacks,
  weaponsAndArmorCharacteristics_Skill: skills.find(
    (i) => i.link === "Boevye_iskusstva_Bezoruzhnyy_boy"
  ),
}));
