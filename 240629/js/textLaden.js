// funktion zum laden von externen inhalten
// erstellen







function loadText() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('#content').innerHTML = xhr.responseText;
    }
}
    xhr.open('GET', 'extern/gruss.txt', true);
    xhr.send(null);
}
document.querySelector('senden').addEventListener('click', loadText);