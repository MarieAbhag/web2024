let btn = document.getElementById('addbtn')
btn.addEventListener('click', addBtnClicked)
let isClickedBefore = false;
const imgSrcArr = ['img/eins.png','img/drei.png','img/vier.png','img/fuenf.png']
const imgAltArr = ['eins','drei','vier','fuenf']

var counter = 1

function addBtnClicked() {
    // get value of name 
    let nameValue = document.getElementById('name').value;
    // get value of age 
    let ageValue = document.getElementById('age').value;
    // check if the are valid
    if (nameValue.length < 3) {
        alert('Invalid name, please try again.')
        return
    }
    if (ageValue.length < 1) {
        alert('Invalid age, please try again.')
        return
    }

    // add them to the table 
    let nameTh =  document.createElement('th');
    nameTh.innerHTML = nameValue;
    let ageTh =  document.createElement('th');
    ageTh.innerHTML = ageValue;

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = "X"
    removeBtn.id = counter
    removeBtn.addEventListener('click', RemoveRow)
    //oder delete RemoveRow instead diese ....and delete function RemoveRow kolha
    // (e) => {
    //     document.getElementById(e.target.id+"t").remove() 
    // })


    let btnTh =  document.createElement('th');
    btnTh.appendChild(removeBtn)

    let tableTr = document.createElement('tr');
    tableTr.id = counter+"t";
    counter++;
    tableTr.appendChild(nameTh);
    tableTr.appendChild(ageTh);
    tableTr.appendChild(btnTh);

    let table = document.getElementById('users-table');
    table.appendChild(tableTr)

    document.getElementById('name').value = ""
    document.getElementById('age').value = ""
}

function RemoveRow(e) {
    document.getElementById(e.target.id+"t").remove() 
}


function loadImages() {
    if (isClickedBefore) {
        return
    }
    let imageDiv = document.getElementById('images-div');

    for (let i = 0; i < imgSrcArr.length; i++) {
        let removeImage = document.createElement('button');
        removeImage.innerHTML = "X";
        removeImage.id = imgAltArr[i];
        removeImage.addEventListener("click", deleteImage)
        imageDiv.appendChild(removeImage);
        const imgSrc = imgSrcArr[i];
        const imgAlt = imgAltArr[i];
        let newImage = document.createElement('img');
        newImage.id = imgAltArr[i]+"o";
        newImage.src = imgSrc;
        newImage.alt = imgAlt;
        imageDiv.appendChild(newImage);

    }
    isClickedBefore = true;

}

function deleteImage(e){
    document.getElementById(e.target.id+"o").remove();
    document.getElementById(e.target.id).remove();
}

