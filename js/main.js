class Marker {
    constructor (color = "darkmagenta", percent = 100 ){
        this.color = color;
        this.percent = percent
    }
}

var GreenMarker = new Marker();

function WriteGreen (){
    let TextGreen = document.getElementById("TextMarker").value;
    let Green = document.getElementById("content");
    let Spaces = TextGreen.split(' ').join('');

    if(Spaces.length < GreenMarker.percent * 2){
        clean()
        Green.insertAdjacentHTML('beforeend', `<div style="color: ${GreenMarker.color};">${TextGreen}</div>`);
    }else {
        alert("Не могу больше писать, нет чернил");
        document.getElementById("TextMarker").value = "";
        document.getElementById('TextMarker').readOnly = true;
    }
}

class NewMarker extends Marker {
    constructor(color, percent) {
        super(color, percent);
      
    }
}

let NewColor = new NewMarker();

function WriteNewGreen (){
    let Text2Green = document.getElementById("TextMarker2").value;
    let GreenNew = document.getElementById("content2");
    let Spaces = Text2Green.split(' ').join('');

    if(Spaces.length < NewColor.percent * 2){
        clean2()
        GreenNew.insertAdjacentHTML('beforeend', `<div style="color: ${NewColor.color};">${Text2Green}</div>`);
    }else {
        alert("Не могу больше писать, нет чернил");
        document.getElementById("TextMarker2").value = "";
        document.getElementById('TextMarker2').readOnly = true;
    }
}

function fill() {
    NewColor.percent = 100;
    document.getElementById("TextMarker2").readOnly = false;
}

function clean() {
    let compareClean = document.getElementById("content");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}
function clean2() {
    let compareClean = document.getElementById("content2");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}