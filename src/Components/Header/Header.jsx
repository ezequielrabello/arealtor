import React from "react";
import "./Header.css"
import NavBar from "../NavBar/NavBar"
import "../../assets/script.jsx"

function Header() {
    return(
        <header className="flex flex-col" id="header">
            <NavBar/>
            <div className="container flex">
                <div className="header-content">
                    <h2 className="text-uppercase text-white op-07 fw-6 ls-2">
                        Alexsey Plotnikov
                    </h2>
                    <h1 className="text-white fw-6 header-title">Hello, I'm a <span className="text-brown">Real Estate Agent </span>
                    from Youngstown, Ohio</h1>
                    <div className="btn-groups flex">
                        <button type="button" className="btn-item bg-brown fw-4 ls-2">
                            See Works
                        </button>
                        <button type="button" className="btn-item bg-dark fw-4 ls-2">
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header