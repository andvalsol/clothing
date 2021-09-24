import React from "react";
import './previewCollection.styles.scss';
import CollectionItem from "../collectionItem/collectionItem";

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((_, index) => index < 4) // Show only 4 items in the Preview Collection
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </div>
    </div>
)

export default PreviewCollection
