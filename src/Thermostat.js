var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  return this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  return this.temperature -= 1;
};
