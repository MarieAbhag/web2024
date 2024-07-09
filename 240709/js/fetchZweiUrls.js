const url = 'extern/woche.json';
const url2 = 'extern/woche2.json';

//request durchführen mit fetch(ist ein promise)
//und mit .then
fetch(url)

.then(function(response) {
    console.log(response.ok);   //true
    if(response.ok) {
        return response.json();
    }else{
        //eigene fehlermeldung
        throw new Error('ein fehler ist aufgetreten');
    }
})

.then((data) => {
    console.log('url1 '+data);      //url1 [object Object]
})

.then(
    fetch(url2).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log('url2 '+data);  //url2 [object Object]
        for( const freu of data.ereignisse ) {      //zugriff auf das array ereignisse in data
            console.log(freu);
        }
    })
)

.catch((error,response) => {
    console.error(error);
    if(!response) { console.log('keine antwort'); }
})