import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/withSpinner/withSpinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => selectIsCollectionsLoaded(state)
});

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);
