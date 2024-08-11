function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').value = '';
        return;
    }
    let celsiusValue;
    if (inputUnit === 'Celsius') {
        celsiusValue = inputValue;
    } else if (inputUnit === 'Fahrenheit') {
        celsiusValue = (inputValue - 32) * 5/9;
    } else if (inputUnit === 'Kelvin') {
        celsiusValue = inputValue - 273.15;
    }

    if (outputUnit === 'Celsius') {
        outputValue = celsiusValue;
    } else if (outputUnit === 'Fahrenheit') {
        outputValue = (celsiusValue * 9/5) + 32;
    } else if (outputUnit === 'Kelvin') {
        outputValue = celsiusValue + 273.15;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}