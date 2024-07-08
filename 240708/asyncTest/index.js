const url = 'extern/galleries.json';
const cArr = ['red', 'blue', 'yellow']
let i = 0;

function Promise1() {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                console.log('From Promie one')
                console.log('From Promie one again')
                let y = [3,5,6]
                resolve(y)
                console.log('Promise End')
                
            }, 4000)
        }
    );
} 

function Promise2() {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                console.log('From Promie two')
                resolve(5)
            }, 3000)
        }
    );
}  

function Print1() {
    console.log('Hi From Function 1')
}
function Print2() {
    console.log('Hi From Function 2')
}


// function btnClicked() {
    
//    Promise1().then(
//     res => { //[1,2,3]
//         for (let index = 0; index < res.length; index++) {
//             console.log(res[index]+9)
            
//         }
//     }
//    )
// }
// async function btnClicked2() {
//     let H = await Promise1() //[3,5,6]
//     console.log('H = '+ H )
//     for (let index = 0; index < H.length; index++) {
//         console.log(H[index])
        
//     }

// }


function btnClicked() {
    fetch(weatherURL, {
        method:'GET'
    })
    .then(
        (results) => {
            let res = results.json()
            console.log(res)
        }
    )
 }

 async function btnClicked2() {
    let country = document.getElementById('country');
    let countryName = country.value;
    let wetterUrl ="http://api.openweathermap.org/data/2.5/weather?q="+countryName +"&appid=2cee41a74613123afb2c3027ee5d7434&units=metric"


    // const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=iraq&appid=2cee41a74613123afb2c3027ee5d7434&units='

    const weather = await fetch(wetterUrl,{
        method:'GET'
    })
    const p = await weather.json()
    let e1 = document.createElement('label');
    e1.innerHTML = 'Temprature = '
    let e2 = document.createElement('p');
    e2.innerHTML = p.main.temp

    let d = document.createElement('div');
    d.classList.add('h')
    if (i>cArr.length-1) {
        i = 0;
    }
    d.style.backgroundColor = cArr[i]
     i+=1;

    d.appendChild(e1);
    d.appendChild(e2);
    let parentDiv = document.getElementById('vis');
    parentDiv.appendChild(d);
    // console.log(p.main.temp)

 }



url = 'google.com' //-> url2 -> console.log


function x(){
    fetch(url)
    .then((res)=>{
        fetch(res)
        .then((res2)=>{
            console.log(res2)
        })

    })
}

async function o(){
    const result =await fetch(url)
    const result2 =await fetch(result)
    console.log(result2)
}