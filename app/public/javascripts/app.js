thermostat = new Thermostat();

// $.get('/', function(data) {
//    thermostat.temperature = @Session["tempsetting"];;
//    }; )


// $('#temp').html(thermostat.temperature);


// refreshDisplay();

var setTemp;

setTemp = $('#temp').text();

thermostat.temperature = parseInt(setTemp);
console.log(thermostat.temperature);

// refreshDisplay();

function refreshDisplay () {
  var temp = $('#temp');
  temp.html(thermostat.temperature);
  temp.css({'color': thermostat.color()});
  $.post('/temperature', { tempsetting: thermostat.temperature });
}

$('#power-save').click(function powerSaveMode(){
  thermostat.powerSaveSwitch();
});

$('#up-button').click(function upTemp() {
  if (thermostat.temperature === 25 && thermostat._powerSave === true ){
    alert("The max temp is 25 with power save on");
  } else if(thermostat.temperature === 32 && thermostat._powerSave === false ) {
    alert("The max temp is 32 with power save off");
  } else {
    thermostat.increase();
    refreshDisplay();
  }
});

$("#down-button").click(function downTemp() {
  thermostat.decrease();
  refreshDisplay();
});

$('#reset').click(function resetTemp() {
  thermostat.reset();
  refreshDisplay();
});

// function weather(){
//   var request = 'http://api.openweathermap.org/data/2.5/weather?q='.concat(city);
//   $.getJSON(request, function(data) {
//     $('#cityweather').html(Math.round(data.main.temp - 273.15));
//     $('#city').html(city);
//     });
//   }
//
// $('#citysubmit').click(function setCity(){
//   city = $('#cityinput').val();
//   weather();
// });
//
// $('#temp').effect(function setCity(){
//   city = $('#cityinput').val();
//   weather();
// });
//
//   weather();
