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


  });

});
