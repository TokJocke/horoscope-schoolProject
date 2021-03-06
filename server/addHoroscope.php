<?php 

require "signsHoroscope.php"; 

try {
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {
        if($_SERVER["REQUEST_METHOD"] === "POST") { 

            
            if(!isset($_SESSION["sign"])) {

                $myDay = $_POST["day"];
                $myMonth = $_POST["month"];
                $sign = starSigns($myDay, $myMonth);
            
    
                $_SESSION["sign"] = serialize($sign);
    
                echo json_encode(true);
                exit;
            }
            else {
                echo json_encode(false);
                exit;
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