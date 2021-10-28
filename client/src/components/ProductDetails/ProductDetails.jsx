/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import config from '../../../../config';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: null,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(`${config.ALTELIER_API}/products`, {
      headers: {
        Authorization: `${config.API_KEY}`,
      },
    }
      .then((res) => {
      // console.log('data', res.data);
        this.setState({
          productsData: res.data,
        });
      })
      .catch((err) => {
        console.log('error', err);
      }));
  }

  render() {
    if (!this.state.productsData) { return null; }
    return (
      <div>
        <div>Product Detail</div>
        <div>
          Product Details with more details
          <ul>
            {/* {this.state.productsData.map((item, index) =>
              <Product item={item} key={index} />)} */}
          </ul>
        </div>
      </div>
    );
  }
}

// const Product = (props) => (
//   <li>
//     {/* <span>{props.item.name}</span>
//     <span>{props.item.id}</span> */}
//   </li>
// );

export default ProductDetails;
