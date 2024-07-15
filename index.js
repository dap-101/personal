const colorField = document.getElementById("color-field");
const fontSizeField = document.getElementById("font-size-field");
const clickButton = document.getElementById("click-button");
const text1 = document.getElementById("text1");
const checkbox = document.getElementById("checkbox");
const hiddenText = document.getElementById("hidden-text")
const body = document.body;

function buttonPress() {
    // text.innerHTML = "Wow, you actually clicked... stupid";

    body.style.backgroundColor = colorField.value;
    text1.style.fontSize = `${fontSizeField.value}px`; //NOTE the [`] key is above the [Tab] key
    let fail = '${fontSizeField.value0}px' // Apostrophe will not work

}

function loadGame() {
        randomBackgroundColor();
}

function randomBackgroundColor() {
    let random = randInt(0, 359);
    let colorString = `hsl(${random}, 100%, 90%)`;
    body.style.backgroundColor = colorString;
}