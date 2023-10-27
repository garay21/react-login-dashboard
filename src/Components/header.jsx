import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './../Css/head.css'

const Header = () =>{
    const [act, setActive] = useState(false)

    const hangleButton = ()=>{
        setActive(!act)
    }

    return (
        <header className={!act ? 'nav' : 'nav active'}>
            <button className="btn-ds" onClick={hangleButton}></button>
            <img src="src\assets\icons\ubi.png" alt="Uby Party Logo" />
            <h3>Party Manager</h3>
            <ul className={act ? 'nav-list active' : 'nav-list'}>
                <li>Home</li>
                <li>Mis Locales</li>
                <li>Mis Eventos</li>
                <li>Perfil</li>
                <li>About</li>
                <li>Config</li>                
            </ul>
            <ul>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
        </header>
    )
}

export default Header