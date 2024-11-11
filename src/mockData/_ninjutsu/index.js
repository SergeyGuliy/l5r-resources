import {replaceCharacter} from '@/helpers/replaceCharacter';
import {generateLink} from '@/helpers/generateLink';

import {hiddenTrue, injectImages, techGroups} from '@/mockData/constants';
import {_ninjutsu} from '@/mockData/_ninjutsu/_ninjutsu';

export const ninjutsu = _ninjutsu.map(kata => ({
    ...kata,
    description: replaceCharacter(kata.description, injectImages),
    subgroup: hiddenTrue,
    group: techGroups.ninjutsu,
    link: generateLink(kata.name)
}))

export const ninjutsuFilterSettings = {
    techGroup: techGroups.ninjutsu,
    subGroups: [hiddenTrue]
}