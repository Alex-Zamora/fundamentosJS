var contador = 0;

const llueve = () => Math.random() < 0.25 // 25% de los días

do {
  debugger
  contador++
} while (!llueve())

let frecuencia = contador === 1 ? 'vez' : 'veces';

console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);

