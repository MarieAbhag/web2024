function myAsyncRequest(uri) {
    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            reject(new Error('konnte das bild nicht laden'+uri));
        }
        image.src = uri;
    })
}

myAsyncRequest('img/a.png')
.then((image) => {
    console.log(image);
    return { src:image.src, width:image.width, height:image.height }
})

.then((data) => {
    console.log(data.width);
    console.log(data.height);
    document.querySelector('#bild').src = data.src;
})