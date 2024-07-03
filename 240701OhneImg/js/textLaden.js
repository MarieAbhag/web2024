// funktion zum laden von externen inhalten
//erstellen einer instanz des xhrObjektes
//wenn der status dieses objektes sich ändert nutze eine anonyme funktion ( onreadystatechange)
//welchen status und readyState erhalte ich vom server
//vorbereitung der anfrage(übertragungsMethode get/post, die url der datei, synchron/asynchron)
//true -> asynchron
//mittels send() senden der anfrage an den server
//da werte nicht mitgesendet werden steht in der klammer entweder nichts oder null
//die antwort des servers( xhr.responseText ) wird in dem fragment der seite angezeigt

function loadText() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('#content').innerHTML = xhr.responseText;
        }
    }

    xhr.open('GET','extern/gruss.txt', true);
    xhr.send(null);
}

document.querySelector('#senden').addEventListener('click', loadText);