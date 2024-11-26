import { useMemo } from "react";

import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { _techniques } from "@/mockData/routeData/techniques";
import { skills } from "@/mockData/routeData/skills";
import { text } from "@/mockData/routeData/constants";

const _baseRings = Object.fromEntries(Object.keys(_rings).map((i) => [i, 1]));
const _baseSkills = Object.fromEntries(Object.keys(skills).map((i) => [i, 0]));

export function useAnswersAccumulated({
  selectedClan,
  selectedFamily,
  selectedSchool,
  selectedRing,
  answers,
  swapRings,
}) {
  const accumulatedStatus = useMemo(() => {
    let base = 0;
    if (selectedClan) base = base + selectedClan.startStatus;
    return base;
  }, [selectedClan]);

  const accumulatedGlory = useMemo(() => {
    let base = 0;
    if (selectedFamily) base = base + selectedFamily.startGlory;
    if (answers[7] && answers[7].key === "selectGlory") base = base + 5;
    return base;
  }, [answers, selectedFamily]);

  const accumulatedHonor = useMemo(() => {
    let base = 0;
    if (selectedSchool) base = base + selectedSchool.startHonor;
    if (answers[8] && answers[8].key === "selectHonor") base = base + 10;
    return base;
  }, [answers, selectedSchool]);

  const accumulatedRings = useMemo(() => {
    const baseRings = { ..._baseRings };

    if (selectedClan)
      selectedClan.ringIncrease.forEach((i) => baseRings[i.key]++);
    if (selectedFamily)
      selectedFamily.ringIncrease.forEach((i) => baseRings[i.key]++);
    if (selectedSchool)
      selectedSchool.ringIncrease
        .filter((i) => i.key !== "select")
        .forEach((i) => baseRings[i.key]++);
    if (answers[3]?.ring1) baseRings[answers[3]?.ring1]++;
    if (answers[3]?.ring2) baseRings[answers[3]?.ring2]++;
    if (selectedRing) baseRings[selectedRing.key]++;

    if (swapRings.toBeDecreased) baseRings[swapRings.toBeDecreased]--;
    if (swapRings.toBeIncreased) baseRings[swapRings.toBeIncreased]++;

    return baseRings;
  }, [
    answers,
    selectedClan,
    selectedFamily,
    selectedRing,
    selectedSchool,
    swapRings.toBeDecreased,
    swapRings.toBeIncreased,
  ]);

  const accumulatedSkills = useMemo(() => {
    const baseSkills = { ..._baseSkills };

    if (selectedClan)
      selectedClan.skillIncrease.forEach((i) => baseSkills[i.key]++);
    if (selectedFamily)
      selectedFamily.skillIncrease.forEach((i) => baseSkills[i.key]++);
    if (answers && answers[3] && answers[3]?.skills?.length)
      answers[3].skills.forEach((i) => baseSkills[i]++);
    if (answers[7] && answers[7].key === "selectSkill" && answers[7].value)
      baseSkills[answers[7].value]++;
    if (answers[8] && answers[8].key === "selectSkill" && answers[8].value)
      baseSkills[answers[8].value]++;
    if (answers[17]) baseSkills[answers[17]]++;

    return baseSkills;
  }, [answers, selectedClan, selectedFamily]);

  const accumulatedTechniques = useMemo(() => {
    let tech = [];
    const techObject = {};

    if (answers[3])
      Object.entries(answers[3])
        .filter((i) => i[0].includes("techniques_"))
        .forEach((i) => {
          if (i[1].length) i[1].forEach((j) => tech.push(_techniques[j]));
        });
    if (selectedSchool)
      selectedSchool.startingTechniques.forEach((i) => {
        if (!i.toSelect) i.items.forEach((j) => tech.push(j));
      });

    tech.forEach((i) => {
      if (!techObject[i.group]) techObject[i.group] = [];
      techObject[i.group].push(i);
    });

    return Object.entries(techObject).map(([key, val]) => [
      `${text[key]}: `,
      val,
    ]);
  }, [answers[3], selectedClan]);

  return {
    accumulatedStatus,
    accumulatedGlory,
    accumulatedHonor,
    accumulatedRings,
    accumulatedSkills,
    accumulatedTechniques,
  };
}
