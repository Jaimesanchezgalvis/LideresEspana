import React from 'react'
import { getLidersByPosition } from '../../selectors/getLidersByPosition'
import { LiderCard } from './LiderCard'

export const LiderList = ({ posicion }) => {

    const lideres = getLidersByPosition(posicion)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {/* row = filas row-cols-2 = en vista mobil row-cols-md vista pc g-4 espacio  */}
            {
            lideres.map(lider=>(
                <LiderCard key={lider.id}
                    {...lider}
                />
            ))
            }
        </div>
    )
}
