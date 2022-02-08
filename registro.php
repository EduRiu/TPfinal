<?php
include "conexion.php";
//recibir datos y almacenarlos en varibles//
$Nombre = $_POST["nombre"];
$Apellido = $_POST["apellido"];
$Documento = $_POST["dni"];
$Dia = $_POST["dia"];
$Mes = $_POST["mes"];
$Año = $_POST["año"];
$Domicilio = $_POST["domicilio"];
$Telefono = $_POST["telefono"];
$Correo = $_POST["correo"];
$Ciudad = $_POST["ciudad"];
$Provincia = $_POST["provincia"];
$Pais = $_POST["pais"];
//consulta para insetar//
$insertar = "INSERT INTO registro (nombre, apellido, dni, dia, mes, año, domicilio, telefono, correo, ciudad, provincia, pais) 
VALUES ("$nombre", "$apellido", "$dni", "$dia", "$mes", "$año", "$domicilio", "$telefono", "$correo", "$ciudad", "$provincia", "$pais")";
$resultados = mysqli_query($conexion, $insertar);
if (!resultado)
{
    echo "error de registro";
}
else
{
    echo "registro correcto";
}
//cerrar conexion
mysqli_close ($conexion);


