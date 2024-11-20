import React from "react";

import { Card } from "@chakra-ui/react";

import { MyPageTitle } from "@/components/MyPageTitle";
import { MyAnswersRings } from "@/components/answer-question/MyAnswersRings";
import { MyAnswersSkills } from "@/components/answer-question/MyAnswersSkills";
import { MyAnswersStats } from "@/components/answer-question/MyAnswersStats";
import { MyAnswersOtherStats } from "@/components/answer-question/MyAnswersOtherStats";

export function MyAnswers({
  accumulatedRings,
  accumulatedSkills,
  accumulatedStatus,
  accumulatedGlory,
  accumulatedHonor,
}) {
  return (
    <Card.Root width={"50%"} p={3}>
      <MyPageTitle title={"Характеристики персонажа"} />

      <MyAnswersRings accumulatedRings={accumulatedRings} />
      <MyAnswersStats accumulatedRings={accumulatedRings} />
      <MyAnswersOtherStats
        accumulatedRings={accumulatedRings}
        accumulatedStatus={accumulatedStatus}
        accumulatedGlory={accumulatedGlory}
        accumulatedHonor={accumulatedHonor}
      />
      <MyAnswersSkills accumulatedSkills={accumulatedSkills} />
    </Card.Root>
  );
}
