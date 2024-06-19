// alert('hallo');
//  zum testen,ob der pfad zur tankstelle.js funktioniert

// welcher kraftstoff wurde getankt
// d = diesel, g = gas, s = super

const preis_gas     = 1;
const preis_diesel  = 1.7;
const preis_super   = 2;
// const liter = 70;
const demo = document.querySelector('#demo');

let rechnung;
// let kraftstoff = 'd';

// mit promptEingabe

let kraftstoff = prompt('biite geben Sie an was Sie getankt haben');
let liter      = prompt('wieviel haben Si denn getankt');





// mit einer if 

if ( kraftstoff == "d" ) {
    //was passieren soll wenn true

    rechnung = preis_diesel*liter;
    demo.innerHTML = "Ihre Rechnung beträgt " +rechnung+ "euro";
}


// mit einer if if 

if ( kraftstoff == "d" ) {
    //wenn der kunde über 50liter getankt hat
    if(liter > 50) {
        rechnung = (preis_diesel*liter)*0.8;
    } else {
        rechnung = preis_diesel*liter;
    }

    demo.innerHTML = "Ihre Rechnung beträgt " +rechnung+ "euro";
}

// logischer operator logisch ODER = klein 'd' ODER 'D' 
//eine der beiden bedinungen muss erfüllt sein

if( kraftstoff == 'd' || kraftstoff == 'b'  {
    //wenn der kunde über 50liter getankt hat
    if(liter > 50) {
        rechnung = (preis_diesel*liter)*0.8;
    } else {
        rechnung = preis_diesel*liter;
    }

    demo.innerHTML = "Ihre Rechnung beträgt " +rechnung+ "euro";
}

//logisch UND => BEIDE bedingungen müssen erfüllt sein
// der kraftstoff muss diesel sein UND 50liter oder darüber getankt
if( ( kraftstoff == 'd' || kraftstoff == 'D' ) && (liter >= 50) ) {
    //beide bedingungen sind erfüllt
}