import english from "./JSON/english.json" assert { type: "json" };
import morse from "./JSON/morse.json" assert { type: "json" };

const textInput = document.querySelector("#code-value");

const translateText = () => {
    let code = document.getElementById("code-value").value;
    let lettersAndSpaceRegex = /^[a-zA-Z\s]*$/;
    let isEnglish = lettersAndSpaceRegex.test(code);

    if (isEnglish) {
        englishToMorse(code);
    } else {
        morseToEnglish(code);
    }
};

const englishToMorse = (code) => {
    let result = "";
    const words = code.toUpperCase().split(" ");

    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let letters = word.split("");

        for (const letter of letters) {
            if (english[letter] == undefined) {
                document.getElementById("translated-value").innerHTML = "";
                document.getElementById("error-message").innerHTML =
                    "this is not valid code";
                return;
            }
            result += english[letter];
            result += " ";
        }

        if (index < words.length - 1) {
            result += "/ ";
        }
    }

    document.getElementById("translated-value").innerHTML = result;
    document.getElementById("error-message").innerHTML = "";
};

const morseToEnglish = (code) => {
    let result = "";
    const words = code.split(" / ");

    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let letters = word.split(" ");

        for (const letter of letters) {
            if (letter == "") return;
            if (morse[letter] == undefined) {
                document.getElementById("translated-value").innerHTML = "";
                document.getElementById("error-message").innerHTML =
                    "this is not valid code";
                return;
            }
            result += morse[letter];
        }

        if (index < words.length - 1) {
            result += " ";
        }
    }

    document.getElementById("error-message").innerHTML = "";
    document.getElementById("translated-value").innerHTML = result;
};

textInput.addEventListener("input", translateText);
