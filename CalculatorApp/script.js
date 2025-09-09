let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
    animateButton(value);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Optional: animate background color when a button is pressed
function animateButton(value) {
    document.body.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #74ebd5, #ACB6E5)';
    }, 200);
}
