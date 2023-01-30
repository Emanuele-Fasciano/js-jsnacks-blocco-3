// Ottieni un numero casuale in un range specificato. 
// Chiedi all'utente il valore minimo
// ed il valore massimo del range in cui generare il numero.

const minNumber = parseInt(prompt("valore minimo")) //chiedo i valori minimi e massimi all'utente
const maxNumber = parseInt(prompt("valore massimo"))


function getRandomNumber(min, max) { //genero un range minimo e massimo
    let differenceRange = max - min + 1;
    let result = Math.floor(Math.random() * differenceRange) + min;

    return result;
}
console.log(getRandomNumber(minNumber, maxNumber)) // stampo






