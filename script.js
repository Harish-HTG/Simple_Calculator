document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonValue = this.value;

            if (buttonValue === 'AC') {
                display.value = '';
            }
            else if (buttonValue === 'DE') {
                display.value = display.value.slice(0, -1);
            }
            else if (buttonValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            else if (buttonValue === 'X') {
                display.value += '*'
            }
            else if (buttonValue === '÷') {
                display.value += '/'
            }
            else {
                display.value += buttonValue;
            }
        });
    });
});