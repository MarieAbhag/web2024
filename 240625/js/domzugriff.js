function fertig() {
    //elemente über die id
    let ele = document.getElementById('page');
    

    //elemente über den klassenNamen
    ele = document.getElementsByClassName('warm');

    //elemente über den tagNamen
    ele = document.getElementsByTagName('li');

    //zugriff auf das elternElement
    let startItem = document.getElementById('three');
    let parentElement = startItem.parentElement;

    //traversieren im DOM - von ast zu ast springen - zu den geschwistern
    let prevItem = startItem.previousSibling;           //[object Text]
        prevItem = startItem.previousElementSibling;    //[object HTMLLIElement]
// ----------------------------------------------------------------------------------------

    // die aktuell angesagte methode läuft über den cssSelektor
    let oneItem = document.querySelector('h3');
        oneItem = document.querySelector('#page');
        oneItem = document.querySelector('.beispiel');
        oneItem = document.querySelector('li:nth-child(even)');

        // wählt NUR das erste gefundene element aus
        oneItem = document.querySelector('li.warm');


        //wählt ALLE li' aus
        let allItems = document.querySelectorAll('li.warm');
        let anzahl   = allItems.length;
        let einzeln  = allItems[0];

        // alle kindKnoten der id page
        let number = document.getElementById('page').children;

        //attribut holen
        let attr = startItem.getAttribute('class');

        //ein attribut setzen
        let vier = document.querySelector('#four');
        vier.setAttribute('class','kalt');
        vier.setAttribute('src','bildpfad');
        vier.setAttribute('href','#anker');








    console.log(vier);
    document.getElementById('anzeige').innerHTML = attr;
    document.getElementById('anzeige').innerText = attr;
    document.getElementById('anzeige').textContent = attr;
}
document.addEventListener('DOMContentLoaded', fertig );