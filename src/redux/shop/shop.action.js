import ShopActionTypes from './shop.type'

export const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload:collectionMap
}) 