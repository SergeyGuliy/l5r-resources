import {katas} from '@/data/_katas/_katas';
import {kataGroups, techGroups, techTranslations} from '@/data/groups';
import {ninjutsu} from '@/data/_ninjutsu/_ninjutsu';


export const routeData = {
    techniques: {
        title: techTranslations.techniques,
        list: [
            ...katas,
            ...ninjutsu,
        ],
        links: [
            {
                name: techTranslations.kata,
                link: '/techniques/katas',
            },
            {
                name: techTranslations.kihos,
                link: '/techniques/kihos',
            },
            {
                name: techTranslations.appeals,
                link: '/techniques/appeals',
            },
            {
                name: techTranslations.rituals,
                link: '/techniques/rituals',
            },
            {
                name: techTranslations.shuji,
                link: '/techniques/shuji',
            },
            {
                name: techTranslations.mahos,
                link: '/techniques/mahos',
            },
            {
                name: techTranslations.ninjutsu,
                link: '/techniques/ninjutsu',
            },
        ]
    },
    katas: {
        title: techTranslations.kata,
        list: katas,
        links: [],
        filterSettings: [{
            techGroup: techGroups.kata,
            subGroups: Object.keys(kataGroups)
        }],
        useTechLvls: true
    },
    ninjutsu: {
        title: techTranslations.ninjutsu,
        list: ninjutsu,
        links: [],
        filterSettings: [{
            techGroup: techGroups.ninjutsu,
        }],
        useTechLvls: true
    },
}