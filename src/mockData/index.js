import { translations } from "./constants";

import { katas, katasFilterSettings } from "./techniques/_kata";
import { ninjutsu, ninjutsuFilterSettings } from "./techniques/_ninjutsu";
import { ritual, ritualFilterSettings } from "@/mockData/techniques/_ritual";
import { kiho, kihoFilterSettings } from "@/mockData/techniques/_kiho";
import { appeal, appealFilterSettings } from "@/mockData/techniques/_appeal";
import { shuji, shujiFilterSettings } from "@/mockData/techniques/_shuji";

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
      {
        name: translations.appeal,
        link: "/appeal",
      },
      {
        name: translations.shuji,
        link: "/shuji",
      },

      // {
      //   name: translations.maho,
      //   link: "/maho",
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
  appeal: {
    title: translations.appeal,
    list: appeal,
    links: [],
    filterSettings: [appealFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  shuji: {
    title: translations.shuji,
    list: shuji,
    links: [],
    filterSettings: [shujiFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
};
