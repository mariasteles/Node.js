const celsius = Number(process.argv[2]);

if (isNaN(celsius)) {
  console.log("Por favor, informe uma temperatura válida em Celsius.");
} else {
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  console.log("Celsius: ${celsius}°C");
  console.log("Fahrenheit: ${fahrenheit.toFixed(2)}°F");
  console.log("Kelvin: ${kelvin.toFixed(2)}K");
}