import React from "react";
import './collectionsOverview.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import PreviewCollection from "../previewCollection/previewCollection";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collection}) => (
    <div className='collections-overview'>
        {collection.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
