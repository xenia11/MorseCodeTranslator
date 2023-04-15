import { morseToEnglish, englishToMorse } from "../javascript/translate.js";
import { morse } from "../dictionary/morse.js";
import { english } from "../dictionary/english.js";

describe("Translate morse to english or viceversa", () => {
    // Test for englishToMorse function
    test("englishToMorse translates English string to Morse code", () => {
        const input = "HELLO";
        const expectedOutput = ".... . .-.. .-.. ---";
        const result = englishToMorse(input, english);
        expect(result).toEqual(expectedOutput);
    });

    test("englishToMorse returns empty string for empty input", () => {
        const input = "";
        const expectedOutput = "";
        const result = englishToMorse(input, english);
        expect(result).toEqual(expectedOutput);
    });

    test("englishToMorse throws error for unsupported characters", () => {
        const input = "HELLO123";
        expect(() => englishToMorse(input, english)).toThrow(
            "These characters are not supported: 123"
        );
    });

    // Test for morseToEnglish function
    test("morseToEnglish translates Morse code to English string", () => {
        const input = ".... . .-.. .-.. ---";
        const expectedOutput = "hello";
        const result = morseToEnglish(input, morse);
        expect(result).toEqual(expectedOutput);
    });

    test("morseToEnglish returns empty string for empty input", () => {
        const input = "";
        const expectedOutput = "";
        const result = morseToEnglish(input, morse);
        expect(result).toEqual(expectedOutput);
    });

    test("morseToEnglish throws error for unsupported characters", () => {
        const input = ".... . .-.. .-.. --- 123";
        expect(() => morseToEnglish(input, morse)).toThrow(
            "These characters are not supported: 123"
        );
    });
});
