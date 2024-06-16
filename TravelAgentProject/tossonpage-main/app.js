
// function to scroll the orange div to the view
function ScrollToOrange() 
{
    var elmnt = document.getElementById("contentOrange");
    elmnt.scrollIntoView({behavior: 'smooth'});
}

// function to scroll the blue div to the view
function ScrollToBlue() {
    var elmnt = document.getElementById("contentBlue");
    elmnt.scrollIntoView({behavior: 'smooth'});
}

// function to scroll to the top
function BackToTop(){
    var elmnt = document.getElementById("mainDiv");
    elmnt.scrollIntoView({behavior: 'smooth'});
}



function AboutUsSection(){
    var elmnt = document.getElementById("aboutme");
    elmnt.scrollIntoView({behavior: 'smooth'});
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";

}

// var typingEff = new Typed(".multitext", {
//     strings: ["Data Scientist", "Software Engineer"],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 1500
// })




// function GenerateList(){
//     let items = ['Blue','Red','White','Green','Black','Orange']

//    var ul = document.getElementById("myList");

// items.forEach(function (item) {
//     let li = document.createElement('li');
//     ul.appendChild(li);

//     li.innerHTML += item;
//     li.className = "liStyle"
// });
// }
