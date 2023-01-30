// Fai inserire un numero all'utente. 
// Poi continua a chiedere numeri finché la serie è crescente
// (l'ultimo numero inserito deve essere maggiore del precedente).
// Alla fine stampali tutti
let numbersArray = [] //creo un array vuoto 

let firstNumber = parseInt(prompt("digita un numero")); //chiedo all utente di inserire il primo numero

numbersArray.push(firstNumber); //pusho il primo numero nell array


const lastNumber = numbersArray[numbersArray.length-1]; //recupero l'ultimo numero dell array

let userNumber = firstNumber
while(lastNumber < userNumber){
    userNumber = parseInt(prompt("digita un numero"));
    numbersArray.push(userNumber)
    console.log(numbersArray);
}

