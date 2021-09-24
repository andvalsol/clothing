import React from "react";
import './cartDropdown.styles.scss';
import CustomButton from "../customButton/customButton";
import {connect} from "react-redux";
import CartItem from "../cartItem/cartItem";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => ( // The history props can be accessed because of the withRouter HOC
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
);

const mapStateToProps = (state) => ({
     cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
