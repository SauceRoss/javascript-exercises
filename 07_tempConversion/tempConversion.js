const convertToCelsius = function(tempF) {
  let celsius = 5/9 * (tempF - 32);
  celsius = parseFloat(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(tempC) {
  let f = (9/5 * tempC) + 32;
  f = parseFloat(f.toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
