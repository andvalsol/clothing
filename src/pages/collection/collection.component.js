import React from "react";
import './collection.styles.scss';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CollectionItem from "../../components/collectionItem/collectionItem";

const CollectionPage = (props) => {
    const {title, items} = props.collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map((item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
