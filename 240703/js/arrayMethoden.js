
const anz = document.querySelector('#demo');



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");                    //fügt ein neues element ein
fruits.shift();                         //entfernt ein element
fruits.splice(2, 0, "Lemon", "Kiwi");   //index remove element element
fruits.splice(2, 2);                    //index + removen
console.log(fruits);
// anz.innerHTML = fruits;

// verbinden(concat) von arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myHomys = ["Horst", "Inge", "snoopy"];

const myChildren = myGirls.concat(myBoys,myHomys);
// anz.innerHTML = myChildren;

//nicht destruktiv
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);


// ------------------------------------filter-------------------------------------------------


//array.filter filtert das array mit dem kriterium der funktion-------------------------------------
//und speichert dies im NEUEN array
function checkLarge(num) {
    return num > 100;
}

const num = [100,245,57,118];
const newArr = num.filter(checkLarge);
// console.log(newArr);

// was ist das bitte ???
const large = num.filter((elem) => elem > 100);

let alben = [
    {title: 'Push the Sky Away',artist: 'Nick Cave', year: 2013},
    {title: 'No more shall we part',artist: 'Nick Cave',year: 2001},
    {title: 'Live from Mars',artist: 'Ben Harper',year: 2003},
    {title: 'The Will to Live',artist: 'Ben Harper',year: 1997}
   ];

let before2000 = alben.filter(
    (   //eine callbackFunction
        alben       //das jeweilige element
        //index,       index des elementes im array - optional
        //alben        //das gesamte array - optional
    ) => {
        return alben.year < 2000;

        // Die Methode liefert nur die Alben ...
        // ... die vor 2000 veröffentlicht wurden.
    }
)

console.log(before2000);

const produkte = [
	{"art": "Buch", "no": 1724, "price": "3.75", "lager": 27},
	{"art": "Kalender", "no": 475, "price": "13.99", "lager": 13},
	{"art": "Buch", "no": 188, "price": "14.05", "lager": 28},
	{"art": "Spiel", "no": 774, "price": "22.99", "lager": 4},
	{"art": "Papier", "no": 2713, "price": "4.95", "lager": 120},
	{"art": "Spiel", "no": 75, "price": "2.50", "lager": 32}
];

function checkPrice(obj) {
    if(obj.price >= 13.99) {
        return obj;
    }
}

const neuesArr = produkte.filter(checkPrice);
console.log(neuesArr);

anz.innerHTML = neuesArr;


// ----------------------Array.map-------------------------------------------------

const json = [
    {
        "location":"kollerinsel",
        "map":"img/vier.png",
        "rating":"3",
        "photoshp":"neu"
    },
    {
        "location":"otterstädter altrhein",
        "map":"img/fuenf.png",
        "rating":"4",
        "photoshp":"neu"
    },
    {
        "location":"friesenheimer insel",
        "map":"img/sechs.png",
        "denPfad":"ausgehend von der htmlDatei",
        "rating":"5",
        "photoshp":"neu"
    }
]

//neues array namens bilder
let bilder = json.map(a => a.map);
console.log(bilder);

for(const item of bilder) {
    let img = document.createElement('img');
    img.src = item;
    anz.append(img);
}

// --------------------------------find-------------------------------------

let rating = json.find( elem => elem.rating > 3);
// console.log(rating);

// zeigt nur das erste gefundene element an 
// will man suchen - keine schlechte Methode


// anz.innerHTML = rating;