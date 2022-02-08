function inhabilitarprovincia()
{
    var x=document.getElementById("provincia");
    x.disabled=true
}
//Habilita campo PROVINCIA
   function habilitarprovincia()
   {
       var x=document.getElementById("provincia");
        x.disabled=false
        
   }
   //Inhabilita campo PAIS
   function inhabilitarpais()
    {
    var x=document.getElementById("pais");
    x.disabled=true
    }
   //Habilita campo PAIS
   function habilitarpais()
   {
       var x=document.getElementById("pais");
        x.disabled=false
   }

//FUNCIONA --- obs, deberia decir que campos tiene que completarse//
 function valida() 
{    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var domicilio = document.getElementById("domicilio").value;
    var expresion = /\w+@\w+\.+[a-z]/;

if (nombre =="" || apellido =="" || correo =="" || dni =="" || telefono =="" || domicilio =="")
{
    alert("los campos son obligatorios");
    return false;
}
if (!expresion.test(correo))
{
    alert("correo invalido");
    return false;
}
}


//funcion calcular, no funciona... Tome un ejemplo de internet, lo llevo a mi planilla,
//aunque tampoco tira error...RA

function calEdad() 
{
    const fechaNacimiento = document.getElementById("fecha");
    const edad = document.getElementById("lbedad");

    const calEdad = (fechaNacimiento) => {
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());

        // 2016-07-11
        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }
        return edad;
    };

    window.addEventListener('load', function () {

        fechaNacimiento.addEventListener('change', function () {
            if (this.value) {
                edad.innerText = `La edad es: ${calEdad(this.value)} años`;
            }
        });

    });
}

