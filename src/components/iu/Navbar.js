import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ "background-color": "#00437F" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{ "color": "white", "background-color": "white" }}>
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
                            </NavLink><NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                aria-current="page"
                                exact
                                to="/rd"
                                style={{ "color": "white" }}
                            >
                                RDs
                            </NavLink>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
