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
