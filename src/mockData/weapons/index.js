import { swords } from "@/mockData/weapons/_swords";
import { skills } from "@/mockData/routeData/skills";

const meleeWeapons = [...swords].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Skill: skills.find(
    (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
  ),
}));

export const weapons = [...meleeWeapons];
