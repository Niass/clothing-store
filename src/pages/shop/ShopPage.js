import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { updateCollection } from '../../redux/shop/shop.action'
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    })
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps) (ShopPage);
