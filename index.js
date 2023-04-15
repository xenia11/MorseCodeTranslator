import { checkIfEnglishOrMorse } from "./javascript/englishOrMorse.js";
import elements, {
    createElement,
    addAttribute,
    appendChildElement,
} from "./javascript/elements.js";
import { englishToMorse } from "./javascript/translate.js";
import { morseToEnglish } from "./javascript/translate.js";

document.body.appendChild(elements());

const textInput = document.querySelector("#codeValue");

//func that renders the translation

const translateText = () => {
    const code = textInput.value;
    const isEnglish = checkIfEnglishOrMorse(code);

    if (isEnglish) {
        try {
            const engToMorse = englishToMorse(code);
            document.getElementById("translatedValue").innerHTML = engToMorse;

            document.getElementById("errorMessage").innerHTML = "";
        } catch (e) {
            document.getElementById("errorMessage").innerHTML = e.message;
        }
    } else {
        try {
            const morseToEng = morseToEnglish(code);
            document.getElementById("translatedValue").innerHTML = morseToEng;
            document.getElementById("errorMessage").innerHTML = "";
        } catch (e) {
            document.getElementById("errorMessage").innerHTML = e.message;
        }
    }
};

textInput.addEventListener("input", translateText);

//render footer and the current year

const getCurrentYear = new Date().getFullYear();
const footer = createElement("footer", "footerStyle");
addAttribute(
    footer,
    "innerHTML",
    `Copyright © ${getCurrentYear} Ksenija Lunic`
);

document.body.appendChild(footer);
