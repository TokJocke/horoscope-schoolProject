<?php 

try {

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "GET") {
            
            echo(json_encode("You made it to viewHoroscope"));

            

            
            
        }
    }

}
catch(Exception $error) {

    
}


?>