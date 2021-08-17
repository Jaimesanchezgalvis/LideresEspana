import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getLidersByid } from '../../selectors/getLidersByid'

export const LideresScreen = ( { history } ) => {

    const { liderId } = useParams();
    const lider = getLidersByid(liderId);

    if (!lider) {
        return <Redirect to="/" />
    }

    const handleReturn = ()=> {
            if (history.lengh <= 2) {
                history.push('/')
            } else {
                history.goBack()
            }


    }

    const {
        nombre,
        posicion,
        profesion,
        instagram,
        biografia,
    } = lider;


    return (

        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/${liderId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={nombre} />
            </div>
            <div className="col-8">
                <h3>{nombre}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Posicion: {posicion}</li>
                    <li className="list-group-item">Profesion: {profesion}</li>
                    <li className="list-group-item">Instagram: {instagram}</li>
                    <li className="list-group-item">Biografia: {biografia}</li>
                </ul>
                <hr />
                <button 
                className="btn btn-outline-info"
                onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
