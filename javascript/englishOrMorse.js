export function checkIfEnglishOrMorse(code) {
    const lettersAndSpaceRegex = /^.*[a-zA-Z]+.*$/;

    return lettersAndSpaceRegex.test(code);
}

export default checkIfEnglishOrMorse;
