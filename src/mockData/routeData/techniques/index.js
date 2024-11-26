import { genLinkPath } from "@/helpers/genLinkPath";

import { groups, text } from "../constants";

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
    title: text.techniques,
    link: genLinkPath(groups.techniques),
  },
  {
    key: groups.kata,
    title: text.kata,
    link: genLinkPath(groups.kata),
  },
  {
    key: groups.ninjutsu,
    title: text.ninjutsu,
    link: genLinkPath(groups.ninjutsu),
  },
  {
    key: groups.ritual,
    title: text.ritual,
    link: genLinkPath(groups.ritual),
  },
  {
    key: groups.kiho,
    title: text.kiho,
    link: genLinkPath(groups.kiho),
  },
  {
    key: groups.appeal,
    title: text.appeal,
    link: genLinkPath(groups.appeal),
  },
  {
    key: groups.shuji,
    title: text.shuji,
    link: genLinkPath(groups.shuji),
  },
  {
    key: groups.schoolAbilities,
    title: text.schoolAbilities,
    link: genLinkPath(groups.schoolAbilities),
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
    title: text.techniques,
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
    title: text.appeal,
    list: appeal,
    links: linksWIthActive(groups.appeal),
    filterSettings: [appealFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kata]: {
    title: text.kata,
    list: katas,
    links: linksWIthActive(groups.kata),
    filterSettings: [katasFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.kiho]: {
    title: text.kiho,
    list: kiho,
    links: linksWIthActive(groups.kiho),
    filterSettings: [kihoFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ninjutsu]: {
    title: text.ninjutsu,
    list: ninjutsu,
    links: linksWIthActive(groups.ninjutsu),
    filterSettings: [ninjutsuFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.ritual]: {
    title: text.ritual,
    list: ritual,
    links: linksWIthActive(groups.ritual),
    filterSettings: [ritualFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.shuji]: {
    title: text.shuji,
    list: shuji,
    links: linksWIthActive(groups.shuji),
    filterSettings: [shujiFilterSettings],
    useTechLvls: true,
    useSearch: true,
  },
  [groups.schoolAbilities]: {
    title: text.schoolAbilities,
    list: schoolAbilities,
    links: linksWIthActive(groups.schoolAbilities),
    filterSettings: [schoolAbilitiesFilterSettings],
    useTechLvls: false,
    useSearch: true,
  },
};
