import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/with-spinner/WithSinner';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
import { selectIsCollectionFething, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

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
    console.log("props", this.props)
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFething,
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
