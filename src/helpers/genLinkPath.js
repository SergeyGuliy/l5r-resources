import { transliterate } from "transliteration";
import { replaceCharacter } from "@/helpers/replaceCharacter";

export function myTranslit(text) {
  let toReturn = transliterate(text);

  toReturn = replaceCharacter(toReturn, [
    [" ", "_"],
    [/\(/g, ""],
    [/\)/g, ""],
    [/:/g, ""],
    [/\[/g, ""],
    [/]/g, ""],
  ]);

  return toReturn;
}

export function genLinkPath(slugs, query) {
  const path = typeof slugs === "object" ? `/${slugs.join("/")}` : `/${slugs}`;

  if (!query || !Object.keys(query).length) return path;

  const queryString = Object.entries(query)
    .map(
      ([key, value]) =>
        `${key}=${typeof value === "object" ? JSON.stringify(value) : value}`
    )
    .join("&");

  return `${path}?${queryString}`;
}
