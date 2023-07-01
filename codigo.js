var arreglo_ingreso= []; 
var cadenaRecibida= "";

function eliminar(){
  arreglo_ingreso.splice(0);
  cambio.splice(0);
  document.getElementById('Salida').value=" ";
}

function comparacion (a,b)
{
  return a-b
}



function recoger()
{
    let dato=document.getElementById('ingreso').value;
    arreglo_ingreso.push(dato);

    dato==0;
document.getElementById('ingreso').value=" ";
    alert(arreglo_ingreso);
  }
  
function mostrar()
  { 
    arreglo_ingreso.sort(comparacion);
    var cambio=[];
    cambio=arreglo_ingreso.pop();
   for(var i =0; i<=cambio.length;i++)
    {
    console.log(cambio[i]);
      document.getElementById('Salida').innerHTML= "los datos ingresados son : "+arreglo_ingreso+","+cambio+" y el número más grande es : "+cambio;
    }
  }

  function ingString()
  {
    cadenaRecibida=document.getElementById('ingreso1').value.toLocaleUpperCase();
document.getElementById('ingreso1').value=" ";
    var remplazo=cadenaRecibida.trim();
   for( var i=0;i<=remplazo.length;i++)
   {
var Copia=remplazo.replace(/ /g,"_");
   }
   document.getElementById('Salida1').innerHTML= "los datos ingresados son : "+cadenaRecibida.toLowerCase()+" los datos modificados  son :"+Copia;
  Copia=" ";
  cadenaRecibida=" ";
  remplazo=" ";
  }
 
  function long_string()
  {
    document.getElementById('Salida3').innerHTML="Luego de presionar el boton   revisa la consola del navegador por favor" 
  var texto=document.getElementById('ingreso3').value;
  let arret=texto.split(" ");
  for(var i=0;i<=arret.length;i++)
  {
    
     // document.getElementById('Salida3').innerHTML="Luego de presionar el boton   revisa la consola del navegador por favor"
       console.log(arret[i]+"== "+arret[i].length);
       document.getElementById('Salida').value=" ";
       document.getElementById('ingreso3').value=" ";
    }
    arret=" ";
  }


  function obtenerNumerosPrimos() {
    var numero = parseInt(document.getElementById('ingreso2').value);
    var primos = [];
  //alert(numero);
    // Verificar si un número es primo
    function esPrimo(num) {
      for (var i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
  
    // Generar array de números primos
    for (var i = 2; i <= numero; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
    document.getElementById('Salida2').innerHTML= primos; 
  }
  
  
  

  //ejercicio 5
  function obtenerNombresPropiedades(objeto) {
    return Object.keys(objeto);
  }
  
  // Ejemplo 
  var persona1 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  console.log(obtenerNombresPropiedades(persona1));
    
