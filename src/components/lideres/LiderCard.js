import React from 'react'
import { Link } from 'react-router-dom'

export const LiderCard = ({
id,
nombre,
posicion,
profesion,
instagram,
biografia,
 }) => {
    return (
        <div className="card ms-3" style={{maxWidth:340}}>
            <div className="row no-gutters">
            <div className="col-md-4">
                <img src={`./assets/${id}.jpg`} alt={nombre} className="card-img"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                    {nombre}
                    </h5>
                        <p>-{posicion}<br />-{profesion}<br />-{instagram}</p>
                <Link to={`./lider/${id}`}>
                mas...
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
