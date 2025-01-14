import { defaultObj } from "@/components/answer-question/_questionsAndAnswers";
import { useEffect } from "react";

export function useAnswersValidation(
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
) {
  /**
   * Validate family and school
   */
  useEffect(() => {
    const newAnswers = { ...answers };
    let changed = false;

    if (selectedFamily?.clan && selectedFamily?.clan !== selectedClan?.key) {
      newAnswers[2] = "";
      addAlert("Клан был изменен! Выберите новую семью!");
      changed = true;
    }
    if (selectedSchool?.clan && selectedSchool?.clan !== selectedClan?.key) {
      newAnswers[3] = defaultObj;
      addAlert("Клан был изменен! Выберите новую школу!");
      changed = true;
    }

    changed && setAnswer(newAnswers);
  }, [answers[1]]);

  /**
   * Validate ring
   */
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

  /**
   * Validate ring switch
   */
  useEffect(() => {
    if (
      swapRings?.toBeDecreased &&
      accumulatedRings[swapRings.toBeDecreased] < 3
    )
      setSwapRings({
        toBeDecreased: "",
        toBeIncreased: "",
      });
  }, [accumulatedRings, swapRings.toBeDecreased, swapRings.toBeIncreased]);

  /**
   * Validate skills
   */
  useEffect(() => {
    const newAnswers = { ...answers };
    let changed = false;

    if (
      newAnswers[7] &&
      newAnswers[7].key === "selectSkill" &&
      newAnswers[7].value &&
      accumulatedSkills[newAnswers[7].value] > 1
    ) {
      newAnswers[7] = { key: "selectSkill" };
      addAlert("Выбраный навык в 7м вопросе не может быть выше 1го ранга!");
      changed = true;
    }

    if (
      newAnswers[8] &&
      newAnswers[8].key === "selectSkill" &&
      newAnswers[8].value &&
      accumulatedSkills[newAnswers[8].value] > 3
    ) {
      newAnswers[8] = { key: "selectSkill" };
      addAlert("Выбраный навык в 8м вопросе не может быть выше 3го ранга!");
      changed = true;
    }

    if (newAnswers[17]?.key && accumulatedSkills[newAnswers[17].key] > 1) {
      newAnswers[17].key = "";
      addAlert("Выбраный навык в 17м вопросе не может быть выше 1го ранга!");
      changed = true;
    }

    changed && setAnswer(newAnswers);
  }, [accumulatedSkills]);
}
