let freuen;     //deklaration
let freitag = "die sonne scheint";      //datentypString = zeichenkette
    freitag = 12;                       //datentypNumber
    freitag = true;                     //datentypBoolean
    freitag = [];                       //datentypArray
    freitag = {};                       //datentypObjekt
    //freitag = funktion() {};            eine funktion als wert

let zahl    = "12";
let zahl2   = 12;
let erg = zahl + zahl2;
// console.log(erg);   = 1212

const auswahl = document.querySelector('#demo');
document.querySelector('#demo').innerHTML = "<i>moin</i>";

let tim = 15;                           //initialisierung
let tom = 20;

auswahl.innerHTML = tim;
tim += 5;
tim *= 2;

tim == tom;     //gleicher wert?
tim === tom;    //strikt gleich werte und datentypen werden verglichen
tim != tom      //ungleich
tim !== tom;
tim < tom tim > tom tim <= tom tim >= tom

if( tim == tom ) {
    was passieren soll wenn die bedinung erfüllt ist
} else {
    was passieren soll wenn die bedinung NICHT erfüllt ist
}

if ( kraftstoff == "d" ) {

} else if ( kraftstoff == "g" ) {

} else if ( kraftstoff == "s" ) {

} else {
    wenn die oberen "fragen" zu keinem ergebnis führten
}

// funktionsDeklaration = statement = erstellen einer fukt mit dem schlüsselwort function
function beliebig() {
    auswahl.innerHTML = 'keine ahnung';
}
//aufruf der funktion
beliebig();

//funktionsAusdruck = expression = die funktion ist wert einer variablen
let message = function() {
    document.querySelector('#demo').innerHTML = "herlich willkommen !!";
}
message();

// a,b sind parameter
function summe(a,b) {
    let ergebnis = a + b;
    return ergebnis;
}

//aufruf der funktion mit argumenten 5,2
summe(5,2);
summe(15,2);

let sender = summe(12,5);

function gruss() {
    let x = 10;
    let y = 2;
    function inner(x,y) {
        let summi = x + y;
    }
}

// globale var stehen am anfang de scriptes - außerhalb der funktionen
// alle funktionen können auf diese zugreifen

// lokale variablen innerhlabder funktion 
// der "lebenszeit" geht bis zum ende der funktion bis zur geschweiften klammer

// text ändern
auswahl.innerHTML = "wolken";

// eine var anzeigen lassen
auswahl.innerHTML = freu;

//text plus var konkatenieren
auswahl.innerHTML = "der wert von freu ist "+freu;

//auswahl einen style zuweisen
auswahl.style.opacity = "0.5";

//auswahl erhält eine klasse
auswahl.classList.add('klassenName');

//entfernen der klasse
auswahl.classList.remove('klassenName');

//einen couter erhöhen
counter++;

//bildtausch
bild.src = "img/nichtda.webp";

//testen ob es ein element gibt
if( !document.getElementById('horst') ) {
    return;     //abbruch der funktion
}

const arr = [];
const arr = ['himbeere','erdbeere','banane'];
index            0          1         2

// zugriff auf einzelnen index 
arr[1] => erdbeere

//anzahl der elemente
arr.length => 3

////anzahl der elemente -1 => das ende des array

document.getElementById('demo');
document.querySelector('.demo');
document.querySelector('.demo article');

const bilder = [
    'Screenshot_87.png',
    'Screenshot_211.png',
    'Screenshot_213.png',
    'Screenshot_402.png'
];

const bildpfad = 'img/';
const leinwand = document.querySelector('#leinwand');
const anzeigeEins = document.querySelector('#anzeigeVor');

let zaehler = 0;

//zaehler erhöht
zaehler++;

//zaehler auf 0 zurücksetzen
if( zaehler > bilder.length-1 ) {
    zaehler = 0;
}

// Lokale var bild, die innerhalb der fkt steht als bildpfad 
let bild = bildpfad + bilder[zaehler];

//die src des bildes geändert
leinwand.src = bild;