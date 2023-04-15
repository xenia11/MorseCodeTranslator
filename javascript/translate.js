import { english } from "../dictionary/english.js";
import { morse } from "../dictionary/morse.js";

class TranslationError extends Error {
    constructor(...args) {
        super(...args);
    }
}

export function translate(string, mapping, splitDelimeter, joinDelimeter) {
    let errorChars = [];

    const result = string
        .trim()
        .split(splitDelimeter)
        .map((letter) => {
            if (letter == "") return;
            const phrase = mapping[letter.toUpperCase()];

            if (phrase === undefined) {
                errorChars.push(letter);
                return;
            }

            return phrase;
        })
        .filter((phrase) => phrase !== undefined)
        .join(joinDelimeter);

    if (errorChars.length > 0) {
        throw new Error(
            `These characters are not supported: ${errorChars.join("")}`
        );
    }

    return result;
}

export function englishToMorse(code, mapping = english) {
    return translate(code, mapping, "", " ");
}

export function morseToEnglish(code, mapping = morse) {
    return translate(code, mapping, " ", "");
}
