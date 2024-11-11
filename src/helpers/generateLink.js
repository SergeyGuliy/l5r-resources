import {transliterate} from 'transliteration';
import {replaceCharacter} from '@/helpers/replaceCharacter';

export function generateLink(text) {
    let toReturn= transliterate(text);

    toReturn =replaceCharacter(toReturn, [
        [' ', '_'],
        [/\(/g, ''],
        [/\)/g, ''],
    ])

    return toReturn
}