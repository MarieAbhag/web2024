//traditionell eine anonyme funktion
let don = () => {}


function(a) {
    return a +200;
}

//entfernen von function + einfügen eines pfeiles 
//zwischen den runden und geschweiften klammern
(a) => {
    return a +200;
}

// function AA(a) {
//         return a +200;

// }

//bei nur einer zeile kann ich die geschweiften klammern weglassen
(a) => return a +200;

a => return a +200;

function(a,b) {
    return a +200;
}

(a,b) => { return a +200; }

oder

(a,b) =>  return a +200; 

(a,b) => {
    let don = 43;
    return a + b + 200;
}

books.forEach(function(book,index) {} );
books.forEach((book,index) => {} );


document.querySelector('button').addEventListener('click', function(){
    ladeBilder(woche.json);
});

document.querySelector('button').addEventListener('click', () => {
    ladeBilder(woche.json);
});

(a) => Array.map(neu);

let don = () => {}