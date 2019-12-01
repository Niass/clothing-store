import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionStart } from '../../redux/shop/shop.action';

class ShopPage extends React.Component {
  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection('collection');
  //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     console.log("collectionMap",collectionMap)
  //     updateCollections(collectionMap);
  //     this.setState({ loading: false });
  //   });
  // }
  componentDidMount() {
    console.log('props', this.props);
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
