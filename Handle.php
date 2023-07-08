<?php
    if (isset($_POST['message'])){
        switch($_POST['message']){
            case 'upload_encode':
                upload_encode();
                break;
            case 'upload_decode':
                upload_decode();
                break;
        }
    }

    function upload_encode(){
        // Process uploaded file without storing it on the server
        /*
        ./encode -i <file name> -o <file name>
        ./decode -i <file name> -o <file name>
        */

        // Get the uploaded file data
        $file = $_FILES['file'];

        // Check if the file was uploaded successfully
        $fileError = $file['error'];
        if ($fileError != 0){
            return;
        }

        // Get the file contents
        $fileContent = file_get_contents($file['tmp_name']);

        // Encode the file content using the Huffman text compressor
        $encodedContent = encode($fileContent);

        // Download the encoded file
        download($encodedContent, 'output_encode.txt');
    }

    function upload_decode(){
        // Process uploaded file without storing it on the server
        /*
        ./encode -i <file name> -o <file name>
        ./decode -i <file name> -o <file name>
        */

        // Get the uploaded file data
        $file = $_FILES['file'];

        // Check if the file was uploaded successfully
        $fileError = $file['error'];
        if ($fileError != 0){
            return;
        }

        // Get the file contents
        $fileContent = file_get_contents($file['tmp_name']);

        // Decode the file content using the Huffman text compressor
        $decodedContent = decode($fileContent);

        // Download the decoded file
        download($decodedContent, 'output_decode.txt');
    }

    function encode($content){
        // Implement the logic to call the Huffman text compressor for encoding
        // Example command:
        $encodedContent = shell_exec('./encode -i - -o - << EOF' . PHP_EOL . $content . PHP_EOL . 'EOF');
        return $encodedContent;
    }

    function decode($content){
        // Implement the logic to call the Huffman text compressor for decoding
        // Example command:
        $decodedContent = shell_exec('./decode -i - -o - << EOF' . PHP_EOL . $content . PHP_EOL . 'EOF');
        return $decodedContent;
    }

    function download($content, $filename){
        // Send the file as a download response
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Content-Length: ' . strlen($content));
        echo $content;
    }
?>