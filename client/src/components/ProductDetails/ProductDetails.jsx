/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import axios from 'axios';
// import config from '../../../../config';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: this.props.productsData,
    };
    // this.getProducts = this.getProducts.bind(this);
  }

  // componentDidMount() {
  //   this.getProducts();
  // }

  // getProducts() {
  //   axios.get(`${config.ALTELIER_API}/products`, {
  //     headers: {
  //       Authorization: `${config.API_KEY}`,
  //     },
  //   }
  //     .then((res) => {
  //     // console.log('data', res.data);
  //       this.setState({
  //         productsData: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error', err);
  //     }));
  // }

  render() {
  // if (!this.state.productsData) { return null; }
    console.log('this.state', this.state);
    return (
      <div>
        <div>Product Detail</div>
        <div>
          Product Details with more details, im adding it now!
          <ul>
            {this.state.productsData.map((item, index) => <Product item={item} key={index} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const Product = (props) => (
  <li>
    <span data-testid="Product" id="Product">{props.item.name}</span>
    <span>{props.item.id}</span>
  </li>
);

export default ProductDetails;
