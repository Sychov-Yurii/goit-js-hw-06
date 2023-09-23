function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");
const bodyEl = document.body;

changeColorEl.addEventListener("click", onBtnClick)

function onBtnClick () {
    const randomColor = getRandomHexColor();
    bodyEl.style.background = randomColor;
    colorEl.textContent = randomColor;
}



