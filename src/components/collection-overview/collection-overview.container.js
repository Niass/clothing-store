import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFething } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import  CollectionOverview  from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFething
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionsOverviewContainer;
