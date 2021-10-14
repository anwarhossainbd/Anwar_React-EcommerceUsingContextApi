import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav" id="nav">
                <div className="navbar">
                    <ul className="left">
                        <li><Link to="/" className="fat">BD Express</Link></li>
                    </ul>
                    <ul className="right">


                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <span className="shoppingCart"><i className="fas fa-cart-plus"></i> </span> <span className="count">0</span> </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;