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

    return baseSkills;
  }, [selectedClan, selectedFamily]);

  const accumulatedStatus = useMemo(() => {
    let baseStatus = 0;

    if (selectedClan) baseStatus = baseStatus + selectedClan.startStatus;

    return baseStatus;
  }, [selectedClan]);

  const accumulatedGlory = useMemo(() => {
    let baseGlory = 0;

    if (selectedFamily) baseGlory = baseGlory + selectedFamily.startGlory;

    return baseGlory;
  }, [selectedFamily]);

  const accumulatedHonor = useMemo(() => {
    let baseHonor = 0;

    if (selectedSchool) baseHonor = baseHonor + selectedSchool.startHonor;

    return baseHonor;
  }, [selectedSchool]);

  return {
    accumulatedRings,
    accumulatedSkills,
    accumulatedStatus,
    accumulatedGlory,
    accumulatedHonor,
  };
}
