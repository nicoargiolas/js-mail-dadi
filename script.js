// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email


// Creazione lista email
const invitati = ["marco.rossi@gmail.com", "verdi.giulio@gmail.com", "marco00@icloud.com", "vincenzo.nafta@icloud.com", "giovanni97@gmail.com"];
console.log(invitati);


// Richiesta input email all'utente
let userEmail = prompt("Inserisci la tua email");
console.log(userEmail);


// Dichiarazione variabile risultato
let risultato;

// Controllo se l'email è presente nella lista degli invitati
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === userEmail) {
        risultato = "SEI INVITATO!";
    } else {
        risultato = "NON SEI INVITATO";
    }

    // Se il risultato è "SEI INVITATO" esce dal ciclo
    if (risultato === "SEI INVITATO!") {
        break;
    }
}

// Output risultato
console.log(risultato);
alert(risultato);

