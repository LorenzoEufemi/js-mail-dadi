// DATI
const numUser = Math.floor(Math.random() * 6) +1;
const numComputer = Math.floor(Math.random() * 6) +1;

// ESECUZIONE

console.log(numUser, numComputer);

if (numUser > numComputer) {
    console.log("Il giocatore ha vinto!")
} else if ( numUser < numComputer) {
console.log("Il computer ha vinto!")
} else {
    console.log("Pareggio!")
}