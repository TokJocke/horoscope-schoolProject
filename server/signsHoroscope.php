<?php 


function starSigns($day, $month) {

    $sign = "blaha";
    
    if($month == 3 && $day > 20 || $month == 4 && $day < 20) { $sign = "Väduren"; }
    else if ($month == 4 && $day > 19 || $month == 5 && $day < 21) { $sign = "Oxen"; }
    else if ($month == 5 && $day > 20 || $month == 6 && $day < 21) { $sign = "Tvillingarna"; }
    else if ($month == 6 && $day > 20 || $month == 7 && $day < 23) { $sign = "Kräftan"; }
    else if ($month == 7 && $day > 22 || $month == 8 && $day < 23) { $sign = "Lejonet"; }
    else if ($month == 8 && $day > 22 || $month == 9 && $day < 23) { $sign = "Jungfrun"; }
    else if ($month == 9 && $day > 22 || $month == 10 && $day < 23) { $sign = "Vågen"; }
    else if ($month == 10 && $day > 22 || $month == 11 && $day < 22) { $sign = "Skorpionen"; }
    else if ($month == 11 && $day > 21 || $month == 12 && $day < 22) { $sign = "Skytten"; }
    else if ($month == 12 && $day > 21 || $month == 1 && $day < 20) { $sign = "Stenbocken"; }
    else if ($month == 1 && $day > 19 || $month == 2 && $day < 19) { $sign = "Vattumannen"; }
    else if ($month == 2 && $day > 18 || $month == 3 && $day < 21) { $sign = "Fiskarna"; }

    return $sign;
}







//Vill inte hämta JS funktioner. Kanske borde köra en POST eller liknande för att importa värdet för $day och $month


//Kanske skapa funktionen med parametrar sen exporta funktionen till addHoroscope för att där ta emot datum i POST och
//sen använda dessa som parametrar när jag kallar på funktionen.. 



//$month == x && $day > x ) || ( $month == x && $day < x ) ) { $sign = "X" }

?>