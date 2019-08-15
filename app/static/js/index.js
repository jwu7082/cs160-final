/* --------------------------- HOME/INDEX --------------------------- */
/* For the heart/bookmark icons */
function iconClick(icon) {
    var filled = (icon.css('color') === 'rgb(204, 0, 153)');
//    console.log(icon.css('color'));
//    console.log(filled);
    if (filled) {
        icon.css('color', 'white');
    } else {
        icon.css('color', '#c09');
    }
}

//function iconLike(icon) {
//    iconClick(icon); // change color
//    // TODO: update # likes
//}

/* For the play audio file icon*/
function iconClickPlay(icon) {
    console.log(icon);
    console.log(icon.getAttribute('name'));
    var playing = (icon.getAttribute('name') === 'ios-pause');
    console.log(playing);
    if (playing) { 
        icon.setAttribute('name', 'ios-play-circle');
    } else {
        icon.setAttribute('name', 'ios-pause')
    }
//    icon.style.color = '#4A00E0';
}

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

};

/* --------------------------- INDIV MUSIC SUBMISSION PAGE --------------------------- */

function selectInspiration(inspiration) {
    var border = (inspiration.css('border') === '0px none rgb(255, 255, 255)');
    if (border) { 
        // Only one should be actively selected at any time
        var insp = document.getElementsByClassName('inspiration');
        for (var i = 0; i < insp.length; i++) {
            insp[i].style.border = 'none';
        }
        
        // Set border
        inspiration.css('border', '3px solid red');
        
        // Show differences on sheet music
        console.log(inspiration.attr('id'));
        switch(inspiration.attr('id')) {
            case 'inspiration-1':
                $(".similar-1").css('opacity', '1');
                $(".similar-2").css('opacity', '0');
                $(".similar-3").css('opacity', '0');
                break;
            case 'inspiration-2':
                $(".similar-1").css('opacity', '0');
                $(".similar-2").css('opacity', '1');
                $(".similar-3").css('opacity', '0');
                break;
            case 'inspiration-3':
                $(".similar-1").css('opacity', '0');
                $(".similar-2").css('opacity', '0');
                $(".similar-3").css('opacity', '1');
                break;
        }
    } else {
        inspiration.css('border', 'none');
    }
};