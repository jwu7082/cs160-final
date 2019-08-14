/* --------------------------- HOME PAGE / INDEX --------------------------- */
//window.onscroll = function() {myFunction()};

//var header = document.getElementById("header");
//var sticky = header.offsetTop;
//
//function myFunction() {
//  if (window.pageYOffset > sticky) {
//    header.classList.add("sticky");
//  } else {
//    header.classList.remove("sticky");
//  }
//}

/* --------------------------- UPLOAD --------------------------- */
function openPopup() {
    document.getElementById('popup-bookmarks').style.opacity = 1;
    document.getElementById('popup-bookmarks').style.visibility = "visible";
};

function closePopup() {
    document.getElementById('popup-bookmarks').style.opacity = 0;
    document.getElementById('popup-bookmarks').style.visibility = "hidden";
};

function submitPopup() {
    /* TODO: Update upload page */
    closePopup();
};

function selectSource(bookmark) {
    var border = (bookmark.css('border') === '0px none rgb(255, 255, 255)');
    if (border) {
        bookmark.css('border', '3px solid #c0f');
    } else {
        bookmark.css('border', 'none');
    }
};

function uploadImage(event) {
    // Show image preview
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function uploadMusic(event) {
//    console.log(event.target.files[0]);
//    var xhttp = new XMLHttpRequest();
//    xhttp.open("GET", event.target.files[0], true);
//    xhttp.send();
};

function uploadSheet(event) {
};
