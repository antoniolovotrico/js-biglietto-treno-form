var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

genera.addEventListener("click", function() {
    
    //selezionare valore degli input
    var nameInput = document.getElementById("full_name");
    var kmInput = document.getElementById("km");
    var fasciaInput = document.getElementById("fascia");
    
    //selezionare i valori
    var name = nameInput.value;
    var km = kmInput.value;
    var fascia = fasciaInput.value;

    //calcolo biglietto treno
    var costoKm = 0.21;
    var ticketPrice = costoKm * km;
    var scontoMinorenne = ticketPrice * 0.20;
    var scontoOver65 = ticketPrice * 0.40;


    if (fascia == "minorenne") {
        offer = "Sconto Minorenne";
        document.getElementById("costo_biglietto").innerHTML = (ticketPrice - scontoMinorenne).toFixed(2) + "€";  
    }   else if (fascia == "over65") {
        offer = "Sconto Over 65";
        document.getElementById("costo_biglietto").innerHTML = (ticketPrice - scontoOver65).toFixed(2) + "€";
    }   else {
        offer = "Prezzo Intero";
        document.getElementById("costo_biglietto").innerHTML = ticketPrice + "€";
    }

    //genera numero carrozza
    var carrozza = Math.floor(Math.random() * 100) + 1;

    //genera codice cp
    var minCp = 90000;
    var maxCp = 100000;
    var codiceCp = Math.floor(Math.random()* (maxCp - minCp +1)) + minCp;

    //definisci ed inserisci elementi nel ticket
    document.getElementById("nome_passegero").innerHTML = name;
    document.getElementById("offerta").innerHTML = offer;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice_cp").innerHTML = codiceCp;
})

annulla.addEventListener("click", function() {
   document.getElementById("table").className = "clear";
})