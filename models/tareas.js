
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


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }
}

module.exports = Tareas;