import { englishToMorse } from "../javascript/englishToMorse";

describe("Test cases for a function that takes english text and translates in to morse code", () => {
    it("should convert English text to Morse code when passinig valid string", () => {
        expect(englishToMorse("Hello")).toEqual([".... . .-.. .-.. --- ", ""]);
        expect(englishToMorse("SOS")).toEqual(["... --- ... ", ""]);
        expect(englishToMorse("We need more solders on the front")).toEqual([
            ".-- . / -. . . -.. / -- --- .-. . / ... --- .-.. -.. . .-. ... / --- -. / - .... . / ..-. .-. --- -. - ",
            "",
        ]);
    });

    it("should show error message when the translation is invalid", () => {
        expect(englishToMorse("hello6")).toEqual([
            "",
            "this is not valid code",
        ]);
    });

    it("should return object type", () => {
        expect(typeof englishToMorse("hello world")).toEqual("object");
    });
    it("should return forward slash when empty space is passed", () => {
        expect(englishToMorse(" ")).toEqual(["/ ", ""]);
    });

    it("should return valid result when mix of capital and lower case letters passed", () => {
        expect(englishToMorse("MiX oF CaPiTaL LetTeRs")).toEqual([
            "-- .. -..- / --- ..-. / -.-. .- .--. .. - .- .-.. / .-.. . - - . .-. ... ",
            "",
        ]);
    });
});
