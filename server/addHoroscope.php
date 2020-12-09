<?php 

require "signsHoroscope.php"; 

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            
            $myDay = $_POST["day"];
            $myMonth = $_POST["month"];
       /*      $date = json_encode($_POST["month"] . " " . $_POST["day"]);

            echo($date);
 */
            starSigns($myDay, $myMonth);

            echo(json_encode(starSigns($myDay, $myMonth)));

            
            
        }
    }

}
catch(Exception $error) {

    
}


?>