<?php

$date = $_GET["d"];
    
$text = $_GET["t"];

try{
    $check = strpos($text, "Christmas") + 1;
    $css = "xmas";
}catch(Exception $e){
    $css = "cool";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <div class="w3-container w3-row">
        <div class="w3-half">
            <a href='./setup' class="in">Create your own!</a>
            <button onclick="share()">Share!</button>            
        </div>
        <p class="w3-half in">v=1.3.0</p>
    </div>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Custom Countdown</title>
    <?php echo "<link rel='stylesheet' type='text/css' href='$css.css'>" ?>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">
    <script src='count.js'></script>
    <p id="clip" style="hidden;"></p>
</head>
<body>
    <h1 id='count' style="font-family: 'ZCOOL QingKe HuangYou', cursive"> loading </h1>
</body>
</html>

<?php
echo "<script>c('$date','$text');</script>";
?>