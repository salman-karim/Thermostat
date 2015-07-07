var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  if(this.temperature === 25) {
    return "maximum temperature is 25 degrees";
  } else {
    return this.temperature += 1;
  }
};

Thermostat.prototype.decrease = function() {
  if(this.temperature === 10) {
    return "minimum temperature is 10 degrees";
  } else {
    return this.temperature -= 1;
  }
};
