import { range } from "@/mockData/tables/weapons/_range";
import { unarmed } from "@/mockData/tables/weapons/_unarmed";
import { special } from "@/mockData/tables/weapons/_special";
import { melee } from "@/mockData/tables/weapons/_melee";

export const weapons = [...melee, ...unarmed, ...special, ...range];
