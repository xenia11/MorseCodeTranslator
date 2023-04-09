import { morseToEnglish } from "../javascript/morseToEnglish";

describe("Morse code to english", () => {
    it("should return valid english letters result when passed morse code", () => {
        expect(
            morseToEnglish("-... . .- ..- - .. ..-. ..- .-.. / -.. .- -.--")
        ).toEqual(["beautiful day", ""]);
    });
    it("should return empty space when passed forward slash", () => {
        expect(morseToEnglish("/")).toEqual([" ", ""]);
    });
    it("should return error when english letter passed", () => {
        expect(morseToEnglish("ab")).toEqual(["", "this is not valid code"]);
    });
    it("should return error when passed mix of morse code and english letters", () => {
        expect(morseToEnglish(".- a")).toEqual(["", "this is not valid code"]);
    });
});
