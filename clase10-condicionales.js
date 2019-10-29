var persona = {
  nombre: 'Alex',
  apellido: 'Zamora',
  edad: 30,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  frontend: true
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero) {
    console.log('Ingeniero')
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  } 
  if (persona.cantante) {
    console.log('Cantante');
  } 
  if (persona.frontend) {
    console.log('Frontend');
  }
}

const imprimirMayordeEdad = ({edad, nombre}) => {
  esMayor = edad > 18 
    ? console.log(`La persona ${nombre} es mayor de edad`) 
    : console.log(`La persona ${nombre} es menor de edad`);
}

imprimirProfesiones(persona);
imprimirMayordeEdad(persona);