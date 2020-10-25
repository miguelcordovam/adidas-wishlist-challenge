import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavBar = () => {
    return (
        <div className="yarn">
            <nav>
                <ul>
                    <li>
                        <Link to ="/products">Products</Link>
                    </li>
                    <li>
                        <Link to ="/wishlist">WishList</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </nav>
            
        </div>

    );
};

export default NavBar;