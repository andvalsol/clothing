import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsSelectionFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../withSpinner/withSpinner.component";
import CollectionsOverview from "./collectionsOverview";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsSelectionFetching
});

export const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);
