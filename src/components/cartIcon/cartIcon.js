import React from "react";
import './cartIcon.styles.scss';
import {ReactComponent as ShopIcon} from "../../assets/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({action, itemCount}) => (
    <div className='cart-icon' onClick={action}>
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    action: () => (dispatch(toggleCartHidden()))
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
