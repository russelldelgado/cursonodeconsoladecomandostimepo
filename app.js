require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa , leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () =>{
    let opt = '';
    const tareas = new Tareas();
    const  tareasDB =  leerDB();

    if(tareasDB){
      tareas = tareasDB;
    }

    await pausa();

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case '1':
          const desc = await leerInput('DESCRIPCION : ');
          console.log(desc);
          tareas.crearTarea(desc)
          break;
        case '2':
          console.log( tareas.listadoARR );
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
          
        //guardarDB(tareas.listadoARR);
            console.log({opt})
     
     await pausa();
    } while (opt !== '0');
}

main()