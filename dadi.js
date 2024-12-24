// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// Creazione funzione per generare numero randomico da 1 a 6
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Inizializzazione variabili dadi
let dadoUser = Math.floor(getRandomArbitrary(1, 6));
console.log(`Hai tirato il dado ed è uscito ${dadoUser}`);
alert(`Hai tirato il dado ed è uscito ${dadoUser}`);

let dadoCPU = Math.floor(getRandomArbitrary(1, 6));
console.log(`Il computer ha tirato il dado ed è uscito ${dadoCPU}`);
alert(`Il computer ha tirato il dado ed è uscito ${dadoCPU}`);

// Dichiarazione variabile risultato
let risultato;

// Controllo numero maggiore
if (dadoUser > dadoCPU) {
    risultato = "HAI VINTO!";
} else if (dadoUser < dadoCPU) {
    risultato = "HAI PERSO!";
} else {
    risultato = "HAI PAREGGIATO!"
}

console.log(risultato);
alert(risultato);