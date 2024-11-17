import { groups, hiddenSchoolAbilities } from "@/mockData/routeData/constants";
import { _schoolAbilities } from "@/mockData/routeData/techniques/_schoolAbilities/_schoolAbilities";

export const schoolAbilities = _schoolAbilities;

export const schoolAbilitiesFilterSettings = {
  group: groups.schoolAbilities,
  subGroups: [hiddenSchoolAbilities],
};
