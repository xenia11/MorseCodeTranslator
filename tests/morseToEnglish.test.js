import { morseToEnglish } from "../javascript/morseToEnglish";

describe("Morse code to english", () => {
    it("should return empty string when passed forward slash", () => {
        expect(morseToEnglish("/")).toEqual([" ", ""]);
    });
});
