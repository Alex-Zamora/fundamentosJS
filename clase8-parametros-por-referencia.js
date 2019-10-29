
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

// Esta función modifica el objeto 
function cumpleanos(persona) {
  persona.edad += 1;
}

// Crea un nuevo objeto
// con spread operator se desglosa el objeto y se crea un nuevo objeto
function cumpleanosNuevoObjeto(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}