
var personaAlex = {
  nombre: 'Alex',
  apellido: 'Zamora',
  edad: '30'
}

var personaLey = {
  nombre: 'Ley',
  apellido: 'Escobar',
  edad: '31'
}

//Función Declarativa
// function imprimirNombreEnMayusculas({nombre}) {
//   console.log(nombre.toUpperCase());
// }

//Arrow Función
let imprimirNombreEnMayusculas = ({nombre}) => console.log(nombre.toUpperCase());

imprimirNombreEnMayusculas(personaAlex);
imprimirNombreEnMayusculas(personaLey);
imprimirNombreEnMayusculas({nombre: 'Pepito'});