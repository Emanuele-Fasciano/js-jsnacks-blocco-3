// Genera un numero a caso compreso tra 1-100.
//  Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.
//   Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. 
//   Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.

const randomNumber = Math.floor(Math.random() * 100) + 1 //genero un numero casuale da 1 a 100
console.log(randomNumber);

let userNumber; // faccio scegliere all' utente un numero

let tentativi = 0; // dichiaro una variabile dove conterò i tentativi

while( randomNumber != userNumber) { // finchè in numero random non sarà uguale al numero dell'user chiederò di scegliere un numero
    userNumber = parseInt(prompt("scegli un numero"));

    if(randomNumber > userNumber){ //se il numero dell' user è minore del random stamperò (`il tuo numero è minore`)
        console.log(`il tuo numero è minore`);
        tentativi++;  // incremento la variabile "tentativi"
    }
    else if(randomNumber < userNumber){ // se il numero dell' user è maggiore del random stamperò (`il tuo numero è maggiore`)
        console.log(`il tuo numero è maggiore`);
        tentativi++;  // incremento la variabile "tentativi"
    }
    else{
        console.log(`hai indovinato`); // se il numero dell' user è ugualea quello random stamperò (`hai indovinato`)
        tentativi++;  //// incremento la variabile "tentativi"
    }
}

console.log(`tentativi= ${tentativi}`);  // stampo i tentativi
