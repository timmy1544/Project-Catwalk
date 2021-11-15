/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ProductLineList from './RelatedProduct_Components/ProductLineList';
import OutFitList from './Outfit_Components/OutFitList';

const RelatedProducts = ({ productId, IDchanger }) => (
  // <div className="RP_grid-container">
  <div className="related-products__container">
    {/* < div className="related-products__inner__container" id="grid_RP" > */}
    <div className="RP_title">Related Products</div>
    <ProductLineList productId={productId} IDchanger={IDchanger} />
    {/* </div > */}
    <div className="outfit__inner__container" id="grid_OF">
      <div className="RP_title">Your Outfit</div>
      <OutFitList productId={productId} />
    </div>
    {/* </div> */}
  </div>

);

export default RelatedProducts;
