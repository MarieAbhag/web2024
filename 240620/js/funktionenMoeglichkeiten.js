// globale variablen
// auf die jede funktion zugreifen kann


const auswahl = document.querySelector(".alfa");
const bild    = document.querySelector("#leinwand");
let counter   = 0;

function text() {
    auswahl.innerHTML = "einen beliebigen text";
    let lokal = "lebt nur bis zum ende der geschweiften klammern";
}

function stil() {
    auswahl.style.opacity = "0.5";
}

function klasseHinzu() {
    bild.classList.add('klein');
}

function klasseEntfernen() {
    bild.classList.remove('klein');
}

function umEinsErhoehen() {
    counter++;      //erhöht den counter um 1
    auswahl.innerHTML = counter;
    if(counter >= 3 ) {
        bildTauschen();
    }
    
}

function bildTauschen() {
    bild.src = "img/spring-1166564_640.jpg";
    bild.classList.add('klein');
}

function berechnen() {
    let wert = summe(10,20);        //aufrufer | wert = 30

    auswahl.innerHTML = wert;
}

function summe( x,y ) {
    let add = x+y;
    return add;         //gib den wert zurück => an den aufrufer
}

function gibtEsdasElement() {
    debugger
    // durch das '!' wird der ausdruck negiert
    // wenn das document keine id findet

    if(!document.getElementById('horst')) {
        return;  //abbrechen der funktion
    }

    let elem = document.getElementById('horst');
    elem.classList.add('klein');

}

function createUser(username, email, password) {
    let user = {
        username:username,
        email:email,
        password:password
    }

    return user;
}

function objektErstellen() {
    let max = createUser('max','mustermann@web.de','secret');
    console.log(max);
}