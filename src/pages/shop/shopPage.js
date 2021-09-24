import React, {Component} from "react";
import './shop.styles.scss'
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {connect} from "react-redux";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/withSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;

        const collectionReference = firestore.collection('collections');

        // onSnapshot has live updates (Observer Pattern)
        collectionReference.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;

        return ( // We can access the match prop since App.js the ShopPage is wrapped in a Route component
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={loading} {...props}/> // We need to pass the props, since these props contain the match and history properties
                }/>
                <Route path={`${match.path}/:categoryId`} render={(props) =>
                    <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
