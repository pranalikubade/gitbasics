const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Select a conversion option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n", function(option) {

  rl.question("Enter a length value: ", function(value) {

    // Converting the value to a float
    value = parseFloat(value);

    switch(option) {
      case '1':
        // Feet to Inch
        let feetToInch = value * 12;
        console.log(value + " feet = " + feetToInch + " inches");
        break;
      case '2':
        // Feet to Meter
        let feetToMeter = value * 0.3048;
        console.log(value + " feet = " + feetToMeter + " meters");
        break;
      case '3':
        // Inch to Feet
        let inchToFeet = value / 12;
        console.log(value + " inches = " + inchToFeet + " feet");
        break;
      case '4':
        // Meter to Feet
        let meterToFeet = value / 0.3048;
        console.log(value + " meters = " + meterToFeet + " feet");
        break;
      default:
        console.log("Invalid option!");
    }

    rl.close();
  });
});
