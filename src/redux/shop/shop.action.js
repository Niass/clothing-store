import ShopActionTypes from './shop.type'

export const updateCollection = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload:collectionMap
}) 