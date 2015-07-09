var city;

$('#city').html(city);

function weather(){
  var request = 'http://api.openweathermap.org/data/2.5/weather?q='.concat(city);
  $.getJSON(request, function(data) {
    $('#cityweather').html(Math.round(data.main.temp - 273.15));
    $('#city').html(city);
    });
  }

$('#citysubmit').click(function(){
  city = $('#cityinput').val();
  weather();
});

$('#citysubmit').click(function (){
  var storedCity = 'localhost:9292/city?cityinput='.concat(city);
  console.log(storedCity);
  $.getJSON(storedCity, function(data) {
    city = data.city;
    console.log(city);
  });
  // city = $('#cityinput').val();
  // weather();
});

$('#temp').effect(function setCity(){
  city = $('#cityinput').val();
  weather();
});

weather();


function locationWeather(){
  var requestByCoords = 'http://api.openweathermap.org/data/2.5/weather?'.concat(coords);
  console.log(requestByCoords);
  $.getJSON(requestByCoords, function(data) {
    $('#currentcityweather').html(Math.round(data.main.temp - 273.15));
    });
  }
