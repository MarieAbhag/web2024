// Promises sind Objekte, 
// die das Ergebnis einer asynchronen Aktion abfangen und es zurück geben, 
// wenn die versprochenen Daten erfolgreich geladen wurden oder ein Fehler aufgetreten ist

// Ein Promise Objekt ist dazu gedacht, verschachtelten Funktionen entgegenzuwirken

// die fetchApi verwendet solch ein PromiseObject


const url = 'extern/galleries.json';
const home1 = document.querySelector('#content');
const home2 = document.querySelector('#content2');

fetch(url)      //lade die datei (fetch verwendet intern ein promiseObject)
.then((response) => {
    return response.json();     //nur wenn die anfrage erfolgreich war wandle diese in das jsonFormat 
})
.then((data) => {
    console.log(data);
    appendData(data);           //externe funktion,die die daten verarbeitet
})
.catch((error) => {
    console.log('fehler '+error);  //ein catch 'fängt' den fehler ein ( ist optional )
})

function  appendData(data) {
    // für jeden gefundenen eintrag soll ein li erstellt werden
    data.forEach((item,i) => {
        home1.insertAdjacentHTML('beforeend',`<li id="${i}">`+data[i].name+`</li>`);
        document.querySelectorAll('li')[i].addEventListener('click', () => {
            let url = data[i].dataPath;         //speichern des datenPfades
            fetch(url) 
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                appendData2(data);              //beach,grimaud, oder mare.json
            })
            .catch((error) => {
                console.log('appendData2Fehler '+error);
            })
        })
    })
}

function appendData2(data) {
    home2.innerHTML = "";               //leeren von home2
    data.forEach((item,i) => {
        home2.insertAdjacentHTML('beforeend', '<div id="'+i+'"></div>');
    })

    let divi = document.querySelectorAll('div');
    divi.forEach((item,i) => {
        let bild = data[i].imgPath;
        item.insertAdjacentHTML('beforeend','<img src="'+bild+'">');
    })
}


// -------------appendData alternativ mit item ------------------------------

// function appendData(data) {
//     data.forEach((item) => {
//         let elem = document.createElement('li');
//         elem.innerHTML = item.name;
//         home1.append(elem);
//         elem.addEventListener('click', () => {
//             const neue_url = item.dataPath;
//             fetch(neue_url)
//             .then(function(response){
//                 return response();
//             })
//             .then(function(data){
//                 appendData2(data);
//             })
//         })
//     })
// }