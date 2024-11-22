import { useMemo } from "react";
import { skills } from "@/mockData/routeData/skills";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

const _baseRings = Object.fromEntries(Object.keys(_rings).map((i) => [i, 1]));
const _baseSkills = Object.fromEntries(Object.keys(skills).map((i) => [i, 0]));

export function useAnswersAccumulated({
  selectedClan,
  selectedFamily,
  selectedSchool,
  selectedRing,
  answers,
}) {
  const accumulatedRings = useMemo(() => {
    const baseRings = { ..._baseRings };

    if (selectedClan)
      selectedClan.ringIncrease.forEach((i) => baseRings[i.key]++);

    if (selectedFamily)
      selectedFamily.ringIncrease.forEach((i) => baseRings[i.key]++);

    if (selectedSchool)
      selectedSchool.ringIncrease.forEach((i) => baseRings[i.key]++);

    if (selectedRing) baseRings[selectedRing.key]++;

    return baseRings;
  }, [selectedClan, selectedFamily, selectedRing, selectedSchool]);

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

  return {
    accumulatedRings,
    accumulatedSkills,
    accumulatedStatus,
    accumulatedGlory,
    accumulatedHonor,
  };
}
