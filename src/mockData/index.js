import { techniquesRouteData } from "@/mockData/techniques";
import { statesRouteData } from "@/mockData/states";
import { stancesRouteData } from "@/mockData/stances";
import { skillsRouteData } from "@/mockData/skills";

export const routeData = {
  ...techniquesRouteData,
  ...statesRouteData,
  ...stancesRouteData,
  ...skillsRouteData,
};
