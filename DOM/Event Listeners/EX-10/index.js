(function () {
  const input = document.getElementById("temperature");
  const buttonToCelsius = document.getElementById("toCelsius");
  const buttonToFahrenheit = document.getElementById("toFahrenheit");
  const output = document.getElementById("output");

  buttonToCelsius.addEventListener("click", function () {
    const inputValue = parseFloat(input.value);
    const converted = ((inputValue - 32) / 1.8).toFixed(2);
    output.innerHTML = `${inputValue} °F is:  ${converted} in °C`;
  });

  buttonToFahrenheit.addEventListener("click", function () {
    const inputValue = parseFloat(input.value);
    const convertedToF = (inputValue * 1.8 + 32).toFixed(2);
    output.innerHTML = `${inputValue} °C is : ${convertedToF} in °F`;
  });
})();
