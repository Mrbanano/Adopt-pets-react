import React from 'react';
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div className="Nav">
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/panel">Dar en adopcion</Link>
            </li>
            <li>
                <Link to="/login">Mi cuenta</Link>
            </li>
            
        </div>
    )
}

export default Nav;
