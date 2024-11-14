import { techniquesRouteData } from "@/mockData/routeData/techniques";
import { statesRouteData } from "@/mockData/routeData/states";
import { stancesRouteData } from "@/mockData/routeData/stances";
import { skillsRouteData } from "@/mockData/routeData/skills";

export const routeData = {
  ...techniquesRouteData,
  ...statesRouteData,
  ...stancesRouteData,
  ...skillsRouteData,
};
