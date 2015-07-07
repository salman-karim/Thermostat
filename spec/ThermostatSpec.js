describe('Thermostat', function() {

  var thermostat;

  describe('upon creation', function() {

    it('has a default value of 20', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the value', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });


  });

});
