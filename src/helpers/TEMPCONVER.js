import { generateLink } from "@/helpers/generateLink";

export function TEMPCONVER(array, key, skills, subgroup) {
  const obj = Object.fromEntries(
    array.map((i) => {
      const keyof = generateLink(i.title);
      return [keyof, { ...i, key: keyof }];
    })
  );
  console.log(`
import { replaceCharacter } from "@/helpers/replaceCharacter";
import { groups, injectImages } from "@/mockData/routeData/constants";
import { injector } from "@/helpers/injector";
  
const obj = ${JSON.stringify(obj)};

export const ${key} = injector(obj, (original) => ({
  group: ${skills},
  subgroup: ${subgroup},
  description: replaceCharacter(original.description, injectImages),
}));
  `);
  debugger;
}
