var signo = prompt('¿Cúal es tu signo?');

switch (signo) {
  case 'acuario':
    console.log('Evite debilitarse, ya que todo va a salir como tenía planeado. Aunque la lentitud a usted lo exaspere, sepa que tendrá que ser paciente para alcanzar el éxito.')
    break;
  case 'sagitario':
    console.log('Aprenda a vivir cada momento con intensidad, ya que le sobrarán fuerzas para sortear los obstáculos que se le presenten durante esta jornada.');
  case 'geminis':
  case 'géminis':
    console.log('Prepárese, ya que se acerca el momento propicio para demostrarle al mundo lo que usted es capaz de brindar. Intente ser más solidario, no espere nada a cambio.');
    break;
  default:
    console.log('No es un signo sodiacal valido');
    break;
}