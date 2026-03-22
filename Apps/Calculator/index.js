const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if ("0123456789.+-*/".includes(e.key)) appendToDisplay(e.key);
    if (e.key === "Enter" || e.key === "=") calculate();
    if (e.key === "Backspace") backspace();
    if (e.key === "Escape") clearDisplay();
});
