import {replaceCharacter} from '@/helpers/replaceCharacter';
import {generateLink} from '@/helpers/generateLink';

import {hiddenTrue, techGroups} from '@/mockData/groups';
import {_ninjutsu} from '@/mockData/_ninjutsu/_ninjutsu';

export const ninjutsu = _ninjutsu.map(kata => ({
    ...kata,
    description: replaceCharacter(kata.description),
    subgroup: hiddenTrue,
    group: techGroups.ninjutsu,
    link: generateLink(kata.name)
}))

export const ninjutsuFilterSettings = {
    techGroup: techGroups.ninjutsu,
    subGroups: [hiddenTrue]
}