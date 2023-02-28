//Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj () {
    let obj = Object.create(null);
    return Object.create(null);
}
console.log(emptyObj());