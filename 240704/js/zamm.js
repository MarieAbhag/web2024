//objektLiteral
const hotel = {
    //eigenschaften
    name:'schlosshotel',
    zimmer:40,
    gebucht:25,

    //methoden = funktion in einem objekt
    check:function() {
        return this.zimmer - this.gebucht;
    }
}

// hotel.name = 'schlosshotel'

let item = {};
item.name = 'max';
item.alter = 50;
item.check = function(){}

//mit klammerNotation
// item['name'] = 'max';
// item[variable] = 'max';
// item['alter'] = 50;
// item['check'] = function(){}

//mit konstruktorFunktion

function Mensch(vorname,name,alter,augenfarbe) {
    this.vor = vorname;
    this.name = name;
    this.age = alter;
    this.eye = augenfarbe;
}

//eine instanz des prototyps
let eins = new Mensch('steffi','walter',27,'gruen');
let zwei = new Mensch('stef','portch',37,'braun');

//javascript
let mensch = {
    name:'oliver',
    wetter:'bewölkt'
}

//json
let menschen = {
    "name":"oliver",
    "wetter":"bewölkt"
}


//ajaxMethode
function ladeInhalt() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if( xhr.readyState === 4 && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
            const arr = obj.ereignisse;
            //weiterleiten des arr an eine zweite funktion
            // mitFoOf(arr);
            // mitInsertAdjacent(arr);
            // mitForEach(arr);
            mappen(arr);
        }
    }
    
    xhr.open('GET','extern/data.json', true);
    xhr.send(null);
}

ladeInhalt();

function mitFoOf(arr) {
    // let tes = arr;
    // console.log(tes);
    //iteriert über alles was einen index hat
    const elem = document.querySelector('#content');
    for( const i of arr ) {
        //für jedes i = index erstelle ein neues element
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        let img = document.createElement('img');
        img.src = i.map;
        cap.innerText = i.location;
        fig.append(img,cap);
        elem.append(fig);
    }
}

function mitInsertAdjacent(arr) {
    const elem = document.querySelector('#content2');
    for( const i of arr ) { 
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        cap.innerHTML = '<i>'+i.location+'</i>';
        fig.insertAdjacentElement('beforeend',cap);
        fig.insertAdjacentHTML('beforeend','<img src="'+i.map+'">'); 
        elem.insertAdjacentElement('beforeend',fig);    
    }
}

function mitForEach(arr) {
    arr.forEach((item) => {
        const figure = document.createElement('figure');
        const figCap = document.createElement('figcaption');
        const img    = document.createElement('img');
        img.src = item.map;
        figCap.append(item.location);
        figure.append(img);
        figure.append(figCap);
        document.querySelector('#content').append(figure);
    }); 
}


// function mitForLoop(arr) {
//     let newcontent = "";
//     for( let i = 0; i < arr.length; i++ ) {
//         newcontent += '<div class="events">';
//         newcontent += '<img src="'
//         +arr[i].map+'">';
//         newcontent += '<figcaption>'+arr[i].location+'</figcaption>';
//         newcontent += '</div>';

//     }

//     document.querySelector('#content').innerHTML = newcontent;    

// }

function mappen(arr) {
    //neues array namens bilder
    let bilder = arr.map(a => a.map);
    for(const item of bilder) {
        let img = document.createElement('img');
        img.src = item;
        document.querySelector('#content').append(img);
    }
}