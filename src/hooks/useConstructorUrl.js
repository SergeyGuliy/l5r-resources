import { useEffect } from "react";

export const urlDataKey = "urlData";

export function useConstructorUrl({ answers, swapRings, expandedQuestions }) {
  const url = new URL(window.location.href);

  useEffect(() => {
    const urlData = JSON.stringify({
      answers,
      swapRings,
      expandedQuestions,
    });

    url.searchParams.set(urlDataKey, urlData);
    window.history.replaceState({}, "", url);
  }, [answers, expandedQuestions, swapRings, url]);
}
