let modal = document.getElementById("myModal");

let modalImg = document.getElementById("imgModal");
let captionText = document.getElementById("caption");

let thumbNails = document.getElementsByClassName("thumbnail");

for (let i = 0; i < thumbNails.length; i++) {
    thumbNails[i].onclick = function() {
        modal.style.display = "block";
        modal.style.transitionTimingFunction = "ease-in-out";
        modal.style.transitionDuration = ".3s";
        modal.style.transitionProperty = "display";
        
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

let span = document.getElementsByClassName("exit")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}