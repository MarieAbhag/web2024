
// --------------------mit variabler json + id + galerie-----------------------------------



// function ladeBilder(vieleArrays,#content,galerie1) 

function ladeBilder(json,id,galerie) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //alles in ordnung die antwort ist fertig und wird zurückgeschickt
        if( xhr.readyState === 4  && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
            console.log(obj);
            const arr = obj[galerie];                         //auswahl der galerie(variabel)
            const frag = document.querySelector(id);
            
            for (let i of arr) {
            let divi   = document.createElement('div');
            let bild   = document.createElement('img');
            let span   = document.createElement('span');

            span.innerText = i.location;
            bild.src       = i.map;

            divi.append(span,bild);
            frag.append(divi);
            }
        }
    }

    xhr.open('GET','extern/'+json,true);
    xhr.send(null);
}

// sofortoges laden der ersten bilder 

ladeBilder('vieleArrays.json', '#content','galerie1' )
alert("bild");





//------------------abfragen ob ein element im vieewport erscheint------------------------
//------------------------mittels intersection observer

const sec = document.querySelector('#content2');
const options = {           
    root: null,                 //angabe des elternElements oder des viewports
    rootMargin: '0px',          //abstand ähnlich wie dass css-margin
    treshold: 0.5               //sobald die sec zur Hälfte im viewport erscheint
}
const callback = function(entries,observer) {
    const observed = entries[0];
    if(observed.isIntersecting) {
        //was soll passieren wenn observiert
        ladeBilder('vieleArrays.json','#content2', 'galerie2');
        // console.log(observed.boundingClientRect);
        observer.unobserve(sec);
    }
}

const observer = new IntersectionObserver(callback,options);
if(sec) {
    observer.observe(sec);
}