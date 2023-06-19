const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", borderColor);
inputEl.classList.remove("invalid", 'valid')
function borderColor() {
    const inputValidEl = Number(inputEl.dataset.length);
    const inputInvalidEl = inputEl.value.length;

    if (inputInvalidEl === inputValidEl) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
 
}