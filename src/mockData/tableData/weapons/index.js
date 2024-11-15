import { range } from "@/mockData/tableData/weapons/_range";
import { unarmed } from "@/mockData/tableData/weapons/_unarmed";
import { special } from "@/mockData/tableData/weapons/_special";
import { melee } from "@/mockData/tableData/weapons/_melee";

export const weapons = [...melee, ...unarmed, ...special, ...range];
