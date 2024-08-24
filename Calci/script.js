let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    display.innerText += value;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendToDisplay(key);
    }
});
