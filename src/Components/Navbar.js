import React, {Fragment} from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav" id="nav">
                <div className="navbar">
                    <ul className="left">
                        <li><a href="" className="fat">BD Express</a></li>
                    </ul>
                    <ul className="right">


                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <span className="shoppingCart"><i className="fas fa-cart-plus"></i> </span> <span className="count">0</span> </a>
                        </li>


                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;