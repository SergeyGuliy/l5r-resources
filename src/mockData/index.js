import { katas, katasFilterSettings } from "./techniques/_katas";
import { ninjutsu, ninjutsuFilterSettings } from "./techniques/_ninjutsu";
import { translations } from "./constants";
import { rituals, ritualsFilterSettings } from "@/mockData/techniques/_rituals";

export const routeData = {
  techniques: {
    title: translations.techniques,
    list: [...katas, ...ninjutsu],
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
        name: translations.rituals,
        link: "/rituals",
      },

      // {
      //   name: translations.kihos,
      //   link: "/kihos",
      // },
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
    filterSettings: [katasFilterSettings, ninjutsuFilterSettings],
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
  rituals: {
    title: translations.rituals,
    list: rituals,
    links: [],
    filterSettings: [ritualsFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
};
