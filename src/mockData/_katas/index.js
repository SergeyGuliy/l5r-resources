import {generateLink} from '@/helpers/generateLink';
import {replaceCharacter} from '@/helpers/replaceCharacter';

import {injectImages, kataGroups, techGroups} from '@/mockData/constants';
import {_kataGeneral} from '@/mockData/_katas/_kataGeneral';
import {_kataMelee} from '@/mockData/_katas/_kataMelee';
import {_kataRange} from '@/mockData/_katas/_kataRange';

export const katas = [
    ..._kataGeneral.map(kata => ({
        ...kata,
        subgroup: kataGroups.kataGeneral,
    })),
    ..._kataMelee.map(kata => ({
        ...kata,
        subgroup: kataGroups.kataMelee,
    })),
    ..._kataRange.map(kata => ({
        ...kata,
        subgroup: kataGroups.kataRange,
    })),
].map(kata => ({
    ...kata,
    description: replaceCharacter(kata.description, injectImages),
    group: techGroups.kata,
    link: generateLink(kata.name)
}))

export const katasFilterSettings = {
    techGroup: techGroups.kata,
    subGroups: Object.keys(kataGroups)
}