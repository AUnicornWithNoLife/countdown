<?php
    
$date = $_GET["d"];
    
$text = $_GET["t"];
if ($text == "Christmas"){
    $css = "xmas";
}else{
    $css = "cool"; 
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <a href='./setup'>create your own!</a>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Custom Countdown</title>
    <?php echo "<link rel='stylesheet' type='text/css' href='$css.css'>" ?>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">
    <script src='count.js'></script>
</head>
<body>
    <h1 id='demo' style="font-family: 'ZCOOL QingKe HuangYou', cursive"> loading </h1>
</body>
</html>

<?php
echo "<script> c('$date' , '$text');</script>";
?>