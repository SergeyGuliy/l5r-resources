import React from "react";

import { Card, HStack, Stack } from "@chakra-ui/react";

import { MyPageTitle } from "@/components/MyPageTitle";
import { MyAnswersRings } from "@/components/answer-question/answers/MyAnswersRings";
import { MyAnswersSkills } from "@/components/answer-question/answers/MyAnswersSkills";
import { MyAnswersStats } from "@/components/answer-question/answers/MyAnswersStats";
import { MyAnswersOtherStats } from "@/components/answer-question/answers/MyAnswersOtherStats";
import { MyAnswersTechniques } from "@/components/answer-question/answers/MyAnswersTechniques";
import { MyHtml } from "@/components/MyHtml";

export function MyAnswers({
  accumulatedStatus,
  accumulatedGlory,
  accumulatedHonor,
  accumulatedRings,
  accumulatedSkills,
  accumulatedTechniques,
  selectedSchool,
  selectedFamily,
  swapRings,
  setSwapRings,
}) {
  return (
    <Card.Root width={{ base: "100%", xl: "50%" }} h={"100%"}>
      <Stack h={"100%"}>
        <HStack pl={3} pt={3} display={{ base: "none", xl: "block" }}>
          <MyPageTitle title={"Характеристики"} />
        </HStack>

        <Stack overflow={"auto"} h={"100%"} p={2}>
          <MyAnswersRings
            accumulatedRings={accumulatedRings}
            swapRings={swapRings}
            setSwapRings={setSwapRings}
          />

          <MyAnswersStats accumulatedRings={accumulatedRings} />

          <MyAnswersOtherStats
            accumulatedStatus={accumulatedStatus}
            accumulatedGlory={accumulatedGlory}
            accumulatedHonor={accumulatedHonor}
            selectedFamily={selectedFamily}
          />

          <MyAnswersSkills accumulatedSkills={accumulatedSkills} />

          <MyAnswersTechniques
            selectedSchool={selectedSchool}
            accumulatedTechniques={accumulatedTechniques}
          />

          {selectedSchool?.startingEquipment && (
            <>
              <span style={{ fontWeight: 700 }}>Стартовое снаряжение:</span>
              <MyHtml content={selectedSchool.startingEquipment} />
            </>
          )}
        </Stack>
      </Stack>
    </Card.Root>
  );
}
