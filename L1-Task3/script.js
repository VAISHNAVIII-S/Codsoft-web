const display = document.getElementById('display');

// Append characters to display
function appendChar(char) {
    display.value += char;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
