import { checkIfEnglishOrMorse } from "./javascript/englishOrMorse.js";
import elements, {
    createElement,
    addAttribute,
    appendChildElement,
} from "./javascript/elements.js";
import englishToMorse from "./javascript/englishToMorse.js";
import morseToEnglish from "./javascript/morseToEnglish.js";

document.body.appendChild(elements());

const textInput = document.querySelector("#codeValue");

//func that renders the translation

const translateText = () => {
    const code = textInput.value;
    const isEnglish = checkIfEnglishOrMorse(code);

    if (isEnglish) {
        const engToMorse = englishToMorse(code);
        document.getElementById("translatedValue").innerHTML = engToMorse[0];
        document.getElementById("errorMessage").innerHTML = engToMorse[1];
    } else {
        const morseToEng = morseToEnglish(code);
        document.getElementById("translatedValue").innerHTML = morseToEng[0];
        document.getElementById("errorMessage").innerHTML = morseToEng[1];
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
