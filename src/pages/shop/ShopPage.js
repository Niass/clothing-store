import React from "react";
import { createStructuredSelector } from 'reselect'

import  CollectionOverview  from "../../components/collection-overview/CollectionOverview"


  const ShopPage = ({collections})=>  {
    return (<div className='shop-page'>
   <CollectionOverview/>
    </div>);
  }


export default ShopPage;
