function accionParaCuandoEllaDigaQueSi(){
    swal("Sabia que dirias que Si !! <3")
    .then((value) => {
    swal(`Entonces unos besitos o que ?: ${value}`);
    });
}

function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
    

}