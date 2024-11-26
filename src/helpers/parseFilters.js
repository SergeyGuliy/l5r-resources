import { text } from "@/mockData/routeData/constants";

export function parseFilters(filters) {
  if (!filters) return false;

  return filters.map((filter) => {
    const subGroups = filter.subGroups?.length
      ? filter.subGroups.map((j) => ({
          label: text[j],
          checked: true,
          value: j,
        }))
      : [];

    return {
      group: filter.group,
      label: text[filter.group],
      subGroups,
    };
  });
}
