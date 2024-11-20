import { Card, Table } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import React, { useMemo } from "react";
import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { _families } from "@/mockData/clansFamiliesSchools/families";
import { _schools } from "@/mockData/clansFamiliesSchools/schools";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { MyAnswersRings } from "@/components/MyAnswersRings";
import { MyAnswerSkills } from "@/components/MyAnswerSkills";

export function MyAnswers({ questions }) {
  const selectedClan = useMemo(() => {
    return _clans[questions[1].answer];
  }, [questions]);
  const selectedFamily = useMemo(() => {
    return _families[questions[2].answer];
  }, [questions]);
  const selectedSchool = useMemo(() => {
    return _schools[questions[3].answer];
  }, [questions]);
  const selectedRing = useMemo(() => {
    return _rings[questions[4].answer];
  }, [questions]);

  const accumulatedRings = useMemo(() => {
    const baseRings = {
      air: 1,
      earth: 1,
      fire: 1,
      water: 1,
      void: 1,
    };

    if (selectedClan) {
      selectedClan.ringIncrease.forEach((i) => {
        baseRings[i.key]++;
      });
    }
    if (selectedFamily) {
      selectedFamily.ringIncrease.forEach((i) => {
        console.log(i);
        baseRings[i.key]++;
      });
    }
    if (selectedSchool) {
      selectedSchool.ringIncrease.forEach((i) => {
        console.log(i);
        baseRings[i.key]++;
      });
    }
    if (selectedRing) {
      console.log(selectedRing);
      baseRings[selectedRing.key]++;
    }

    return baseRings;
  }, [selectedClan, selectedFamily, selectedRing, selectedSchool]);

  const accumulatedSkills = useMemo(() => {
    const baseRings = {
      air: 1,
      earth: 1,
      fire: 1,
      water: 1,
      void: 1,
    };

    if (selectedClan) {
      selectedClan.ringIncrease.forEach((i) => {
        baseRings[i.key]++;
      });
    }
    if (selectedFamily) {
      selectedFamily.ringIncrease.forEach((i) => {
        console.log(i);
        baseRings[i.key]++;
      });
    }
    if (selectedSchool) {
      selectedSchool.ringIncrease.forEach((i) => {
        console.log(i);
        baseRings[i.key]++;
      });
    }
    if (selectedRing) {
      console.log(selectedRing);
      baseRings[selectedRing.key]++;
    }

    return baseRings;
  }, [selectedClan, selectedFamily, selectedRing, selectedSchool]);

  // console.log(selectedClan);
  // console.log(selectedFamily);
  // console.log(selectedSchool);
  // console.log(selectedRing);

  return (
    <Card.Root width={"50%"} p={3}>
      <MyPageTitle title={"Характеристики персонажа"} />

      <MyAnswersRings accumulatedRings={accumulatedRings} />
      <MyAnswerSkills accumulatedSkills={accumulatedSkills} />
    </Card.Root>
  );
}
