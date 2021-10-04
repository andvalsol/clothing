import React from "react";
import './cartDropdown.styles.scss';
import CustomButton from "../customButton/customButton";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../cartItem/cartItem";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {useHistory} from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>{
                cartItems.length > 0 ?
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className='empty-message'>EMPTY CART</span>
            }</div>
            <div className='cart-items'>
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
};

export default CartDropdown;
