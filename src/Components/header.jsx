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
                <li><NavLink to='/Home'>Home</NavLink></li>
                <li><NavLink to='/Places'>Mis Locales</NavLink></li>
                <li><NavLink to='/Events'>Mis Eventos</NavLink></li>
                <li><NavLink to='/Profile' >Perfil</NavLink> </li>
                <li>  <NavLink to='/About' >About  </NavLink> </li>
                <li>  <NavLink to='/Config'>Config</NavLink> </li>                
            </ul>
            <ul>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
        </header>
    )
}

export default Header