const auswahl = document.querySelector('h2');
const auswahl = document.querySelector('.warm');
const auswahl = document.querySelector('#demo');
const auswahl = document.getElementById('demo');

//funktionsAnweisung oder functionStatement
function ausHtml() {}

//anonymer funktionsAusdruck function expression
let freutag = function() {}

//aufruf der funktionen
ausHtml();

freutag();

document.addEventListener('DOMContentLoaded',ready);

document.querySelector('h2').onclick = function() {}


const auswahl = document.querySelector('h2');
auswahl.onclick = function() {
    document.querySelector('#demo').innerHTML = 'einen simplen text';
}

function neuesElement() {
    const alliLi = document.querySelectorAll('li');                     //nodeList
    const parentElement = document.querySelector('.beispiel');          //die ul  
    const li = document.createElement('li');
    li.textContent = "heute scheint die sonne";

    const p = document.createElement('p');
    p.textContent = "ich bin ein p";

    parentElement.append(li,p);         //innerhalb der ul
    parentElement.prepend(li,p);
    parentElement.before('p');          //außerhalb der ul
    parentElement.after('p');
}

// zwei listener für ein element 
document.querySelector('#demo').addEventListener('click', eineFunktion);
document.querySelector('#demo').addEventListener('mouseover', zweiteFunktion);

//entfernen des listeners
document.querySelector('#demo').removeEventListener('click', eineFunktion);
document.querySelector('#demo').removeEventListener('mouseover', zweiteFunktion);

// --------------------------schleifen---------------------------------------- 
// arbeiten den code solange ab bis die bedingung nicht mehr zutrifft

const whili = document.querySelector('#whileSchleife');
whili.addEventListener('click', whileSchleife);

function whileSchleife() {
    let text = ' ';
    let i = 0;

    while( i < 5 ) {
        text += 'die zahl ist <br>'+i;
        i++;
    }

    document.querySelector('.schleife').innerHTML = text;
}

// --------------------------------------------------------------------------------

function forSchleife() {
    const elements = [2,4,6,8];

    for( let i = 0; i < elements.length; i++ ) {
        was oll pasieren solange die bedingug erfüllt ist
    }
}

// --------------------------------------------------------------------------------

function forEachSchleife() {
    const elements = [2,4,6,8];
    elements.forEach(function(item,index,arr) {

    });

    elements.forEach( sonne );

    function sonne(item,index,arr) {
        arr[index] = item*5;
        // console.log(item);
        // console.log(iindex);
        // console.log(arr);
    }

    document.querySelector('#schleife').innerHTML = elements;
}

const eachi = document.querySelector('#forEachSchleife');
eachi.addEventListener('click', forEachSchleife);


// --------------------------------------------------------------------------------

function forOfSchleife() {
    const arr =  ['himbeere','blaubeere','tonkabohne','ananas'];
    for(const item of arr) {
        console.log(item);  //'himbeere','blaubeere','tonkabohne','ananas'
        document.querySelector('#schleife').innerHTML = item;
    }
}

// --------------------------------------------------------------------------------

let kunde = {
    vorname:'horst',
    name:'schlemmer',
    bild:'img/horst.jpg',
    kommentar:'ich habe gar kein bild'
}

kunde.kommentar = ich habe gar kein bild

//---------------------aarray mit objekten-----------------------------------------

const arr = [
    {
        location:'silbersee',
        map:'img/eins.jpg'
    },
    
    {
        location:'silbersee',
        map:'img/eins.jpg'
    },
    
    {
        location:'silbersee',
        map:'img/eins.jpg'
    }
]

// --------------------------------------marie----------------------
//create = erstellen

const arrayEins = [
    {
        location:"silbersse",
        map:"img7eins.png",
        com:"sonne"
    }
]                    //Array {} lw homa 7aga btswi 7aga 

const arrayZins = [
    2,4,6,8,10         //Array [] lw homa arkam
] 

const eins = document.querySelector('.eins'); //auswählen element = select 

//vergabe der events = allocation of events (t5sess)
eins.addEventListener('click', galEins);

//welche ele möchte ich erstellen

function galEins() {
    const elem = document.querySelector('#content');
//verschiedene schleifen = different loops
    function galEins(){
        //inhallt removen = content
        while(inhalt.hasChildNodes()) {
            inhalt.removeChild(inhslt,firstChild);
        }
        //oder mit inhalt.innerHTML = ""
        //oder mit replace = altnativ
    }
    //welches array möchtet nutzen
    for (const i of arr){
        //kreieren der elment = create
        let fig = document.createElement('.eins');
        //füllen mit text iund src
        cap.innerText = i.location;
        //anhängen an des figureElmentz = append
        fig.append( img, cap, com);
        //anhängen an den content
        inhalt.append( fig);
    }
}
//angebt = stated = mo3ln