//Переписать консольное приложение из предыдущего юнита на классы.


class ElectricalDevices {
    constructor(name, power) {
      this.location = 'kitchen';
      this.name = name;
      this.power = power;
    }
    
    
    
    getPower(power, durationWork, on) {
      let devOn = on;
      if(on === true){
          devOn = 'Вкл';
      }else{
          devOn = 'Выкл';
      };
  
      return console.log(`Работа прибора ${this.name} за ${durationWork} час(ов) = ${power * durationWork}(В); ${this.name}: ${devOn}`);
    }
  }
  
  
  class ColorDevices extends ElectricalDevices {
    constructor (name, power, color) {
      super(name);
      this.power = power;
      this.color = color;
    }
  };
  
  
  
  const microwave = new ColorDevices ('microwave', 500, 'white');
  const kettle = new ColorDevices ('kettle', 300, 'black');
  
  console.log(microwave, kettle);
  
  microwave.getPower(500, 0.1, true);
  kettle.getPower(300, 0, false);