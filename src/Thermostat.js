var Thermostat = function(){
  this.temperature = 20;
  this._powerSave = true;
};

Thermostat.prototype.increase = function() {
  if(this.temperature === 25 && this._powerSave === true) {
    return "maximum temperature is 25 degrees when power save mode is on";
  } else if (this.temperature === 32 && this._powerSave === false) {
    return "maximum temperature is 32 degrees when power save mode is off";
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

Thermostat.prototype.powerSaveSwitch = function() {
  this._powerSave = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;

};
