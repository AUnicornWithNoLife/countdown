<?php

$text = $_POST["t"];
$d = $_POST["d"];

$t = urlencode($text);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv = "refresh" content = "0; url = ../?<?php echo "t=$t&d=$d" ?>" />
    <?php echo "$text <br> $t" ?>
</head>
</html>