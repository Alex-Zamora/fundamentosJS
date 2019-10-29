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
const comeMucho = () => Math.random() < 0.3 //30% días come mucho
const realizarDeporte = () => Math.random() < 0.4 //40% días realiza deporte

const meta = alex.peso - 3; //-3kg
var dias = 0;

while (alex.peso > meta) {
  // debugger
  if (comeMucho()) {
    // Aumentar de peso
    aumentarDePeso(alex);
  }
  if (realizarDeporte()) {
    // adelgazar
    adelgazar(alex);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${alex.nombre} adelgazo 3kg`);


