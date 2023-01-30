// Crea un array vuoto
// e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array
// fino a quando la somma degli elementi è minore di 50.

let numbersArray = []; // creo un array vuoto

let somma = 0; // dichiaro una somma 0 

while(somma < 50 ) {  // finchè la somma sarà minore di 50 chiederò all'utente un numero
    userNUmber = parseInt(prompt("inserisci un numero"));
    somma += userNUmber; // sommo i numeri dell'utente fino a quando raggiungerà la somma 50
    numbersArray.push(userNUmber); //pusho i numeri dell' utente nell array
}
console.log(numbersArray); // stampo



