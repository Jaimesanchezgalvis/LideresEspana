import { lideres } from "../data/lideres";

export const getLideresByName = ( nombre = '' ) =>{

    if ( nombre === '' ) {
        return [];
        
    }

    nombre = nombre.toLocaleLowerCase();
    return lideres.filter( lider => lider.nombre.toLocaleLowerCase().includes( nombre )  )

}