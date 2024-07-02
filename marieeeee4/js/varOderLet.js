const demo = document.querySelector('#demo');


let global = 10;

function testglobal() {
    global += 10;
    // lokal += 10;
    
}

testglobal();

function testLokal() {
    lokal = 5;  //aus dieser var wird eine globale variable ( ohne schlüsselwort);
}

testLokal();

demo.innerHTML = lokal;