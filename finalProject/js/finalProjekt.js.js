const button = document.querySelector('.buttonS');
const count  = document.querySelector('.counterS');

const delay = seconds => {
    return new Promise (
        resolve => setTimeout(resolve, seconds * 1000)
    )
}

// ohne await
const countToFive = () => {
    count.textContent = "0";
    delay(1);
    count.textContent = "1";
    delay(1);
    count.textContent = "2";
    delay(2);
    count.textContent = "5";
    
}

button.addEventListener('click', () => {
    countToFive();
})

// ------------------------------mit async await-----------------------------------

const buttonA = document.querySelector('.buttonA');
const countA = document.querySelector('.counterA');

const delayA = seconds => {
    return new Promise (
        resolve => setTimeout ( resolve, seconds * 1000)
    )
}

const countToFiveA = async () => {                  //async macht aus der funktion eine asynchrone funktion
    countA.textContent = "0";
    await delay(1);                                 //wartet diesen schritt ab und geht erst dann zum nächsten
    countA.textContent = "1";
    await delay(1);
    countA.textContent = "2";
    await delay(2);
    countA.textContent = "3";
    await delay(2);
    countA.textContent = "4";
    await delay(2);
    countA.textContent = "5";
    
}

buttonA.addEventListener('click', () => {
    countToFiveA();
})

// ------------------------async await inklusive fetch-------------------

// const getBooks = (num) => {
//     try {
//         let response = fetch('extern/file.json');
//         let json = response.json();
//         let list = json.list;
//         console.log(list[num].autor);
//         document.querySelector('#anzeige').textContent = list[num].autor;
//     } catch(e) {
//         console.log ("Daten wurde nicht geladen", e);
//     }
// }

// getBooks(2);

// ich bekomme einen fehler, da die schritte zu schnell ausgeführt
// Daten wurde nicht geladen TypeError: response.json is not a function

const getBooks = async (num) => {
    try {
        let response = await fetch('extern/file.json');
        let json = await response.json();
        let list = json.list;
        console.log(list[num].autor);
        document.querySelector('#anzeige').textContent = list[num].autor;
    } catch(e) {
        console.log ("Daten wurde nicht geladen", e);
    }
}

getBooks(2);