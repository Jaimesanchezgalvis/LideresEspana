import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchScreen } from '../search/SearchScreen';

export const Navbar = () => {

     
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ "backgroundColor": "#00437F" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{ "color": "white", "backgroundColor": "white" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                        style={{ "color": "white" }}
                    >
                        <Link
                            className="navbar-brand"
                            style={{ "color": "white" }}
                            to="/">
                            Lideres España
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/svp"
                                style={{ "color": "white" }}
                            >
                                SVPs
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/rvpplatinum"
                                style={{ "color": "white" }}
                            >
                                RVP Platinum
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/rvp"
                                style={{ "color": "white" }}
                            >
                                RVPs
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/rd"
                                style={{ "color": "white" }}
                            >
                                RDs
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/buscar"
                                style={{ "color": "white" }}
                            >
                                Buscar
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
