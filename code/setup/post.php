<?php

$text = $_POST["t"];
$d = $_POST["d"];

$time = $_POST["hour"] . ":" . $_POST["min"];
$date = $d . "+" . $time;

$t = urlencode($text);
$d = urlencode($date);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv = "refresh" content = "1; url = ../?<?php echo "t=$t&d=$date" ?>" />

    <a href="../?<?php echo "t=$t&d=$d" ?>">Loading countdown in 1 seconds, if it dosnt load, click here.</a>
</head>

</html>