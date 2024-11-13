import { katas, katasFilterSettings } from "./techniques/_kata";
import { ninjutsu, ninjutsuFilterSettings } from "./techniques/_ninjutsu";
import { translations } from "./constants";
import { ritual, ritualFilterSettings } from "@/mockData/techniques/_ritual";
import { kiho, kihoFilterSettings } from "@/mockData/techniques/_kiho";

export const routeData = {
  techniques: {
    title: translations.techniques,
    list: [...katas, ...kiho, ...ninjutsu, ...ritual],
    links: [
      {
        name: translations.kata,
        link: "/katas",
      },
      {
        name: translations.ninjutsu,
        link: "/ninjutsu",
      },
      {
        name: translations.ritual,
        link: "/ritual",
      },
      {
        name: translations.kiho,
        link: "/kiho",
      },
      // {
      //   name: translations.appeals,
      //   link: "/appeals",
      // },
      // {
      //   name: translations.shuji,
      //   link: "/shuji",
      // },
      //
      // {
      //   name: translations.mahos,
      //   link: "/mahos",
      // },
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
  katas: {
    title: translations.kata,
    list: katas,
    links: [],
    filterSettings: [katasFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  ninjutsu: {
    title: translations.ninjutsu,
    list: ninjutsu,
    links: [],
    filterSettings: [ninjutsuFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  ritual: {
    title: translations.ritual,
    list: ritual,
    links: [],
    filterSettings: [ritualFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  kiho: {
    title: translations.kiho,
    list: kiho,
    links: [],
    filterSettings: [kihoFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
};
