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


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

let list = document.getElementById("list");

for (let i = 0; i < studenti.length; i++) {

    list.innerHTML += `<li>
                            <h3>Nome: ${studenti[i]["nome"]}</h3>
                            <h4>Cognome: ${studenti[i]["cognome"]}</h4>
                            <em>Età: ${studenti[i]["eta"]}</em>
                            <hr>
                        </li>`;
    
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


// Dopo 5 secondi da quando il programma mostra la lista studenti, faccio partire i prompt
setTimeout(function() {
    let nuovoStudente = {
    
        "nome" : prompt("Inserisci il nome del nuovo studente."),
    
        "cognome" : prompt("Inserisci il cognome del nuovo studente."),
    
        "eta" : parseInt(prompt("Inserisci l'età del nuovo studente.")),
    
    };
    

    // inserisco il nuovo oggetto nell'array "studenti"
    studenti.push(nuovoStudente);


    // faccio sparire dallo schermo la vecchia lista non aggiornata
    list.classList.add("hidden");





    // creo e faccio comparire a video la lista aggiornata con le informazioni del nuovo studente
    let newList = document.getElementById("newList");


    for (let i = 0; i < studenti.length; i++) {

        newList.innerHTML += `<li>
                                <h3>Nome: ${studenti[i]["nome"]}</h3>
                                <h4>Cognome: ${studenti[i]["cognome"]}</h4>
                                <em>Età: ${studenti[i]["eta"]}</em>
                                <hr>
                            </li>`;
        
    }

}, 

1000

);




    


    


