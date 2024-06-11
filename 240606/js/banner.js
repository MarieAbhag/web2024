// der ball soll sich drehen wenn mouseover registriert wird
//bei mouseover lass die ani laufen

//den banner auswählen
//und in der variablen 'banner' speichern
let banner = document.querySelector('#banner');


//touchstart für mobile
banner.onmouseover =
banner.ontouchstart = function(evt) {
    this.children[0].style.animationPlayState = 'running';
}


//touchend für mobile
//bei mouseout pausiere die ani 
banner.onmouseout =
banner.ontouchend = function(evt) {
    this.children[0].style.animationPlayState = 'paused';
}