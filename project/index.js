const colorField = document.getElementById("color-field");
const fontSizeField = document.getElementById("font-size-field");
const clickButton = document.getElementById("click-button");
const text1 = document.getElementById("text1")
const body = document.body;

function buttonPress() {
    text.innerHTML = "Yayyy you personilized the page!!!"

    body.style.backgroundColor = colorField.ariaValueMax;
    text.style.fontSize = `${fontSizeField.value}px`;
    let fail = '${fontSizeField.value0}px'
}