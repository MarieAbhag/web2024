function loadText(json,id,gal) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //alles in ordnung die antwort ist fertig und wird zurückgeschickt
        if( xhr.readyState === 4  && xhr.status === 200 ) {
            const obj = JSON.parse(xhr.responseText);
            const elem = document.querySelector(id);
            const arr = obj[gal];
            
        }
    }

    xhr.open('GET','extern/'+json,true);
    xhr.send(null);
}

function auslesen(arr) {

}

// ----------------------mit promise--------------------------


function myAsyncRequest(uri) {
    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            reject(new Error('could not load the image: '+uri));
        }

        image.src = uri;
    })
}

myAsyncRequest('img/a.png') 
.then(function(image){
    return { src:image.src, width:image.width, heigth:image.height }
})
.then(function(data){
    document.querySelector('#bild').src = data.src;
})

// --------------------------mit fetchApi----------------------------

// function() {}
// () => {}


fetch(url)
.then(function(response){
    if(response.ok){
        return response.json();
    }else {
        throw new Error('ein fehler ist aufgetreten');
    }
})
.then((data) => {

})
.catch((error,response) => {
    console.error(error);
    if(!response) { console.log('keine antwort');}
})

// -----------------------------async / await--------------------------

async function fetchAutos() {
    try {
        let response = await fetch('extern/autos.json');
        let json = await response.json();
        let autos = json.autos;

        const elem = document.querySelector('#content2');
        for (const i of autos) {
        let fig = document.createElement('figure');
        fig.classList.add('figure');
        let cap = document.createElement('figcaption');
        cap.classList.add('figcaption');
        cap.textContent = i.caption;
        let img = document.createElement('img');
        img.classList.add('img');
        img.src = i.imgPath;

        fig.append( img, cap);
        elem.append(fig);
        }
    } catch(e) {

    }
}

// wann nimmt man xhr wann fetch?
// xhr, wenn ältere browser berücksichtigt werden sollen z.B. bei behörden
// ansonsten fetch oder async als neuere variante


// ------------------die einfachste Variante--------------------------------
document.addEventListener('DOMContentLoaded',function(){
    laden('extern/grimaud.json');
});



function laden(json){
    const elem = document.querySelector('#content');
    elem.innerHTML = "";
    fetch(json)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        } else {
            return response.json();
        }
    })
    .then(data => {
        data.forEach((image,i) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.imgPath;
            imgElement.alt = image.title;
            elem.append(imgElement);
        })
    })
}


// -----------------------einfügen von generierten inhalten-------------

const imgElement = document.createElement('img');
list.insertAdjacentElement('afterbegin',imgElement);

list.insertAdjacentHTML('afterbegin','<li class="adjacent">afterbeginScript</li>')
list.insertAdjacentText('afterbegin','irgendeinen text');

let fig = "";
<figure>
    <img src="${vari}" alt=" nicht da ">
    <figcaption>${vari}</figcaption>
</figure>;

fig += `<figure><img src="${i.map}" alt=" nicht da "><figcaption>${i.location}</figcaption</figure>`;























// document.querySelector('#senden').addEventListener('click', laden);