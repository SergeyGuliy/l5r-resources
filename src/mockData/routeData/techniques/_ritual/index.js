import { hiddenRitualsTrue, groups } from "@/mockData/routeData/constants";
import { _ritual } from "@/mockData/routeData/techniques/_ritual/_ritual";

export const ritual = _ritual;

export const ritualFilterSettings = {
  group: groups.ritual,
  subGroups: [hiddenRitualsTrue],
};
