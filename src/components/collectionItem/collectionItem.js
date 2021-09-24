import React from "react";
import './collectionItem.styles.scss';
import CustomButton from "../customButton/customButton";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className='collection-item'>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className='image'/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='name'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => (dispatch(addItem(item)))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
