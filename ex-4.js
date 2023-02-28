//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


//План:

//1.Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//2.Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//4.Создайте экземпляры каждого прибора.
//5.Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


function ElectricalDevices (name, power) {
    this.location = 'kitchen',
    this.name = name,
    this.power = power
}



ElectricalDevices.prototype.getPower = function (power, durationWork, on) {
	let devOn = on;
	if(on === true){
		devOn = 'Вкл';
	}else{
		devOn = 'Выкл';
	};

    return console.log(`Работа прибора ${this.name} за ${durationWork} час(ов) = ${power * durationWork}(В); ${this.name}: ${devOn}`);

}



function ColorDevices (name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color
};

ColorDevices.prototype = new ElectricalDevices()


const microwave = new ColorDevices ('microwave', 500, 'white')
const kettle = new ColorDevices ('kettle', 300, 'black')

console.log(microwave, kettle)

microwave.getPower(500, 0.1, true)
kettle.getPower(300, 0, false)

