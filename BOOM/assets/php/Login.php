<?php

print_r($_REQUEST);
echo "<pre>";
print_r ( $_POST);

$email = $_POST['correo'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$birthdate = $_POST['Fecha'];

echo"<hr>";
echo"Los Datos ingresados son : <br><br>";

echo "$email <br>";
echo "$password <br>";
echo "$confirm_password <br>";
echo "$birthdate <br>";
?>