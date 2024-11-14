import { translations } from "@/mockData/constants";

export function parseFilters(filters) {
  if (!filters) return false;

  return filters.map((i) => ({
    group: i.group,
    label: translations[i.group],
    subGroups: i.subGroups?.length
      ? i.subGroups.map((j) => ({
          label: translations[j],
          checked: true,
          value: j,
        }))
      : [],
  }));
}
