
/*
//Javascript from first script block in html
function returnBoxAction() {
}


//Javascript from second script block in html
var dropArea = document.getElementById('dropArea');

dropArea.addEventListener('dragenter', preventDefault, false);
dropArea.addEventListener('dragover', preventDefault, false);
dropArea.addEventListener('drop', preventDefault, false);

dropArea.addEventListener('drop', handleDrop, false);

function preventDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function handleDrop(event) {
  var files = event.dataTransfer.files;
  console.log(files);
}

*/
//Might be wrong with .submit_button

function onEncodePressed() {
  alert("Encode pressed!");
  var form = $('#inputForm')[0];
  var formData = new FormData(form);
  formData.append('message', 'upload_encode'); // Add the 'message' parameter

  $.ajax({
    url: 'Handle.php',
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false
  }).done(function() {
    encodeFinish(); // Call the callback function after the AJAX request is completed
  });
}

function onDecodePressed() {
  alert("Decode pressed!");
  var form = $('#inputForm')[0];
  var formData = new FormData(form);
  formData.append('message', 'upload_decode'); // Add the 'message' parameter

  $.ajax({
    url: 'Handle.php',
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false
  }).done(function() {
    decodeFinish(); // Call the callback function after the AJAX request is completed
  });
}

function encodeFinish() {
  // Perform actions after encode completion
  var downloadLink = document.createElement('a');
  downloadLink.href = 'backend/output_encode.txt';
  downloadLink.download = 'compressed_file.txt';
  downloadLink.click();
}

function decodeFinish() {
  // Perform actions after decode completion
  var downloadLink = document.createElement('a');
  downloadLink.href = 'backend/output_decode.txt';
  downloadLink.download = 'decompressed_file.txt';
  downloadLink.click();
}