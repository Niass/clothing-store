import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/WithSinner';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log("collectionMap",collectionMap)
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
