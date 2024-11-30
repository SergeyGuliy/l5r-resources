import { transliterate } from "transliteration";
import { replaceCharacter } from "@/helpers/replaceCharacter";

export function genLinkPath(text) {
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