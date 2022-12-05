// https://www.the-art-of-web.com/css/fading-slideshow-no-jquery/
window.addEventListener("DOMContentLoaded", function(e) {
    // Originaalse JavaScript koodi kirjutas Chirp Internet: chirpinternet.eu
var stage = document.getElementById("stage");
var fadeComplete = function(e) { stage.appendChild(arr[0]); }; // Lisab esimese lingi, stage div'i lõppu.
var arr = stage.getElementsByTagName("a");
for(var i=0; i < arr.length; i++) { //
    arr[i].addEventListener("animationend", fadeComplete, false);
}

}, false);