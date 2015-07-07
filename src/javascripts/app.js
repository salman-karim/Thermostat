thermostat = new Thermostat();

var temp = document.getElementById("temp");

temp.innerHTML = thermostat.temperature;

refreshDisplay();

function refreshDisplay () {
  document.getElementById("temp").innerHTML = thermostat.temperature;
  document.getElementById("temp").style.color = thermostat.color();
}

document.getElementById("power-save").onclick = function(){
  thermostat.powerSaveSwitch();
};

document.getElementById("up-button").onclick = function(){
  if (thermostat.temperature === 25 && thermostat._powerSave === true ){
    alert("The max temp is 25 with power save on");
  } else if(thermostat.temperature === 32 && thermostat._powerSave === false ) {
    alert("The max temp is 32 with power save off");
  } else {
    thermostat.increase();
    refreshDisplay();
  }
};

document.getElementById("down-button").onclick = function(){
  thermostat.decrease();
  refreshDisplay();
};

document.getElementById("reset").onclick = function(){
  thermostat.reset();
  refreshDisplay();
};



// var down = element("down-button");
//
// down.onClick = thermostat.decrease;



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
