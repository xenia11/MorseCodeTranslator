export function checkIfEnglishOrMorse(code) {
    const lettersAndSpaceRegex = /^[a-zA-Z\s]*$/;

    return lettersAndSpaceRegex.test(code);
}

export default checkIfEnglishOrMorse;
