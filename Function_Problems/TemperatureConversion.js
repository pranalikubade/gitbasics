const prompt = require("prompt-sync")();

var degF = 0.00;
var degC = 0.00;

console.log(" 1. degC to degF :: "+'\n'+" 2. degF to degC :: "+'\n');
var option = prompt(" Enter Option :: ");
switch (option) {
    case "1":
        var temperature = prompt(" Enter Temperature in degC :: ");
        convertTemperatureToDegF(temperature);
        break;
    case "2":
        var temperature = prompt(" Enter Temperature in degF :: ");
        convertTemperatureToDegC(temperature);
        break;
        console.log(" ----- Invalid Input ------ ");
    default:
}

function convertTemperatureToDegC(temperature){
    degC = (temperature - 32) * (5/9); 
    console.log(" degF :: " + temperature + " to degC :: " + degC+ " Celsius");
}
function convertTemperatureToDegF(temperature){
    degF = (temperature * (9/5)) + 32;
     console.log(" degC :: " + temperature + " to degF :: " + degF+" Fahrenheit");
}