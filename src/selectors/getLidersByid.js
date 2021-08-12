import { lideres } from '../data/lideres'

export const getLidersByid = (id) => {

    return lideres.find(lideres => lideres.id === id);
    
}