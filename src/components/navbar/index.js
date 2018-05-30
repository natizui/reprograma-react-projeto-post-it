import React from 'react'
import logo from './logo.png'
import './navbar.css'

function Navbar(props) {
    function handlerClick(e) {
        if(props.userLog) {
            e.preventDefault();
            props.userLogout();
        } else {
            e.preventDefault();
            props.userLogin();
        }
    }

    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} />
            <ul className="navbar__list">
                <li className="navbar__list__item"><a>Quem somos </a></li>
                <li className="navbar__list__item"><a>Contato </a></li>
                <li className="navbar__list__item">
                    <a onClick={handlerClick}>{props.userLog ? 'Logout' : 'Login'} </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar