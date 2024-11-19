const search = "search";
const filters = "filters";

export function useSearchAndFilterQuery() {
  const params = new URLSearchParams(window.location.search);
  const url = new URL(window.location.href);

  const getQueryGet = (key) => {
    try {
      return JSON.parse(params.get(key));
    } catch {
      return params.get(key);
    }
  };

  function setQuery(key, value) {
    const newVal = typeof value === "object" ? JSON.stringify(value) : value;

    url.searchParams.set(key, newVal);
    window.history.replaceState({}, "", url);
  }

  return {
    getQuerySearch: () => getQueryGet(search) || "",
    getQueryFilters: () => getQueryGet(filters),
    setQuerySearch: (value) => setQuery(search, value),
    setQueryFilters: (value) => setQuery(filters, value),
  };
}
