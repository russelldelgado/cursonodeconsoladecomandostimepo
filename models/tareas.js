
/**
 * _listado:
 * { 'uuid-9839484-34343: {id:12 , desc:asdfdf , completadoEN:33232}}
 */

const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    get listadoARR(){
        const listado = []

        //esto lo que hace es me coje de los objetos todas las llaves y de aqui ya me devuelve un arreglo asiqeu ya puedo usar lo metodos que tieenn los arrreglos

        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[key];
            listado.push(tarea);

            console.log(key);
        } )


        return listado ;
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }
}

module.exports = Tareas;