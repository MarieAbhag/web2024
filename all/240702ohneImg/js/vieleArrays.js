
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

// ----------------aufruf der funktion und übergabe der argumente welche Datei(json) in welche id('#content')----------
document.querySelector('#eins').addEventListener('click', function() {
    ladeBilder('vieleArrays.json','#content','galerie1');
});

document.querySelector('#zwei').addEventListener('click', function() {
    ladeBilder('vieleArrays.json','#content2','galerie2');
});

// objekte auslesen
// kurs.title
// oder 
// let vari = 'geschenkt';
// kurs[vari];