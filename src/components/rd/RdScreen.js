import React from 'react'
import { LiderList } from '../lideres/LiderList'

export const RdScreen = () => {
    return (
        <div>
            <h1>Directores Regionales en España</h1>
            <hr />
            <LiderList posicion="Director Regional" />
        </div>
    )
}
