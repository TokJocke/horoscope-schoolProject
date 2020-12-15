<?php 

try {

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "DELETE") {
            if(isset($_SESSION["sign"])) {
           
                unset($_SESSION["sign"]); //Misstänker att denna bara tömmer värdet i sign vilket krockar med andra funktioner
                echo json_encode(true);
                exit;
            }
            else {
                echo json_encode(false);
                exit;
            }
            
          
            
            
        }
    }

}
catch(Exception $error) {

    
}


?>