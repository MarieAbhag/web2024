function loadImages(arr,frag) {
    // console.log(arr);
    // console.log(frag);
    for (let i of arr) {
        let divi   = document.createElement('div');
        let bild   = document.createElement('img');
        let span   = document.createElement('span');

        span.innerText = i.location;
        bild.src       = i.map;

        divi.append(span,bild);
        frag.append(divi);
    }
}

// sofortiges laden der ersten bilder in die #content

// ladeBilder('vieleArrays.json','#content','galerie1');




// ----------abfragen ob ein element im viewport erscheint-------------------------------
// ----------------mittels intersection Observer-------------------------------------------

const sec = document.querySelector('#content2');
const options = {
    root:null,                      //angabe des elternElements oder des viewports
    rootMargin:'0px',               //abstand ähnlich wie das css-margin
    threshold:0.5                   //sobald die sec zur Hälfte im viewport erscheint    
}

const callback = function(entries,observer) {
    const observed = entries[0];
    if(observed.isIntersecting) {
        //was soll passieren wenn observiert
        ladeBilder('vieleArrays.json','#content2','galerie2');
        observer.unobserve(sec);
    }
}

const observer = new IntersectionObserver(callback,options);
if(sec) {
    observer.observe(sec);
}

