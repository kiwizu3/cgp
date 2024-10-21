import React from "react";


const Navbar = () => {
    return(
    <div className="row">
        <div className="d-flex navbar fixed-top px-5 py-4 navbar-cgp">
            <a className="navbar-brand me-auto mb-0 fw-bold text-primary" href="#">CGP</a>
            <a className="navlink-single" href="#">Home</a>
            <a className="navlink-single" href="#">About</a>
            <a className="navlink-single" href="#">Contact</a>
        </div>
    </div>
    )
}

export default Navbar;