import { useEffect, useState } from "react";

import { HStack } from "@chakra-ui/react";
import { MyQuestions } from "@/components/answer-question/questions/MyQuestions";
import { MyAnswers } from "@/components/answer-question/answers/MyAnswers";

import { useAnswersSelected } from "@/hooks/useAnswersSelected";
import { useAnswersAccumulated } from "@/hooks/useAnswersAccumulated";
import { useAnswersValidation } from "@/hooks/useAnswersValidation";

import {
  questions,
  _answers,
  defaultObj,
} from "@/components/answer-question/_questionsAndAnswers";
import { useAlerts } from "@/providers/AlertProvider";

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

  const { validateAnswer } = useAnswersValidation(
    answers,
    selectedClan,
    selectedFamily,
    selectedSchool,
    selectedRing,
    accumulatedRings,
    setAnswer,
    addAlert
  );

  // useEffect(() => {
  //   console.log(answers);
  // }, [answers]);

  const answerQuestion = (newAnswer, questionIndex) => {
    // setAnswer({
    //   ...answers,
    //   [questionIndex]: newAnswer,
    // });
    setTimeout(() => {
      validateAnswer(newAnswer, questionIndex);
    }, 0);
  };

  useEffect(() => {
    // const a = Object.fromEntries(
    //   Object.entries(accumulatedRings).filter((i) => i[1] > 3)
    // );
    //
    // if (a[selectedRing?.key]) {
    //   addAlert("Выберете кольцо заново!");
    //   setAnswer({
    //     ...answers,
    //     [4]: "",
    //   });
    // }

    if (
      answers[7] &&
      answers[7].key === "selectSkill" &&
      answers[7].value &&
      accumulatedSkills[answers[7].value] > 1
    ) {
      answers[7].value = "";
      addAlert("Выбраный навык в 7м вопросе не может быть выше 1го ранга!");
    }

    if (
      answers[8] &&
      answers[8].key === "selectSkill" &&
      answers[8].value &&
      accumulatedSkills[answers[8].value] > 3
    ) {
      answers[8].value = "";
      addAlert("Выбраный навык в 8м вопросе не может быть выше 3го ранга!");
    }

    if (
      answers[17] &&
      answers[17].key === "selectSkill" &&
      answers[17].value &&
      accumulatedSkills[answers[17].value] > 3
    ) {
      answers[17].value = "";
      addAlert("Выбраный навык в 17м вопросе не может быть выше 3го ранга!");
    }
  }, [answers]);

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
      />
    </HStack>
  );
}
