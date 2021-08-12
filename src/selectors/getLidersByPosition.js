import {lideres} from '../data/lideres'



export const getLidersByPosition = ( posicion ) =>{

    const validposicion = ['Senior Vicepresidente', 'Vicepresidente Regional Platinum', 'Vicepresidente Regional', 'Director Regional' ]

    if ( !validposicion.includes(posicion) ){
        throw new Error(`posicion "${posicion}" no es correcto`);
    }

    return lideres.filter( lideres =>lideres.posicion === posicion );
}