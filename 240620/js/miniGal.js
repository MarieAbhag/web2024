const bilder = [
    'Screenshot_87.png',    //index 0
    'Screenshot_211.png',   //index 1
    'Screenshot_213.png',   //index 2
    'Screenshot_402.png'    //index 3
];

const bildpfad = "img/";
const leinwand = document.querySelector('#leinwand');
const anzeigeVor = document.querySelector('#anzeigeVor');
let zaehler    = 0;

// --------------ende der globalen variablen----------------------

//erstellen einer funktion mit function als schlüsselwort plus namen plus rundKlammern

function vor( ) {
    // lokaleVariable leben bis zum ende der funktion
    let bild = bildpfad + bilder[zaehler];
    leinwand.src = bild;
    zaehler++;
    anzeigeVor.innerHTML = bild;
}