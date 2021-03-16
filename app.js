require('colors');

const { inquirerMenu, pausa , leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () =>{
    let opt = '';
    const tareas = new Tareas();

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case '1':
          const desc = await leerInput('DESCRIPCION : ');
          console.log(desc);
          tareas.crearTarea(desc)
          break;
        case '2':
          console.log( tareas._listado );
        break;
        case '3':
        
        break;
        case '4':
        
        break;
        case '5':
        
        break;
        case '6':
        
        break;
        }
          
            console.log({opt})
     
     await pausa();
    } while (opt !== '0');
}

main()