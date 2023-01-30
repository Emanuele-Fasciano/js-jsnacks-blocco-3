// Ottieni un numero casuale in un range specificato. 
// Chiedi all'utente il valore minimo
// ed il valore massimo del range in cui generare il numero.

const minNumber = parseInt(prompt("valore minimo"))
const maxNumber = parseInt(prompt("valore massimo"))

 let randomNumber = Math.floor(Math.random() * maxNumber) + 1

// while(randomNumber > minNumber){
//     randomNumber = Math.floor(Math.random() * maxNumber) + 1
    console.log(randomNumber);
// }






