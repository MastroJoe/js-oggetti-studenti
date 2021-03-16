// Consegna
// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){
// creo un oggetto studente e stampo
var studente = {
  nome: "Giorgio",
  cognome: "Pignattari",
  età: "26",
}
console.log("Studente: " + studente);
// ciclo e stampo tutte le proprietà dell'oggetto studente
for (var studenteKey in studente) {
console.log(studenteKey + ": " +  studente[studenteKey]);
}
// creo un array di oggetti di studenti
var studenti = [
{
  nome : "Pierfrancesco",
  cognome : "Antonello",
  eta : "26",
},
{
  nome : "Filippo",
  cognome : "Bellotto",
  eta : "25",
},
{
  nome : "Stefano",
  cognome : "Manea",
  eta : "30",
},
{
  nome : "Mirko",
  cognome : "Trevisan",
  eta : "23",
},
{
  nome : "Alessandro",
  cognome : "Cavallo",
  eta : "25",
}
];
// aggiungo studente all'array e stampo
studenti.push(studente);
console.log(studenti);
// ciclo e stampo per ogni studente il nome e cognome
for (var i = 0; i < studenti.length; i++) {
console.log("Nome: " + studenti[i].nome + ", Cognome:" + studenti[i].cognome);
}
});
