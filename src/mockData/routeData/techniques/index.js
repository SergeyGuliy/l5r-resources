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
import {
  schoolAbilities,
  schoolAbilitiesFilterSettings,
} from "@/mockData/routeData/techniques/_schoolAbilities";

const links = [
  {
    key: groups.techniques,
    title: translations.techniques,
    link: generateLinkPath(groups.techniques),
  },
  {
    key: groups.kata,
    title: translations.kata,
    link: generateLinkPath(groups.kata),
  },
  {
    key: groups.ninjutsu,
    title: translations.ninjutsu,
    link: generateLinkPath(groups.ninjutsu),
  },
  {
    key: groups.ritual,
    title: translations.ritual,
    link: generateLinkPath(groups.ritual),
  },
  {
    key: groups.kiho,
    title: translations.kiho,
    link: generateLinkPath(groups.kiho),
  },
  {
    key: groups.appeal,
    title: translations.appeal,
    link: generateLinkPath(groups.appeal),
  },
  {
    key: groups.shuji,
    title: translations.shuji,
    link: generateLinkPath(groups.shuji),
  },
  {
    key: groups.schoolAbilities,
    title: translations.schoolAbilities,
    link: generateLinkPath(groups.schoolAbilities),
  },
];

function linksWIthActive(activeKey) {
  return links.map((i) => {
    return {
      ...i,
      isActive: activeKey === i.key,
    };
  });
}

export const _techniques = {
  ...appeal,
  ...katas,
  ...kiho,
  ...ninjutsu,
  ...ritual,
  ...shuji,
  ...schoolAbilities,
};

export const techniquesRouteData = {
  [groups.techniques]: {
    title: translations.techniques,
    list: _techniques,
    links: linksWIthActive(groups.techniques),
    filterSettings: [
      appealFilterSettings,
      katasFilterSettings,
      kihoFilterSettings,
      ninjutsuFilterSettings,
      ritualFilterSettings,
      shujiFilterSettings,
      schoolAbilitiesFilterSettings,
    ],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.appeal]: {
    title: translations.appeal,
    list: appeal,
    links: linksWIthActive(groups.appeal),
    filterSettings: [appealFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kata]: {
    title: translations.kata,
    list: katas,
    links: linksWIthActive(groups.kata),
    filterSettings: [katasFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kiho]: {
    title: translations.kiho,
    list: kiho,
    links: linksWIthActive(groups.kiho),
    filterSettings: [kihoFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ninjutsu]: {
    title: translations.ninjutsu,
    list: ninjutsu,
    links: linksWIthActive(groups.ninjutsu),
    filterSettings: [ninjutsuFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ritual]: {
    title: translations.ritual,
    list: ritual,
    links: linksWIthActive(groups.ritual),
    filterSettings: [ritualFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.shuji]: {
    title: translations.shuji,
    list: shuji,
    links: linksWIthActive(groups.shuji),
    filterSettings: [shujiFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.schoolAbilities]: {
    title: translations.schoolAbilities,
    list: schoolAbilities,
    links: linksWIthActive(groups.schoolAbilities),
    filterSettings: [schoolAbilitiesFilterSettings],
    useTechLvls: false,
    useSearch: true,
  },
};
