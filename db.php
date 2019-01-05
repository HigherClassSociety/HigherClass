<?php
$user = 'root';
$pass = '';
$db = 'higherclass';


$db = new mysqli('localhost', $user, $db) or die("unable to connect");

echo "created!";
?>  