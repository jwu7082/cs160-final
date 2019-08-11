/* --------------------------- HOME PAGE / INDEX --------------------------- */
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* --------------------------- UPLOAD --------------------------- */
function uploadImage(event) {
    // Show image preview
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function uploadMusic(event) {
    console.log(event.target.files[0]);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", event.target.files[0], true);
    xhttp.send();
};

function uploadSheet(event) {
    
};
