<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $winner = $_POST['winner'];
    $file = fopen("winners.txt", "a");
    fwrite($file, "Winner: " . $winner . " - " . date("Y-m-d H:i:s") . "\n");
    fclose($file);
}
header("Location: index.php");
exit();
?>