thermostat = new Thermostat();

var temp = document.getElementById("temp");

temp.innerHTML = thermostat.temperature;

var up = element("up-button");

up.onClick = thermostat.increase;

var down = element("down-button");

down.onClick = thermostat.decrease();

// function myFunction() {
//   document.getElementById("temp").innerHTML = thermostat.temperature;
// }

// function increase() {
//   document.getElementById("temp").innerHTML = thermostat.increase();
// }
//




// function myFunction() {
//   document.getElementById("temp").innerHTML = thermostat.temperature;
//
// }
