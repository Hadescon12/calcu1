function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateTrig(func) {
    const display = document.getElementById('display');
    try {
        const value = parseFloat(display.value);
        switch (func) {
            case 'sin':
                display.value = Math.sin(value).toFixed(5);
                break;
            case 'cos':
                display.value = Math.cos(value).toFixed(5);
                break;
            case 'tan':
                display.value = Math.tan(value).toFixed(5);
                break;
            default:
                display.value = 'Error';
        }
    } catch {
        display.value = 'Error';
    }
}
