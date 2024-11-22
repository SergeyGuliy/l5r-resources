import { useState } from "react";

import { useAlerts } from "@/providers/AlertProvider";
import { useAnswersSelected } from "@/hooks/useAnswersSelected";
import { useAnswersAccumulated } from "@/hooks/useAnswersAccumulated";
import { useAnswersValidation } from "@/hooks/useAnswersValidation";

import { HStack } from "@chakra-ui/react";
import { MyQuestions } from "@/components/answer-question/questions/MyQuestions";
import { MyAnswers } from "@/components/answer-question/answers/MyAnswers";

import {
  questions,
  _answers,
} from "@/components/answer-question/_questionsAndAnswers";

export function MyAnswerQuestion() {
  const { addAlert } = useAlerts();

  const [answers, setAnswer] = useState(_answers);
  const [expandedQuestions, setExpandedQuestions] = useState(false);
  const [expandedAnswers, setExpandedAnswers] = useState(false);

  const { selectedClan, selectedFamily, selectedSchool, selectedRing } =
    useAnswersSelected(answers);

  const {
    accumulatedRings,
    accumulatedSkills,
    accumulatedStatus,
    accumulatedGlory,
    accumulatedHonor,
  } = useAnswersAccumulated({
    selectedClan,
    selectedFamily,
    selectedSchool,
    selectedRing,
    answers,
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
    addAlert
  );

  const answerQuestion = (newAnswer, questionIndex) =>
    setAnswer({ ...answers, [questionIndex]: newAnswer });

  return (
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
        setExpandedQuestions={setExpandedQuestions}
      />

      <MyAnswers
        accumulatedRings={accumulatedRings}
        accumulatedSkills={accumulatedSkills}
        accumulatedStatus={accumulatedStatus}
        accumulatedGlory={accumulatedGlory}
        accumulatedHonor={accumulatedHonor}
        expandedAnswers={expandedAnswers}
        setExpandedAnswers={setExpandedAnswers}
        selectedSchool={selectedSchool}
        selectedFamily={selectedFamily}
      />
    </HStack>
  );
}
