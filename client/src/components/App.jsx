import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import QandA from './QandA/QandA.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Hello Cat Trap</p>
        <ProductDetails />
        <RelatedProducts />
        <QandA />
        <Reviews />
      </div>
    )
  }
}

export default App;