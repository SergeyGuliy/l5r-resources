import { useEffect } from "react";

export const urlDataKey = "urlData";

export function useConstructorSetUrl({
  answers,
  swapRings,
  expandedQuestions,
  isMounted,
}) {
  const url = new URL(window.location.href);

  useEffect(() => {
    if (!isMounted) return;
    const urlData = JSON.stringify({
      answers,
      swapRings,
      expandedQuestions,
    });

    url.searchParams.set(urlDataKey, urlData);
    window.history.replaceState({}, "", url);
  }, [answers, expandedQuestions, swapRings, url]);
}
