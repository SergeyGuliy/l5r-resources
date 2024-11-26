import { useMemo } from "react";

import { Box, HStack, Tabs, useBreakpointValue } from "@chakra-ui/react";
import { MyQuestions } from "@/components/answer-question/questions/MyQuestions";
import { MyAnswers } from "@/components/answer-question/answers/MyAnswers";

import { useAlerts } from "@/providers/AlertProvider";
import { useAnswersSelected } from "@/hooks/useAnswersSelected";
import { useAnswersAccumulated } from "@/hooks/useAnswersAccumulated";
import { useAnswersValidation } from "@/hooks/useAnswersValidation";

import { questions } from "@/components/answer-question/_questionsAndAnswers";
import { MyPageTitle } from "@/components/MyPageTitle";
import { Switch } from "@/components/ui/switch";
import { useConstructorSetUrl } from "@/hooks/useConstructorSetUrl";
import { useConstructorGetUrlData } from "@/hooks/useConstructorGetUrlData";

export function MyAnswerQuestion() {
  const { addAlert } = useAlerts();
  const {
    isMounted,
    answers,
    setAnswer,
    swapRings,
    setSwapRings,
    expandedQuestions,
    setExpandedQuestions,
  } = useConstructorGetUrlData();

  const { selectedClan, selectedFamily, selectedSchool, selectedRing } =
    useAnswersSelected(answers);

  const {
    accumulatedStatus,
    accumulatedGlory,
    accumulatedHonor,
    accumulatedRings,
    accumulatedSkills,
    accumulatedTechniques,
  } = useAnswersAccumulated({
    selectedClan,
    selectedFamily,
    selectedSchool,
    selectedRing,
    answers,
    swapRings,
  });

  useAnswersValidation(
    answers,
    selectedClan,
    selectedFamily,
    selectedSchool,
    selectedRing,
    accumulatedRings,
    accumulatedSkills,
    setAnswer,
    swapRings,
    setSwapRings,
    addAlert
  );

  const answerQuestion = (newAnswer, questionIndex) =>
    setAnswer({ ...answers, [questionIndex]: newAnswer });

  const currentBreakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const useTabs = useMemo(
    () => ["base", "sm", "md", "lg"].includes(currentBreakpoint),
    [currentBreakpoint]
  );

  useConstructorSetUrl({
    answers,
    swapRings,
    expandedQuestions,
    isMounted,
  });

  if (!isMounted) return;

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <HStack mb={1}>
        <MyPageTitle title={"Конструктор персонажа"} />
        <Switch
          ml={"auto"}
          flexDirection="row-reverse"
          checked={expandedQuestions}
          onCheckedChange={(e) => setExpandedQuestions(e.checked)}
        >
          Расширенная информация
        </Switch>
      </HStack>

      {useTabs && (
        <Tabs.Root
          defaultValue="members"
          overflow={"hidden"}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Tabs.List>
            <Tabs.Trigger value="members" w={"50%"} textAlign="center">
              <Box textAlign="center" w={"100%"}>
                Вопросы
              </Box>
            </Tabs.Trigger>
            <Tabs.Trigger value="projects" w={"50%"} textAlign="center">
              <Box textAlign="center" w={"100%"}>
                Характеристики
              </Box>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="members" overflow={"hidden"} pt={0}>
            <MyQuestions
              questions={questions}
              answers={answers}
              answerQuestion={answerQuestion}
              selectedClan={selectedClan}
              selectedFamily={selectedFamily}
              selectedSchool={selectedSchool}
              accumulatedRings={accumulatedRings}
              accumulatedSkills={accumulatedSkills}
              expandedQuestions={expandedQuestions}
            />
          </Tabs.Content>
          <Tabs.Content value="projects" overflow={"hidden"} pt={0}>
            <MyAnswers
              accumulatedStatus={accumulatedStatus}
              accumulatedGlory={accumulatedGlory}
              accumulatedHonor={accumulatedHonor}
              accumulatedRings={accumulatedRings}
              accumulatedSkills={accumulatedSkills}
              accumulatedTechniques={accumulatedTechniques}
              selectedSchool={selectedSchool}
              selectedFamily={selectedFamily}
              swapRings={swapRings}
              setSwapRings={setSwapRings}
            />
          </Tabs.Content>
        </Tabs.Root>
      )}

      {!useTabs && (
        <HStack width={"100%"} alignItems={"start"} overflow={"hidden"}>
          <MyQuestions
            questions={questions}
            answers={answers}
            answerQuestion={answerQuestion}
            selectedClan={selectedClan}
            selectedFamily={selectedFamily}
            selectedSchool={selectedSchool}
            accumulatedRings={accumulatedRings}
            accumulatedSkills={accumulatedSkills}
            expandedQuestions={expandedQuestions}
          />

          <MyAnswers
            accumulatedStatus={accumulatedStatus}
            accumulatedGlory={accumulatedGlory}
            accumulatedHonor={accumulatedHonor}
            accumulatedRings={accumulatedRings}
            accumulatedSkills={accumulatedSkills}
            accumulatedTechniques={accumulatedTechniques}
            selectedSchool={selectedSchool}
            selectedFamily={selectedFamily}
            swapRings={swapRings}
            setSwapRings={setSwapRings}
          />
        </HStack>
      )}
    </Box>
  );
}
