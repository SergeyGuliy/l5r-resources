import {iconOpportunity} from '@/components/MyIcon';

export function replaceCharacter(originString) {
    let newString= originString;

    Object.entries({
        Y: iconOpportunity
    }).map(([key, img]) => (newString = newString.replace(new RegExp(key, 'g'), img)))

    return newString
}