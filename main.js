//chiedi all'utente numero chilometri ed età, sulla base di questo calcola il prezzo del biglietto (€ 0,21 al km) applica 20% di sconto se minorenne 40% se over 65

//variabili
let chilometri;
let eta;
let prezzoBase;
let prezzoScontato;

//chiedi dati
chilometri = parseInt(prompt("inserisci il numero di chilometri che dovrai percorrere"));
console.log("chilometri", chilometri);

eta = parseInt(prompt("inserisci la tua età"));
console.log("età", eta);

//prezzo base
prezzoBase = chilometri * 0.21;
console.log("prezzo base", prezzoBase);

//sconti
if (eta < 18) {
    prezzoScontato = prezzoBase - (prezzoBase * 0.20);
} else if (eta > 65) {
    prezzoScontato = prezzoBase - (prezzoBase * 0.40);
}

console.log("prezzo scontato", prezzoScontato);

//output