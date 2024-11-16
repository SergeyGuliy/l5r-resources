import { generateLinkPath } from "@/helpers/generateLinkPath";

import { groups, translations } from "../constants";

import { katas, katasFilterSettings } from "./_kata";
import { ninjutsu, ninjutsuFilterSettings } from "./_ninjutsu";
import {
  ritual,
  ritualFilterSettings,
} from "@/mockData/routeData/techniques/_ritual";
import {
  kiho,
  kihoFilterSettings,
} from "@/mockData/routeData/techniques/_kiho";
import {
  appeal,
  appealFilterSettings,
} from "@/mockData/routeData/techniques/_appeal";
import {
  shuji,
  shujiFilterSettings,
} from "@/mockData/routeData/techniques/_shuji";

export const techniquesRouteData = {
  [groups.techniques]: {
    title: translations.techniques,
    list: { ...appeal, ...katas, ...kiho, ...ninjutsu, ...ritual, ...shuji },
    links: [
      { title: translations.kata, link: generateLinkPath(groups.kata) },
      { title: translations.ninjutsu, link: generateLinkPath(groups.ninjutsu) },
      { title: translations.ritual, link: generateLinkPath(groups.ritual) },
      { title: translations.kiho, link: generateLinkPath(groups.kiho) },
      { title: translations.appeal, link: generateLinkPath(groups.appeal) },
      { title: translations.shuji, link: generateLinkPath(groups.shuji) },
    ],
    filterSettings: [
      katasFilterSettings,
      ninjutsuFilterSettings,
      ritualFilterSettings,
      kihoFilterSettings,
    ],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.appeal]: {
    title: translations.appeal,
    list: appeal,
    links: [],
    filterSettings: [appealFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kata]: {
    title: translations.kata,
    list: katas,
    links: [],
    filterSettings: [katasFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kiho]: {
    title: translations.kiho,
    list: kiho,
    links: [],
    filterSettings: [kihoFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ninjutsu]: {
    title: translations.ninjutsu,
    list: ninjutsu,
    links: [],
    filterSettings: [ninjutsuFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ritual]: {
    title: translations.ritual,
    list: ritual,
    links: [],
    filterSettings: [ritualFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.shuji]: {
    title: translations.shuji,
    list: shuji,
    links: [],
    filterSettings: [shujiFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
};
