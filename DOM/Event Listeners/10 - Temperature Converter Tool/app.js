(function () {
  const tempInput = document.getElementById('temperature');
  const celsiusBtn = document.getElementById('toCelsius');
  const fahrenheitBtn = document.getElementById('toFahrenheit');
  const output = document.getElementById('output');
  celsiusBtn.addEventListener('click', function () {
    const tempVal = parseFloat(tempInput.value);
    console.log(tempVal);
    const fahrenheit = (tempVal * 1.8 + 32).toFixed(2);
    output.innerHTML = `The current Temperature is ${tempVal} °C and in Fahrenheit it's ${fahrenheit} °F`;
  });
  fahrenheitBtn.addEventListener('click', function () {
    const tempVal = parseFloat(tempInput.value);
    const fahrenheit = (tempVal * 1.8 + 32).toFixed(2);
    output.innerHTML = `The current Temperature is ${fahrenheit} °F and in Celsius it's ${tempVal} °C`;
  });
})();
