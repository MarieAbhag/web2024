// erstellen der arrays für jede gal eines 

const arrayEins = [
    {
        location:"bodensee",
        map:"img/eins.png",
        com:"sonne"
    },
    
    {
        location:"chiemsee",
        map:"img/zwei.png",
        com:"wolken"
    },
    
    {
        location:"attersee",
        map:"img/drei.png",
        com:"regen"
    }
]

const arrayZwei = [
    {
        location:"ostsee",
        map:"img/vier.png",
        com:"sonne"
    },
    
    {
        location:"nordsee",
        map:"img/fuenf.png",
        com:"wolken"
    },
    
    {
        location:"baltiksee",
        map:"img/sechs.png",
        com:"regen"
    }
]

// auswählen der elemente 
const eins = document.querySelector('.eins');
const zwei = document.querySelector('.zwei');
const inhalt = document.querySelector('#content');

//vergabe der events
eins.addEventListener('click', galEins );
zwei.addEventListener('click', galZwei );


// funktion zum generieren von bild und untertitel 
// welche elemente möcht ich erstellen 


function galEins() {
    
    // inhalt removen 
    while(inhalt.hasChildNodes()) {
        inhalt.removeChild(inhalt.firstChild);
    }

    // oder mit inhalt.innerHtml = ""
    // oder mit div.remove()
    // oder mit replaceWith



    // welches array möchte ich nutzen
    for( const i of arrayEins ) {
        //kreieren der elmente
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        let img = document.createElement('img');
        let com = document.createElement('p');

        //füllen mit text und src
        cap.innerText = i.location;
        com.innerText = i.com;
        img.src       = i.map

        //anhängen an das figureElement
        fig.append( img, cap, com);

        //anhängen an den content
        inhalt.append( fig );
    }
}

function galZwei() {

    // inhalt removen 
    while(inhalt.hasChildNodes()) {
        inhalt.removeChild(inhalt.firstChild);
    }



    // welches array möchte ic nutzen
    for( const i of arrayZwei ) {
        //kreieren der elmente
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        let img = document.createElement('img');
        let com = document.createElement('p');

        //füllen mit text und src
        cap.innerText = i.location;
        com.innerText = i.com;
        img.src       = i.map

        //anhängen an das figureElement
        fig.append( img, cap, com);

        //anhängen an den content
        inhalt.append( fig );
    }
}


















