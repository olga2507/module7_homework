//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


const person = {
    city: 'Chelyabinsk',
    gender: 'male',
    age: 21,

};

function getPerson (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(obj[key]);
        }
    }
}

getPerson(person);