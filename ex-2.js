//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const person = {
    city: 'Chelyabinsk',
    gender: 'male',
    age: '21',

};


function getPerson (a, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (a == obj[key]) {
                return console.log(true);
            } else {
                return console.log(false);
            }
            }
    }
}


getPerson('Moscow', person);