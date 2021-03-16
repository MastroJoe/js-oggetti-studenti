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
console.log(studente);
$('#studente p').text(studente);
//stampo tutte le proprietà dell'oggetto studente
for (var studenteKey in studente) {
console.log(studenteKey, studente[studenteKey]);
}
})
