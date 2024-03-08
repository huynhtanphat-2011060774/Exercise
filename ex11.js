function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  const celsiusTemperature = 60;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
  
  const fahrenheitTemperature2 = 45;
  const celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);
  console.log(`${fahrenheitTemperature2}°F is ${celsiusTemperature2}°C`);
  