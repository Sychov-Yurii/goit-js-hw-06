const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", function() {
    const fontSize = fontSizeControl.value;
    text.style.fontSize = `${fontSize}px`;
    
})
