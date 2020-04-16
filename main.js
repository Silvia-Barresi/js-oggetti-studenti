// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

    var studente = {
      "nome": "Bojack",
      "cognome": "Horseman",
      "eta": 23
    };

    // Stampare a schermo attraverso il for in tutte le proprietà;

    for (var nomeClee in studente){
      console.log(studente[nomeClee]);
    }

    // Creare un array di oggetti di studenti.

    var studenti = [
      {
        "nome": "Bojack",
        "cognome": "Horseman",
        "eta": 23
      },
      {
        "nome": "Diane",
        "cognome": "Nguyen",
        "eta": 19
      },
      {
        "nome": "Todd",
        "cognome": "Chavez",
        "eta": 21
      },
      {
        "nome": "Mister",
        "cognome": "Peanutbutter",
        "eta": 25
      },
      {
        "nome": "Princess",
        "cognome": "Carolyn",
        "eta": 20
      },
    ];

    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    var newName = prompt("Enter your name");
    var newSurname = prompt("Enter your surname");
    var newAge = prompt("Enter your age");

    studenti.push({
      "nome": newName,
      "cognome": newSurname,
      "eta": newAge
    });

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

    for (var i = 0; i < studenti.length; i++){

      var objectS = studenti[i];
      var nameS = objectS.nome;
      var surnameS = objectS.cognome;

      console.log(nameS + " " + surnameS);

    };
