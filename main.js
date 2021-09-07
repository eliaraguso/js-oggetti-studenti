/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


// Creo un oggetto studente con le proprietà: nome, cognome, età.

let studente = {
    "nome" : "Darth",
    "cognome" : "Vader",
    "eta" : 30
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in studente) {
        
    document.getElementById("objectProperties").innerHTML += studente[key] ;

}

// Creare un array di oggetti di studenti.

let studenti = [
    {
        "nome" : "Darth",
        "cognome" : "Vader",
        "eta" : 50
    },
    {
        "nome" : "Obi-Wan",
        "cognome" : "Kenobi",
        "eta" : 40
    },
    {
        "nome" : "Luke",
        "cognome" : "Skywalker",
        "eta" : 22
    },
    {
        "nome" : "Ian",
        "cognome" : "Solo",
        "eta" : 30
    }
];

    


    


