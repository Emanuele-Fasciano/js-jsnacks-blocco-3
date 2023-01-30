// Fai inserire un numero, che chiameremo N, all'utente.
//  Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
//  Ogni volta che ne crei uno, stampalo.

const nNumber = parseInt(prompt("inserisci un numero"));
let contenitore = []; // creo una variabile per contenere gli array generati

for (let i = 0; i < nNumber; i++) { // genero un ciclo per creare N array
   let array = [];
    
    for(let i = 0; i < 10; i++){ // in ogni N array inserisco 10 numeri da 1 a 100
        arrayNumber = Math.floor(Math.random() * 100) + 1;
        array.push(arrayNumber); // pusho i 10 numeri random nell array
        
    }
    contenitore.push(array); // pusho gli array creati nel contenitore degli array
    
    console.log(array);
}