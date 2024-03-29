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

// const pasarAlturaACms = persona => {
//   return {
//     ...persona,
//     altura: persona.altura * 100
//   }
// }

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

// let personasCms = personas.map(({altura}) => {
//     return altura * 100
// })

console.log(personasCms);
