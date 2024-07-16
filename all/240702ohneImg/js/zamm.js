// funktion zum laden von externen inhalten
function loadText(json,id,) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //alles in ordnung die antwort ist fertig und wird zurückgeschickt
        if( xhr.readyState === 4  && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
            obj.schlüssel
        }
    }

    xhr.open('GET','extern/gruss.json',true);
    xhr.send(null);
}

document.querySelector('#senden').addEventListener('click', loadText );

function loadText() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //alles in ordnung die antwort ist fertig und wird zurückgeschickt
        if( xhr.readyState === 4  && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
            obj.schlüssel
        }
    }

    xhr.open('GET','extern/grussZwei.json',true);
    xhr.send(null);
}

document.querySelector('#senden').addEventListener('click', loadText );

jsonDatei =

{
    "schlüssel":"wert",
    "schlüssel":"wert",
    "schlüssel":"wert",

    "objekt":{
        "bild":"img/eins.png",

    },

    "ereignisse":[
        {"location":"irgeinSee", "map":"img/eins.png" },
        {"location":"irgeinSee", "map":"img/eins.png" },
        {"location":"irgeinSee", "map":"img/eins.png" },
    ]
}