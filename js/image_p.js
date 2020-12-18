
var imgch = document.querySelector("img.moving");

var winw = window.innerWidth / 5;
var winh = window.innerHeight / 5 ;

function MovingImg (e){
    var mouseX = e.clientX / winw;
    var mouseY = e.clientY / winh;
    console.log(mouseX);

    imgch.style.transform = "translate3d("+ -(mouseX) +"%, "+ -(mouseY) +"%, 0)";
}
window.addEventListener("mousemove", MovingImg);
