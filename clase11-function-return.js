var persona = {
  nombre: 'Alex',
  apellido: 'Zamora',
  edad: 30,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  frontend: true
}

var persona2 = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const mayoriaEdad =  18;

//Arrow Function
const esMayorDeEdad = ({edad}) => edad >= mayoriaEdad;

//Arrow Function
const imprimirMayordeEdad = ({nombre, edad}) => {
  if (esMayorDeEdad(edad)) {
    console.log(`La persona ${nombre} es mayor de edad`);
  } else {
    console.log(`La persona ${nombre} es menor de edad`);
  }
}

const permitirAcceso = ({edad}) => !esMayorDeEdad(edad) ? console.log('Acceso Denegado') : console.log('Acceso Permitido')

imprimirMayordeEdad(persona2);
permitirAcceso(persona2);