import { useEffect, useState } from "react";
import { urlDataKey } from "@/hooks/useConstructorSetUrl";
import {
  _answers,
  _swapRings,
} from "@/components/answer-question/_questionsAndAnswers";

export function useConstructorGetUrlData() {
  const params = new URLSearchParams(window.location.search);

  const [isMounted, setIsMounted] = useState(false);
  const [answers, setAnswer] = useState(_answers);
  const [swapRings, setSwapRings] = useState(_swapRings);
  const [expandedQuestions, setExpandedQuestions] = useState(false);

  useEffect(() => {
    try {
      const data = JSON.parse(params.get(urlDataKey));
      console.log(data?.answers);
      setAnswer(data?.answers || _answers);
      setSwapRings(data?.swapRings || _swapRings);
      setExpandedQuestions(data?.expandedQuestions || false);
    } catch {
      setAnswer(_answers);
      setSwapRings(_swapRings);
      setExpandedQuestions(false);
    }
    setIsMounted(true);
  }, []);

  return {
    isMounted,
    answers,
    setAnswer,
    swapRings,
    setSwapRings,
    expandedQuestions,
    setExpandedQuestions,
  };
}
