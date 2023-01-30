// Fai inserire un numero, che chiameremo N, all'utente.
//  Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
//  Ogni volta che ne crei uno, stampalo.

const nNumber = parseInt(prompt("inserisci un numero"));
let array = 0

for (let i = 0; i < nNumber; i++) {
    array = []
    
    for(let i = 0; i < 10; i++){
        arrayNumber = Math.floor(Math.random() * 100) + 1
        array.push(arrayNumber)
        
    }
    
    console.log(array);
}