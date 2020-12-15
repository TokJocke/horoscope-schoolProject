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
    }

}
catch(Exception $error) {

    
}


?>