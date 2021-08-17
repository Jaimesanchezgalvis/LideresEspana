import React from 'react'
import queryString from 'query-string'

import { LiderCard } from '../lideres/LiderCard'
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getLideresByName } from '../../selectors/getLideresByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues;
    
    const lideresFilterd = getLideresByName( searchText );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <>
            <div className="row">
                <div className="col-5">
                    <h4>Formulario de busqueda</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Busqueda"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Busqueda
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado:</h4>
                    {
                        lideresFilterd.map(lider => (
                            <LiderCard
                                key={lider.id}
                                {...lider}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
