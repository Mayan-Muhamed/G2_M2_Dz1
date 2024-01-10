// HomeWork 1

// Торговля

let product = "Iphone"  // Название продукта
let cost = 1100  // Цена продукта в долларах
let sold = false // Продан ли продукт

// Для наглядности выведем в консоль

console.log(product)
console.log(cost)
console.log(sold)

// HomeWork 2

// let credit = prompt("Сколько денег вы желаете получить?")
// if( credit <= 1000000 && credit >= 10000){
//     alert("Поздравляем! Ваш кредит одобрен!")
// }else if(credit < 10000){
//     alert("Слишком малая сумма!")
// }else{
//     alert("Извините мы не можем выдать вам такую сумму!")
// }

// HomeWork 3

let question = prompt("Ваш пол пожалуйста")

if ((question === "Женский") || (question === "женский")){
    alert("Welcome!")
}else if((question === "мужской") || (question === "Мужской")) {
    alert("Извините, но вы можете пригласить своих родных женского пола!")
}else {
    alert("Неизвестный пол!")
}
