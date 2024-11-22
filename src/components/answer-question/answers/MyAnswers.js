import React from "react";

import { Card, HStack, Stack } from "@chakra-ui/react";

import { MyPageTitle } from "@/components/MyPageTitle";
import { MyAnswersRings } from "@/components/answer-question/answers/MyAnswersRings";
import { MyAnswersSkills } from "@/components/answer-question/answers/MyAnswersSkills";
import { MyAnswersStats } from "@/components/answer-question/answers/MyAnswersStats";
import { MyAnswersOtherStats } from "@/components/answer-question/answers/MyAnswersOtherStats";
import { Switch } from "@/components/ui/switch";
import { MyAnswersTechniques } from "@/components/answer-question/answers/MyAnswersTechniques";
import { MyHtml } from "@/components/MyHtml";

export function MyAnswers({
  accumulatedRings,
  accumulatedSkills,
  accumulatedStatus,
  accumulatedGlory,
  accumulatedHonor,
  expandedAnswers,
  setExpandedAnswers,
  selectedSchool,
  selectedFamily,
}) {
  console.log(selectedSchool);
  return (
    <Card.Root width={"50%"} h={"100%"}>
      <Stack h={"100%"}>
        <HStack pl={3} pt={3}>
          <MyPageTitle title={"Характеристики персонажа"} />

          <Switch
            ml={"auto"}
            flexDirection="row-reverse"
            checked={expandedAnswers}
            onCheckedChange={(e) => setExpandedAnswers(e.checked)}
          >
            Switch with tooltip
          </Switch>
        </HStack>

        <Stack overflow={"auto"} h={"100%"} p={2}>
          <MyAnswersRings accumulatedRings={accumulatedRings} />
          <MyAnswersStats accumulatedRings={accumulatedRings} />
          <MyAnswersOtherStats
            accumulatedStatus={accumulatedStatus}
            accumulatedGlory={accumulatedGlory}
            accumulatedHonor={accumulatedHonor}
            selectedFamily={selectedFamily}
          />
          <MyAnswersSkills accumulatedSkills={accumulatedSkills} />
          <MyAnswersTechniques selectedSchool={selectedSchool} />

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
