<?php

$type = $_POST["type"];

$text = $_POST["t"];
$d = $_POST["d"];

if (!isset($_POST["hour"])){
    $_POST["hour"] = 0;
}
if (!isset($_POST["min"])){
    $_POST["min"] = 0;
}

$time = $_POST["hour"] . ":" . $_POST["min"];
$date = $d . "+" . $time;

$t = urlencode($text);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv = "refresh" content = "0; url = ../?<?php echo "t=$t&d=$date" ?>" />
</head>
</html>