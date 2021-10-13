import React, {Fragment} from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav" id="nav">
                <div className="navbar">
                    <ul className="left">
                        <li><a href="">BD Express</a></li>
                    </ul>
                    <ul className="right">
                        <li>
                            <a href="">
                               <div className="shop">
                                   <span className="shoppingCart"><i className="fas fa-cart-plus"></i></span>
                                   <span>0</span>
                               </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;