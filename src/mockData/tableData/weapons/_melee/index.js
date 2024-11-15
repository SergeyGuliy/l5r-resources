import { swords } from "@/mockData/tableData/weapons/_melee/_swords";
import { axes } from "@/mockData/tableData/weapons/_melee/_axes";
import { blunt } from "@/mockData/tableData/weapons/_melee/_blunt";
import { hand } from "@/mockData/tableData/weapons/_melee/_hand";
import { pole } from "@/mockData/tableData/weapons/_melee/_pole";
import { skills } from "@/mockData/routeData/skills";

export const melee = [...swords, ...axes, ...blunt, ...hand, ...pole].map(
  (i) => ({
    ...i,
    weaponsCharacteristics_Skill: skills.find(
      (i) => i.link === "Boevye_iskusstva_Blizhniy_boy"
    ),
  })
);
