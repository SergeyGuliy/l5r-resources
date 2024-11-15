import { range } from "@/mockData/weapons/_range";
import { unarmed } from "@/mockData/weapons/_unarmed";
import { special } from "@/mockData/weapons/_special";
import { melee } from "@/mockData/weapons/_melee";

export const weapons = [...melee, ...unarmed, ...special, ...range];
