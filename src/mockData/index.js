import { techniquesRouteData } from "@/mockData/techniques";
import { statesRouteData } from "@/mockData/states";

console.log(techniquesRouteData);
console.log(statesRouteData);
export const routeData = { ...techniquesRouteData, ...statesRouteData };
