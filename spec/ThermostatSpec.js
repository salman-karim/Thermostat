describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('upon creation', function() {

    it('has a default value of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the value', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases the value', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has minimum temperature of 10 degrees', function(){
      thermostat.temperature = 10;
      expect(thermostat.decrease).toMatch("minimum temperature is 10 degrees");
    });





    // it('has a maximum temperature of 32 degrees, when power saving mode is off', function(){
    //   thermostat.powerSave = false;
    //   thermostat.temperature = 32;
    //   expect(thermostat.increase).toMatch("maximum temperature is 32 degrees");

    // });

  });


  describe('power save mode', function(){

    it('has a default of on', function(){
      expect(thermostat._powerSave).toBe(true);
    });

    it('can be turned off', function(){
      thermostat.powerSaveSwitch();
      expect(thermostat._powerSave).toBe(false);
    });

    it('limits the temperature to 25 degrees, when power save mode is on', function(){
      thermostat.temperature = 25;
      expect(thermostat.increase).toMatch("maximum temperature is 25 degrees when power save mode is on");
    });


    it('limits the temperature to 32 degrees, when power save mode is off', function(){
      thermostat.temperature = 32;
      expect(thermostat.increase).toMatch("maximum temperature is 32 degrees when power save mode is off");
    });




  });

});
