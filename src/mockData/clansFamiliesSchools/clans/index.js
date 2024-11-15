import { rings } from "@/mockData/otherData/rings";
import { skills } from "@/mockData/routeData/skills";

export const clans = [
  {
    title: "Клан Краба",
    ringIncrease: [rings.earth],
    skillIncrease: [skills.find((i) => i.title === "Физическая подготовка")],
    startStatus: 30,
    descriptionAbout: `
<p></p>
    `,
    descriptionCulture: `
<p></p>
    `,
    descriptionBushido: `
<p></p>
    `,
    insignificantBushido: "",
    importantBushido: "",
  },
];
