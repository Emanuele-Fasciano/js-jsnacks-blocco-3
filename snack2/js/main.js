// Crea un array vuoto
// e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array
// fino a quando la somma degli elementi è minore di 50.

const numbersArray = [];

let userNUmber = parseInt(prompt("inserisci un numero"));

while(numbersArray > 50 ) {
    userNUmber = parseInt(prompt("inserisci un numero"));
    numbersArray.push(userNUmber)
}
console.log(numbersArray);



