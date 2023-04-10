import { morse } from "../dictionary/morse.js";

export function morseToEnglish(code) {
    let result = "";
    let errorMsg = "";
    const splitByNewLine = code.replace(/\n/g, " ");

    const words = splitByNewLine.split(/\s*\/\s*/);

    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        word.replace(/\n/g, "");
        let letters = word.split(" ");

        for (const letter of letters) {
            if (letter == "") break;
            if (morse[letter] == undefined) {
                errorMsg = "this is not valid code";
                result = "";
                break;
            }
            result += morse[letter];
        }

        if (index < words.length - 1) {
            result += " ";
        }
    }

    return [result, errorMsg];
}

export default morseToEnglish;
