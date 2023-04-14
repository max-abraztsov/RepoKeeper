import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <h2>RepoKeeper</h2>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/favourites">Favourites</Link>
                </ul>
            </nav>
        </header>
        
    );
};

export default Navigation;