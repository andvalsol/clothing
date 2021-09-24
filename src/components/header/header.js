import React from "react";
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../cart/cartDropdown";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCardDropdownHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";

const Header = ({user, hidden}) => (
    <HeaderContainer>
        <LogoContainer
            className='logo-container'
            to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer className='options'>
            <OptionLink
                className='option'
                to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink
                className='option'
                to='/shop'>
                CONTACT
            </OptionLink>
            {
                user ? (
                    <OptionDiv className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                ) : <OptionLink className='option' to='/sign-in'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    hidden: selectCardDropdownHidden
})

export default connect(mapStateToProps)(Header);
