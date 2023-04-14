function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;
  
    if (fromUnit === "Celsius") {
      if (toUnit === "Fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
      } else if (toUnit === "Kelvin") {
        result = parseFloat(temperatureInput) + 273.15;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnit === "Fahrenheit") {
      if (toUnit === "Celsius") {
        result = (temperatureInput - 32) * 5/9;
      } else if (toUnit === "Kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnit === "Kelvin") {
      if (toUnit === "Celsius") {
        result = temperatureInput - 273.15;
      } else if (toUnit === "Fahrenheit") {
        result = (temperatureInput - 273.15) * 9/5 + 32;
      } else {
        result = temperatureInput;
      }
    }
  
    document.getElementById("result").innerHTML = `${temperatureInput} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
  }
  