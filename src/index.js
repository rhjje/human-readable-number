module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 20) {
      return `${units[number]}`;
  } else if (number > 19 && number < 100) {
      return number % 10 === 0 ? `${dozens[Math.trunc(number / 10)]}` : `${dozens[Math.trunc(number / 10)]} ${units[number % 10]}`; 
  } else if (number > 99 && number < 1000) {
      if (number % 100 === 0) {
          return `${units[number / 100]} hundred`;
      } else if (number % 100 < 20) {
          return `${units[Math.trunc(number / 100)]} hundred ${units[number % 100]}`;
      } else if (number % 100 > 19 && (number % 100) % 10 === 0) {
          return `${units[Math.trunc(number / 100)]} hundred ${dozens[(number % 100) / 10]}`;
      } else {
          return `${units[Math.trunc(number / 100)]} hundred ${dozens[Math.trunc((number % 100) / 10)]} ${units[(number % 100) % 10]}`;
      }
      
  }
};







