
/* --------------------------- UPLOAD --------------------------- */
  function previewImage(event) {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
  };