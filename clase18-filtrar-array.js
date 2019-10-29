var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

//declarar un array
var personas = [sacha, martin, dario, vicky, paula, alan];

const esAlta = ({altura}) => altura > 1.8;
const noEsAlta = ({altura}) => altura < 1.8;

var personasAltas = personas.filter(noEsAlta);

// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// });

console.log(personasAltas);
