import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img
            src="https://cdn.vectorstock.com/i/1000x1000/54/51/travel-around-the-earth-go-concept-vector-14785451.webp://images-platform.99static.com/hCJ7i7IoyWb9Rqjl-5Friw2IEsM=/100x100:900x900/500x500/top/smart/99designs-contests-attachments/92/92773/attachment_92773266"
            height="50px"
            class="rounded-pill"
            className="d-inline-block align-top"
            alt="Logo"
          />
                    <strong>Go Around</strong>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destination">
                                    Destination
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;