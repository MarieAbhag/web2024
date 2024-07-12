const url = 'https://aws.random.cat/meow'
const url2 = "https://random.dog/fb5524fa-28f5-42e2-a60c-ddc413f099d1.jpg"
const cat_result = document.getElementById('cat_result');       
const dog_result= document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn .addEventListener('click' , getRandomCat);
// dogBtn .addEventListener('click' , getRandomdog);

function getRandomCat() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img
            src="${data.file}"/>`
        })
}