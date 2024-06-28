let arr = [
    {
        location:"silbersee",
        map:"img/vier.png"
    }, 
    
    {
        location:"edersee",
        map:"img/fuenf.png"
    },
    
    {
        location:"ammersee",
        map:"img/sechs.png"
    }
]

function auslese() {
    const elem = document.querySelector('#content');
    for( const i of arr ) {
        //kreieren der elmente
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        let img = document.createElement('img');

        //ffüllen mit text und src
        cap.innerText = i.location;
        img.src       = i.map;

        //anhängen an das figureElement
        fig.append( img, cap);

        //anhängen an den content
        elem.append( fig );
    }
}


// ----------------------------------------------------------------------------------------------

function ausleseForEach() {
    //mit forEach wird für jedes gefundene element eine function ausgeführt
    const elem = document.querySelector('#content');
    arr.forEach(function(item){
        let fig = document.createElement('figure');
        let cap = document.createElement('figcaption');
        let img = document.createElement('img');

        img.src = item.map;
        cap.append(item.location);

        fig.append( img, cap);
        elem.append( fig );
    });
}

// ----------------------------------------------------------------------------------------------

// function mitTags() {
//     // forSchleifePlusInnerHtml

//     let newcontent = "";
//     for( let i = 0; i < arr.length; i++ ) {
//         newcontent += '<div class="events">';
//         newcontent += '<img src="'+arr[i].map+'">';
//         newcontent += '<ficaption>'+arr[i].location+'</figcaption>';
//         newcontent += '</div>';

//         document.querySelector('#content').innerHTML = newcontent;
//     }
// }

// function mitTags() {
//     //mit templateLiteral
//     const elem = document.querySelector('#content');
//     let fig = "";

//     for(const i of arr) {
//         //mit backTipps shift + ´ und dann eine leerTaste
//         fig += `<figure><img src="${i.map}" alt="nicht da"> <figcaption>${i.location}</figcaption></figure>`;
//     }
//     elem.innerHTML = fig;
// }

function mitTags() {
    //mit insertAdjacentHtml
    const elem = document.querySelector('#content');
    

    for(const i of arr) {
            let fig = document.createElement('figure');
            let cap = document.createElement('figcaption');
            cap.innerText = i.location;

            fig.insertAdjacentElement('beforeend', cap);
            fig.insertAdjacentHTML('beforeend', `<img src="${i.map}">`);
            fig.insertAdjacentText('beforeend','ach wie schön');
            elem.insertAdjacentElement('beforeend',fig);
    }
    
}

mitTags();

















document.querySelector('.forof').addEventListener('click', auslese);
document.querySelector('.foreach').addEventListener('click', ausleseForEach);