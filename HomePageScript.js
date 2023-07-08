
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

function onEncodePressed(){
  alert("Encode pressed!");
  $.ajax({
    url: 'Handle.php',
    type: 'POST',
    data: new FormData($('inputForm')[0]),
    action: 'upload_encode',

    //Must include these options
    cache: false,
    contentType: false,
    processData: false,
  }).done(encodeFinish());
}

function onDecodePressed(){
  alert("Decode pressed!");
  $.ajax({
    url: 'Handle.php',
    type: 'POST',
    data: new FormData($('inputForm')[0]),
    enctype: 'multipart/form-data',
    action: 'upload_decode',

    //Must include these options
    cache: false,
    contentType: false,
    processData: false,
  }).done(decodeFinish());
}

function encodeFinish() {
  //Call on ajax return for encode finish
  //link -- backend/output_encode.txt
}

function decodeFinish() {
  //Call on ajax return for decode finish
  //link -- backend/output_decode.txt
}
