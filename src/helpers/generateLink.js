import {transliterate} from 'transliteration';

export function generateLink(text) {
    return transliterate(text)
}