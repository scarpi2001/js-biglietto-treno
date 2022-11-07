//chiedi all'utente numero chilometri ed età, sulla base di questo calcola il prezzo del biglietto (€ 0,21 al km) applica 20% di sconto se minorenne 40% se over 65

//variabili
let chilometri;
let eta;
let prezzoBase;
let scontoMinore;
let scontoMaggiore;
let prezzoScontato;

//chiedi dati
chilometri = parseInt(prompt("inserisci il numero di chilometri che dovrai percorrere"));
console.log("chilometri", chilometri);

eta = parseInt(prompt("inserisci la tua età"));
console.log("età", eta);

//prezzo base
prezzoBase = chilometri * 0.21;
console.log("prezzo base", prezzoBase);

document.getElementById("prezzo_base").innerHTML = `Prezzo base €${prezzoBase.toFixed(2)}`;

//sconti
scontoMinore = prezzoBase * 0.20;
scontoMaggiore = prezzoBase * 0.40;

if (eta < 18) {
    prezzoScontato = prezzoBase - scontoMinore;
    console.log("sconto minore", scontoMinore);
    document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzoScontato.toFixed(2)} / Sconto minorenne €${scontoMinore.toFixed(2)} `;
} else if (eta > 65) {
    prezzoScontato = prezzoBase - scontoMaggiore;
    console.log("sconto maggiore", scontoMaggiore);
    document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzoScontato.toFixed(2)} / Sconto over 65 €${scontoMinore.toFixed(2)} `;
}

console.log("prezzo scontato", prezzoScontato);
