// let myTable = document.getElementById('table');
// let namek = "amir"
// let family = "Tosson"
// let myage = 11
// myTable.innerHTML += 
// "<tr><th>"+namek+"</th><th>"+family+"</th><th>"+11+"</th></tr>";
var myid = 0

function btn(){
    myid++;
    let nameElement = document.getElementById('inputEins');
    let nameValue = nameElement.value
    let familyElement = document.getElementById('inputZwei');
    let familyValue = familyElement.value
    let ageElement = document.getElementById('inputDrei');
    let ageValue = ageElement.value
    let myTable = document.getElementById('table');
    myTable.innerHTML += 
"<tr id="+myid+"><th>"+nameValue+"</th><th>"+familyValue+"</th><th>"+ageValue+"</th><th><button onclick='remove()'>remove</button></th></tr>";
}

function remove(){
    console.log('hi');


}






























			
// function btn(){
//     let element = document.getElementById('text');
//     let textValue = element.value
//     let elementZwei = document.getElementById('password');
//     let passwordValue = elementZwei.value    
 
//     if(textValue === "" || passwordValue === "" )
//      {
//          window.alert("you forget to fill user name or password");
//      }
//      else if(passwordValue.length < 8)
//      {
//          window.alert("y7omar")
//      }
//     else {
//          document.getElementById("users").innerHTML += "<br>"+textValue;
//          element.value = "";
//          elementZwei.value = "";
//      }
//  }