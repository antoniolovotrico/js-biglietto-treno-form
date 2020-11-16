var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

genera.addEventListener("click", function() {
    
    //Genera Ticket
    console.log("genera il ticket");
    
    //selezionare valore degli input
    var nameInput = document.getElementById("full_name");
    var kmInput = document.getElementById("km");
    var fasciaInput = document.getElementById("fascia");
    
    //selezionare i valori
    var name = nameInput.value;
    var km = kmInput.value;
    var fascia = fasciaInput.value;
    console.log(name, km, fascia);

    //calcolo biglietto treno
    var costoKm = 0.21;
    var ticketPrice = costoKm * km;
    console.log(ticketPrice);

    if(fascia == "minorenne") {
        console.log("applica il 20% di sconto");
        offer = "sconto minorenni"
       
    }


    //seleziona elementi del biglietto
    var elName = document.getElementById("nome_passegero");
    var elSconto = document.getElementById("sconto");
    var elCarrozza = document.getElementById ("carrozza");
    var elCodice = document.getElementById("codice_cp");
    var elTicket = document.getElementById("ticket");

    //genera numero carrozza
    var numeroCarrozza = Math.floor(Math.random()*100000 - 90000) + 90;

})