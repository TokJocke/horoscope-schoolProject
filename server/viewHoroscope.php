<?php 

try {

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "GET") {
            
            if(isset($_SESSION["sign"])) {
         
                echo json_encode(unserialize($_SESSION["sign"]));
            }
            else {
                echo json_encode(false);
            }
     
            
        }
        else {
            throw new Exception("wrong request method", 405); 
        }
    }
    else {
        throw new Exception("no request method", 404); 
    }

}
catch(Exception $error) {

    echo json_encode(array("message" => $error -> getMessage(), "status" => $error -> getCode()));

}


?>