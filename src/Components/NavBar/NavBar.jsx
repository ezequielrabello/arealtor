import React, {useState} from "react";
import "./NavBar.css"
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";


function NavBar() {
    const [navToggler, setNavToggler] = useState(false)

    function closeNavBar() {
        setNavToggler(false)
    }

    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="brand-and-toggler flex flex-sb">
                        <Link to="/" className="navbar-brand text-uppercase fw-7 text-white ls-2">
                        Ezequiel</Link>
                        <button type="button" className="navbar-open-btn text-white" onClick={() => setNavToggler(!navToggler)}>
                            <FaBars size={30}/>
                        </button>
                        <div className={navToggler ? "navbar-collapse show-navbar-collapse" : "navbar-collapse" }>
                            <button className="navbar-close-btn text-white" onClick={closeNavBar}>
                                <FaTimes size={30}/>
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link 
                                        to="/" className="nav-link text-white ls-2 text-uppercase f2-6 fs-22">
                                            Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/" className="nav-link text-white ls-2 text-uppercase f2-6 fs-22">
                                            Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/" className="nav-link text-white ls-2 text-uppercase f2-6 fs-22">
                                            properties
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/" className="nav-link text-white ls-2 text-uppercase f2-6 fs-22">
                                            about me
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/" className="nav-link text-white ls-2 text-uppercase f2-6 fs-22">
                                            contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar