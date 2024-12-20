import { techniquesRouteData } from "@/mockData/routeData/techniques";
import { statesRouteData } from "@/mockData/routeData/states";
import { stancesRouteData } from "@/mockData/routeData/stances";
import { skillsRouteData } from "@/mockData/routeData/skills";
import { bushidoRouteData } from "@/mockData/routeData/bushido";
import { weapArmPropRouteData } from "@/mockData/routeData/weaponsAndArmorProperties";
import { otherRouteData } from "@/mockData/routeData/other/otherRouteData";
import { familiesRouteData } from "@/mockData/clansFamiliesSchools/families";
import { clansRouteData } from "@/mockData/clansFamiliesSchools/clans";
import { schoolsRouteData } from "@/mockData/clansFamiliesSchools/schools";
import { terrainRouteData } from "@/mockData/routeData/terrain";
import { conflictActionsRouteData } from "@/mockData/routeData/conflictActions";

export const routeData = {
  ...techniquesRouteData,
  ...statesRouteData,
  ...stancesRouteData,
  ...skillsRouteData,
  ...bushidoRouteData,
  ...weapArmPropRouteData,
  ...otherRouteData,
  ...clansRouteData,
  ...familiesRouteData,
  ...schoolsRouteData,
  ...terrainRouteData,
  ...conflictActionsRouteData,
};
