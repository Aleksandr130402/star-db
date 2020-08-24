import React from 'react';

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex col-md-6">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="header-list d-flex col-md-6">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
            
        </div>
    )

}

export default Header;