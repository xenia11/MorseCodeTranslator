import { english } from "../dictionary/english.js";

export function englishToMorse(code) {
    let result = "";
    let errorMsg = "";
    const words = code.toUpperCase().split(/ |\n/);

    for (let index = 0; index < words.length; index++) {
        let word = words[index];

        let letters = word.split("");

        for (const letter of letters) {
            if (
                english[letter] == "undefined" ||
                english[letter] == undefined
            ) {
                errorMsg = "this is not valid code";
                result = "";
                break;
            }
            result += english[letter];
            result += " ";
        }

        if (index < words.length - 1) {
            result += "/ ";
        }
    }

    return [result, errorMsg];
}

export default englishToMorse;
