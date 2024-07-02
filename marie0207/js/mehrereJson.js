// __________________________mit variabler json + id _____________________
function ladeBilder(json,id) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            const obj = JSON.parse(xhr.responseText);
            console.log(obj);
            const arr = obj.ereignisse;
            const frag = document.querySelector(id);

            // console.log(arr);
            // console.log(frag);
            for (let i of arr) {
                let divi = document.createElement('div');
                let bild = document.createElement('img');
                let span = document.createElement('span');

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

document.querySelector('#eins').addEventListener('click', function() {
    ladeBilder('woche.json','#content'); 
});
document.querySelector('#zwei').addEventListener('click', function() {
    ladeBilder('woche2.json','#content2'); 
});
// loadText();


// objekte auslesen
// kurs.title
// oder
// let vari = 'geschenkt';
// kurs[vari];