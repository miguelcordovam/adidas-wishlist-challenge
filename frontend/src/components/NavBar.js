import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

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
                        <GoogleAuth />
                    </li>
                </ul>
            </nav>
            
        </div>

    );
};

export default NavBar;