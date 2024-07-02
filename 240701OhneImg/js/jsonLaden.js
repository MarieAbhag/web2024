
function loadText() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            const obj = JSON.parse(xhr.response);
            const fragment = document.querySelector('#content');

            fragment.innerHTML = obj.name+'<br>';
            fragment.innerHTML += obj.beruf+'<br>';
            fragment.innerHTML += obj.bild+'<br>';

            //infos aus montag
            fragment.innerHTML += obj.montag.wetter+'<br>';
            fragment.innerHTML += obj.montag.temp+'<br>';
            fragment.innerHTML += obj.montag.aussicht+'<br>';
            
        }
    }

    xhr.open('GET','extern/woche.json', true);
    xhr.send(null);
}

// document.querySelector('#senden').addEventListener('click', loadText);
loadText();