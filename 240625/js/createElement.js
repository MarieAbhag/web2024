// erstellen eines neuen li 

let neu     = document.createElement('li');             //<li></li>
let neuText = document.createTextNode('sprinta');       //sprinta

//verbinden von element und text
neu.appendChild( neuText );                             //<li>sprinta</li>

//das fertige element wird an die ul angehängt
let elternElement = document.querySelector('.beispiel');
elternElement.appendChild(neu);

// NUR das elternElement darf das kind löschen
// elternElement.removeChild(neu);

// ------------------------ohne umweg über ein elternElement-------------------

const p = document.createElement('p');
p.textContent = 'heute scheint die sonne';

const beispiel = document.querySelector('.beispiel');

// beispiel.before(p);
// beispiel.after(p);
// beispiel.append(p);
beispiel.prepend(p);