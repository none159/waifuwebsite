<?php
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
Accept, x-client-key, x-client-token, x-client-secret, Authorization");
 echo "<script>console.log('run');</script>";
if($_POST["sender"] && $_POST["receiver"] && $_POST["obj"] && $_POST["text"]){
   
    
}
?>