import React from "react";
import './collection.styles.scss';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {useSelector} from "react-redux";
import CollectionItem from "../../components/collectionItem/collectionItem";
import {useParams} from "react-router-dom";

const CollectionPage = () => {
    const {collectionId} = useParams();

    const collection = useSelector(selectCollection(collectionId));

    const {title, items} = collection;

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

export default CollectionPage;
