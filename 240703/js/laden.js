
let arrSpeicher = [];



function ladeBilder(json,id,galerie) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //alles in ordnung die antwort ist fertig und wird zurückgeschickt
        if( xhr.readyState === 4  && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
           
            const arr = obj[galerie];                         //auswahl der galerie(variabel)
            const frag = document.querySelector(id);
            
            arrSpeicher = arr;
            console.log(arrSpeicher);



            loadImages(arr,frag);
         }
    }

    xhr.open('GET','extern/'+json,true);
    xhr.send(null);
}

ladeBilder('vieleArrays.json','#content','galerie1');