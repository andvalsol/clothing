import React from "react";
import './checkoutItem.styles.scss';
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItemFromCart} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={cartItem.imageUrl}/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
