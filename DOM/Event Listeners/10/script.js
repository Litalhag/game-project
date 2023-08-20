(function () {
  return (function () {
    const input = document.getElementById("temperature");
    const toCelsius = document.getElementById("toCelsius");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const displayArea = document.getElementById("output");
    toCelsius.addEventListener("click", function () {
      const temperature = ((parseFloat(input.value) - 32) / 1.8).toFixed(2);
      displayArea.innerText = `${input.value} Fahrenheit is ${temperature} Celsius`;
    });
    toFahrenheit.addEventListener("click", function () {
      const temperature = (parseFloat(input.value) * 1.8 + 32).toFixed(2);
      displayArea.innerText = `${input.value} Celsius is ${temperature} Fahrenheit`;
    });
  })();
})();
