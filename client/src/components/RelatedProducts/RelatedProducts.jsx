import React from 'react';
import ProductLineList from './RelatedProduct_Components/ProductLineList';
import OutFitList from './Outfit_Components/OutFitList';

const RelatedProducts = ({ productId }) => (
  <div className="related-products__container">
    <div className="related-products__inner__container">
      <h3>Related Products</h3>
      <ProductLineList productId={productId} />
    </div>
    <div className="outfit__inner__container">
      <h3>Your Outfit</h3>
      <OutFitList />
    </div>
  </div>
);

export default RelatedProducts;
