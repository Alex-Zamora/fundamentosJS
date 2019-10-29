//Filtrar las tareas que tomaron más de una 1 hora

var tasks = [
  {
    nombre: 'estudiar JavaScript',
    duracion: 120
  },
  {
    nombre: 'estudiar React.js', 
    duracion: 300
  },
  {
    nombre: 'buscar empleo',
    duracion: 60
  }
]

// var menosDeUnaHora = tasks.filter(function(task){
//   return task.duracion > 60;
// });

var menosDeUnaHora = tasks.filter(task=>task.duracion > 60);

console.log(menosDeUnaHora);
