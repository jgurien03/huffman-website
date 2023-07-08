
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
  //Call on ajax return for encode finish
  //link -- backend/output_encode.txt
}

function decodeFinish() {
  //Call on ajax return for decode finish
  //link -- backend/output_decode.txt
}