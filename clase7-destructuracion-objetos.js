
var personaAlex = {
  nombre: 'Alex',
  apellido: 'Zamora',
  edad: 30
}

var personaLey = {
  nombre: 'Ley',
  apellido: 'Escobar',
  edad: 31
}

// Función Declarativa
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre;
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreEdad(persona) {
  //Hola me llamo Alex y tengo 30 años
  var { nombre, edad } = persona;
  console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años.`);
}

imprimirNombreEdad(personaAlex);
imprimirNombreEdad(personaLey);
imprimirNombreEdad({nombre: 'Pepito', edad: 100});