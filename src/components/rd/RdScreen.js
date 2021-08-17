import React from 'react'
import { LiderList } from '../lideres/LiderList'

export const RdScreen = () => {
    return (
        <div>
            <h1>Directores Regionales en España</h1>
            <hr />
            <LiderList posicion="Director Regional" />
            <h4 className="mt-3">¿Eres RD en España y aun no estas en la web? Diligencia este formato y envíanos tu foto en buena calidad.
            </h4>
            <div className="row mx-auto">
                <a
                    href="https://surveyheart.com/form/610f5ec58a479b5ab29d6774"
                    target="blank"
                    className="col-12 col-md-5 btn btn-outline-info mt-3 p-2"
                    
                >
                    Diligencia tus datos
                </a>
                <div className="col-2"></div>
                <a
                    href="https://drive.google.com/folderview?id=1zHjoVNRvynck9J6SnRfHg_Qs0kntJpQH"
                    target="blank"
                    className="col-12 col-md-5 btn btn-outline-info mt-3 p-2"
                >
                    Foto con nombre
                </a>
            </div>
        </div>
    )
}
