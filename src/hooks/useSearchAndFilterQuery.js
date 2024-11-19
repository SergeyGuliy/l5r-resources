import { parseFilters } from "@/helpers/parseFilters";
import { useState } from "react";

const search = "search";
const filters = "filters";

export function useSearchAndFilterQuery(defaultFilters) {
  const params = new URLSearchParams(window.location.search);
  const url = new URL(window.location.href);

  const getQueryGet = (key) => JSON.parse(params.get(key));

  function setQuery(key, value) {
    url.searchParams.set(key, JSON.stringify(value));
    window.history.replaceState({}, "", url);
  }

  function getQueryFilters() {
    return getQueryGet(filters);
  }

  return {
    getQuerySearch: () => getQueryGet(search) || "",
    getQueryFilters,
    setQuerySearch: (value) => setQuery(search, value),
    setQueryFilters: (value) => setQuery(filters, value),
  };
}
