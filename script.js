particlesJS.load('particles-js',
'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');


function openImage(img){

document.getElementById("viewer").style.display="flex";

document.getElementById("fullImage").src=img.src;

}

function closeImage(){

document.getElementById("viewer").style.display="none";

}