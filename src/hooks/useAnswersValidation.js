import { defaultObj } from "@/components/answer-question/_questionsAndAnswers";
import { useEffect } from "react";

export function useAnswersValidation(
  answers,
  selectedClan,
  selectedFamily,
  selectedSchool,
  selectedRing,
  accumulatedRings,
  setAnswer,
  addAlert
) {
  const validationsMap = {
    1: (newAnswer, questionIndex, newAnswers) => {
      if (questionIndex === 1) {
        if (selectedFamily?.clan && selectedFamily?.clan !== newAnswer) {
          newAnswers[2] = "";
          addAlert("Клан был изменен! Выберите новую семью.");
        }
        if (selectedSchool?.clan && selectedSchool?.clan !== newAnswer) {
          newAnswers[3] = defaultObj;
          addAlert("Клан был изменен! Выберите новую школу.");
        }
      }
    },
  };

  useEffect(() => {
    const newAnswers = { ...answers };

    if (selectedFamily?.clan && selectedFamily?.clan !== selectedClan.key) {
      newAnswers[2] = "";
      addAlert("Клан был изменен! Выберите новую семью!");
    }
    if (selectedSchool?.clan && selectedSchool?.clan !== selectedClan.key) {
      newAnswers[3] = defaultObj;
      addAlert("Клан был изменен! Выберите новую школу!");
    }
    setAnswer(newAnswers);
  }, [answers[1]]);

  useEffect(() => {
    const a = Object.fromEntries(
      Object.entries(accumulatedRings).filter((i) => i[1] > 3)
    );

    if (!a[selectedRing?.key]) return;

    addAlert(
      "Выбраное кольцо в 4м вопросе выше 3го ранга! Выберете другое кольцо!"
    );
    setAnswer({ ...answers, [4]: "" });
  }, [answers[1], answers[2], answers[3]]);

  function validateAnswer(newAnswer, questionIndex) {
    const newAnswers = { ...answers, [questionIndex]: newAnswer };

    // validationsMap[1](newAnswer, questionIndex, newAnswers);
    // validationsMap[4](newAnswer, questionIndex, newAnswers);

    setAnswer(newAnswers);
  }

  return { validateAnswer };
}
