<?php
$conexion = mysqli_connect("localhost", "root", " ", "formulario_curso");

if(!conexion)
{
    echo "error de conexion";
}
else
{
    echo "conectado";
}

