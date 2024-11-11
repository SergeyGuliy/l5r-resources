import {katas, katasFilterSettings} from './_katas';
import {ninjutsu, ninjutsuFilterSettings} from './_ninjutsu';
import {translations} from './groups';


export const routeData = {
    techniques: {
        title: translations.techniques,
        list: [
            ...katas,
            ...ninjutsu,
        ],
        links: [
            {
                name: translations.kata,
                link: '/techniques/katas',
            },
            {
                name: translations.kihos,
                link: '/techniques/kihos',
            },
            {
                name: translations.appeals,
                link: '/techniques/appeals',
            },
            {
                name: translations.rituals,
                link: '/techniques/rituals',
            },
            {
                name: translations.shuji,
                link: '/techniques/shuji',
            },
            {
                name: translations.mahos,
                link: '/techniques/mahos',
            },
            {
                name: translations.ninjutsu,
                link: '/techniques/ninjutsu',
            },
        ],
        filterSettings: [katasFilterSettings, ninjutsuFilterSettings],
        useTechLvls: true
    },
    katas: {
        title: translations.kata,
        list: katas,
        links: [],
        filterSettings: [katasFilterSettings],
        useTechLvls: true
    },
    ninjutsu: {
        title: translations.ninjutsu,
        list: ninjutsu,
        links: [],
        filterSettings: [ninjutsuFilterSettings],
        useTechLvls: true
    },
}