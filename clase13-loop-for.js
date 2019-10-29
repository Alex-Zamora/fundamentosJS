var alex = {
  nombre: 'Alex',
  apellido: 'Zamora',
  edad: 30,
  peso: 75
}

console.log(`Al inicio del año ${alex.nombre} pesa ${alex.peso}kg`);

const incrementoPeso = 0.2; // 200 gramos
const decrementoPeso = 0.2; // 200 gramos
const diasDelAnio = 365;

const aumentarDePeso = persona => persona.peso += incrementoPeso;
const adelgazar = persona => persona.peso -= decrementoPeso;

for (var i = 1; i <= diasDelAnio; i++) {
  var random = Math.random();

  if (random < 0.25) {
    //Aumenta de peso
    aumentarDePeso(alex);
  } else if (random < 0.5) {
    // Adelgazar
    adelgazar(alex);
  }
}

console.log(`Al final del año ${alex.nombre} pesa ${alex.peso.toFixed(1)}`);


