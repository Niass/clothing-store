import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import  CollectionPreview  from '../collectionPreview/CollectionPreview'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'
import './CollectionOverview.scss'

const CollectionOverview = ({ collections })=> (
  <div className="collection-overview">
  {
        collections.map(({ id, ...otherCollectionProps })=>(
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)