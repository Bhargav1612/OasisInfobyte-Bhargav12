function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelector = document.getElementById("unitSelector").value;
    let convertedTemperature;
    let unit;

    if (isNaN(temperatureInput)) {
        document.getElementById("convertedTemperature").textContent = "Please enter a valid number.";
        return;
    }

    if (unitSelector === "celsius") {
        convertedTemperature = temperatureInput;
        unit = "°C";
    } else if (unitSelector === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        unit = "°F";
    } else if (unitSelector === "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
        unit = "K";
    }

    document.getElementById("convertedTemperature").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}
