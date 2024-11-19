import { translations } from "@/mockData/routeData/constants";

export function parseFilters(filters) {
  if (!filters) return false;

  return filters.map((filter) => {
    const subGroups = filter.subGroups?.length
      ? filter.subGroups.map((j) => ({
          label: translations[j],
          checked: true,
          value: j,
        }))
      : [];

    return {
      group: filter.group,
      label: translations[filter.group],
      subGroups,
    };
  });
}
