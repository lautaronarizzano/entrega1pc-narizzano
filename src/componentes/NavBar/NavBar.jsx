import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header className='header'>
            <nav className='headerNav'>
                <h2 className='headerNavH2'><a href="#" className='linkHome'>Burger Station</a></h2>
                <ul className='headerNavUl'>
                    <li className='headerNavUlLi'><a className='headerNavUlLiA' href="#">Menu</a></li>
                    <li className='headerNavUlLi'><a className='headerNavUlLiA' href="#">Sobre Nosotros</a></li>
                    <li className='headerNavUlLi'><a className='headerNavUlLiA' href="#">Contacto</a></li>
                </ul>
            <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar