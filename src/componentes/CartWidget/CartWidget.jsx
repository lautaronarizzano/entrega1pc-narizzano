import React from 'react'
import cartIcon from '../../assets/img/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <a href=""><img src={cartIcon} alt="carrito" className='carritoImg'/></a>
            <div className='carritoDiv'>
            <span className='carritoSpan'>1</span>
            </div>
        </div>
    )
}

export default CartWidget
