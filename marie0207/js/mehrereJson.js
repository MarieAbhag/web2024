// __________________________mit variabler json + id _____________________
function ladeBilder(json,id) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            const obj = JSON.parse(xhr.responseText);
            const arr = obj.ereignisse;
            const frag = document.querySelector(id);

            console.log(arr);
            console.log(frag);
            
         }
    }

    xhr.open('GET','extern/'+json, true);
    xhr.send(null);
}

document.querySelector('#eins').addEventListener('click', function() {
    ladeBilder('woche.json','#contant'); 
});
document.querySelector('#zwei').addEventListener('click', function() {
    ladeBilder('woche2.json','#contant2'); 
});
// loadText();