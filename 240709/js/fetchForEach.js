const url = 'extern/galleries.json';
const home1 = document.querySelector('#content');
const home2 = document.querySelector('#content2');

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    appendData(data);
})
.catch((error) => {
    console.log('FEHLER '+error);
})

function appendData(data) {
    data.forEach((item) => {
        let elem = document.createElement('li');
        elem.innerHTML = item.name;
        home1.append(elem);
        elem.addEventListener('click', () => {
            const neue_url = item.dataPath;
            fetch(neue_url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                appendData2(data);
            })
        })
    })
}

function appendData2(data) {
    home2.innerHTML = "";
    data.forEach((item) => {
        let divi = document.createElement('div');
        let imi  = document.createElement('img');
        let cap  = document.createElement('figcaption');

        imi.src  = item.imgPath;
        cap.innerText = item.title;

        divi.append(imi,cap);
        home2.append(divi);
    })
}