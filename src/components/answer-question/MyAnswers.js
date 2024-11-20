import React from "react";

import { Card, HStack, Stack } from "@chakra-ui/react";

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
    <Card.Root width={"50%"} h={"100%"}>
      <Stack h={"100%"}>
        <HStack pl={3} pt={3}>
          <MyPageTitle title={"Характеристики персонажа"} />
        </HStack>

        <Stack overflow={"auto"} h={"100%"} p={2}>
          <MyAnswersRings accumulatedRings={accumulatedRings} />
          <MyAnswersStats accumulatedRings={accumulatedRings} />
          <MyAnswersOtherStats
            accumulatedRings={accumulatedRings}
            accumulatedStatus={accumulatedStatus}
            accumulatedGlory={accumulatedGlory}
            accumulatedHonor={accumulatedHonor}
          />
          <MyAnswersSkills accumulatedSkills={accumulatedSkills} />
        </Stack>
      </Stack>
    </Card.Root>
  );
}
