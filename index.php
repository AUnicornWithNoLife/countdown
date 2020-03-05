<?php

$date = $_GET["d"];
$text = $_GET["t"];
$css = "cool";

if(is_numeric(strpos($text, "Christmas")) || is_numeric(strpos($text, "christmas")) || is_numeric(strpos($text, "xmas")) || is_numeric(strpos($text, "Xmas"))){
    $css = "css.php?type=xmas&ext=jpg";
}
if(is_numeric(strpos($text, "Birthday")) || is_numeric(strpos($text, "birthday")) || is_numeric(strpos($text, "bday")) || is_numeric(strpos($text, "Bday"))){
    $css = "css.php?type=bday&ext=png";
}
if(is_numeric(strpos($text, "New Year")) || is_numeric(strpos($text, "New year")) || is_numeric(strpos($text, "new Year")) || is_numeric(strpos($text, "new year"))){
    $css = "css.php?type=newyear&ext=jpg";
}

if (isset($text)){
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="veiwport" content="width=device-width, initial-scale=1.0">
    <meta name="Clacks-Overhead" content="GNU terry pratchet">

    <title>Your Custom Countdown</title>

    <?php echo "<link rel='stylesheet' type='text/css' href='$css'>" ?>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src='count.js'></script>
    <script src='notify.js'></script>
    <script src='link.js'></script>
</head>
<body>
    <div class="w3-container w3-row">
        <div class="w3-half">
            <a href='./setup' class="in">Create your own!</a>
            <button onclick="share()">Share!</button>            
        </div>
        <p class="w3-half in" style="text-align: right;">v=4.1.2</p>
    </div>

    <h1 id='count' style="font-family: 'ZCOOL QingKe HuangYou', cursive"> loading </h1>
</body>
</html>

<?php
echo "<script>c('$date','$text');</script>";
}else{
?>

<!DOCTYPE html>
<html>
   <head>
      <meta http-equiv = "refresh" content = "0; url = ./setup" />
   </head>
</html>

<?php
}
?>