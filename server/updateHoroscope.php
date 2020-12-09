<?php 

try {

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            
            echo(json_encode("You made it to uppdateHoroscope"));

            

            
            
        }
    }

}
catch(Exception $error) {

    
}


?>