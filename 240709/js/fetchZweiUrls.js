const url = 'extern/woche.json';
const url2 = 'extern/woche2.json';

//request durchführen mit fetch(ist ein promise)
////perform request with fetch (is a promise)
//und mit .then

//fetch (url)
//.then((){})
//(function(response){if else})





fetch(url)

.then(function(response) {                                  //fetch (url)

    console.log(response.ok);   //true
    if(response.ok) {
        return response.json();
    }else{
        //eigene fehlermeldung
        throw new Error('ein fehler ist aufgetreten');     //occurred
    }
})
//.then(()=>{})
.then((data) => {
    console.log('url1 '+data);                      //url1 [object Object]
})

.then(
    fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('url2 '+data);                  //url2 [object Object]
        for( const freu of data.ereignisse ) {      //zugriff auf das array ereignisse in data
            console.log(freu);                      //Object { location: "heute", map: "img/vier.png" } 
        }
    })
)
//const url = 'extern/woch.json';                   //delete l7rf e fi woche
.catch((error,response) => {
    console.error(error);
    if(!response) { console.log('keine antwort'); } 

})
//Error: ein fehler ist aufgetreten
//     <anonymous> http://127.0.0.1:5500/240709/js/fetchZweiUrls.js:25
//     promise callback* http://127.0.0.1:5500/240709/js/fetchZweiUrls.js:18
// 