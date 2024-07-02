

function loadText() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            // die verarbeitung der daten 
            const obj = JSON.parse(xhr.response);
            const frag = document.querySelector('#content');
            //frag.innerHTML = obj.bild+'<br>';                       einzelne eintrag
            //frag.innerHTML += obj.montag.wetter+'<br>';             zugriff auf das objekt montag
            //frag.innerHTML += obj.ereignisse[0].location+'<br>';    array am index 0 location
            //frag.innerHTML += obj.ereignisse[0].map+'<br>';         array am index 0 map
            // map-angabe ausgehend von der ladenden datei = bilderLaden.html 
            //nur die ereignisse sollen augegeben werden 

            const arr = obj.ereignisse;
            for( let i of arr ) {
                let fig = document.createElement('figure');
                let cap = document.createElement('figcaption'); 
                let bild = document.createElement('img');
                bild.src = i.map;
                cap.append( i.location );
                fig.append(bild,cap);
                frag.append(fig);
            }
        }
    }

    xhr.open('GET','extern/woche.json', true);
    xhr.send(null);
}

// document.querySelector('#senden').addEventListener('click', loadText);

loadText();