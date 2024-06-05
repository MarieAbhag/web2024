// der ball soll sich drehen wenn mouseover registriert wird
//bei mouseover lass die ani laufen

//den banner auswählen
//und in der variablen 'banner' speichern
let b = document.querySelector('#banner');


//touchstart für mobile
b.onmouseover =
b.ontouchstart = function() {
    this.children[0].style.animationPlayState = 'running';
}


//touchend für mobile
//bei mouseout pausiere die ani 
b.onmouseout =
b.ontouchend = function() {
    this.children[0].style.animationPlayState = 'paused';
}