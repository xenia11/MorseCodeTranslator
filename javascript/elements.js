//func that creates a new element

export function createElement(element, classname) {
    const el = document.createElement(element);
    el.className = classname;
    return el;
}

//func that append a child to a parent

export function appendChildElement(parent, child) {
    return parent.appendChild(child);
}

//func that adds attribute to ana element

export function addAttribute(el, attribute, content) {
    return (el[attribute] = content);
}

//func that render all elements
export function elements() {
    const placeholderMessage =
        "Type your message here: normal text or Morse code using '.', '-' or '_', separating letters by spaces and words by '/'.";

    const mainDiv = createElement("div", "main-container");
    const header = createElement("h2", "main-container main-container__header");
    const childDiv = createElement("div", "main-container main-container__div");
    const childDivParaOne = createElement(
        "p",
        "main-container main-container__div main-container__div--para"
    );
    const childDivParaTwo = createElement(
        "p",
        "main-container main-container__div main-container__div--para"
    );
    const textArea = createElement(
        "textarea",
        "main-container main-container__textArea"
    );
    const footer = createElement("footer", "footer");

    addAttribute(childDivParaOne, "id", "translatedValue");
    addAttribute(childDivParaTwo, "id", "errorMessage");
    addAttribute(textArea, "id", "codeValue");
    addAttribute(textArea, "placeholder", placeholderMessage);
    addAttribute(textArea, "rows", 4);
    addAttribute(textArea, "cols", 100);
    addAttribute(header, "textContent", "Morse Code Translator");
    addAttribute(footer, "id", "footer");

    appendChildElement(mainDiv, header);
    appendChildElement(mainDiv, textArea);
    appendChildElement(mainDiv, childDiv);
    appendChildElement(childDiv, childDivParaOne);
    appendChildElement(childDiv, childDivParaTwo);

    return mainDiv;
}

export default elements;
