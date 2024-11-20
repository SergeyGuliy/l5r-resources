import { useState } from "react";

import { HStack } from "@chakra-ui/react";
import { MyQuestions } from "@/components/answer-question/MyQuestions";
import { MyAnswers } from "@/components/answer-question/MyAnswers";
import { useAnswersSelected } from "@/components/answer-question/useAnswersSelected";
import { useAnswersAccumulated } from "@/components/answer-question/useAnswersAccumulated";

import {
  questions,
  _answers,
} from "@/components/answer-question/_questionsAndAnswers";

export function MyAnswerQuestion() {
  const [answers, setAnswer] = useState(_answers);

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
  });

  function wrappedSetAnswer(newAnswer) {
    setAnswer({
      ...answers,
      ...newAnswer,
    });
  }

  function answerQuestion(newAnswer, questionIndex) {
    switch (questionIndex) {
      case 1:
        wrappedSetAnswer({
          [questionIndex]: newAnswer,
          [2]: _answers[2],
          [3]: _answers[3],
        });
        break;
      default:
        wrappedSetAnswer({
          [questionIndex]: newAnswer,
        });
    }
  }

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
      />

      <MyAnswers
        accumulatedRings={accumulatedRings}
        accumulatedSkills={accumulatedSkills}
        accumulatedStatus={accumulatedStatus}
        accumulatedGlory={accumulatedGlory}
        accumulatedHonor={accumulatedHonor}
      />
    </HStack>
  );
}
