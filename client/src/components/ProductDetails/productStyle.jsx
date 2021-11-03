/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      styles: this.props.style.results,
      currentStyle: this.props.style.results[0],
      selectSize: 'Select Size',
      selectQuantity: 'QTY',
      isSelected: false,
    };

    this.selectStyle = this.selectStyle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.className]: e.target.value,
    });
  }

  selectStyle(info) {
    this.setState({
      currentStyle: info,
      selectSize: 'Select Size',
      selectQuantity: 'QTY',
    });
  }

  render() {
    return (
      <div className="productStyle">
        <Photos />
        <div className="productSelect">
          <div className="review">review goes here!</div>
          <div className="smallfonts">{this.state.product.category}</div>
          <div className="productName">{this.state.product.name}</div>
          <div className="smallfonts">
            $
            {this.state.product.default_price}
          </div>
          <p>STYLES &gt; SELECTED STYLE</p>
          <div className="styleOptions">
            {this.state.styles.map((result, index) => (
              <Img
                src={result.photos[0].thumbnail_url}
                key={index}
                onClick={this.selectStyle}
                info={result}
                state={this.state}
              />
            ))}
          </div>
          <SelectSize
            currentStyle={this.state.currentStyle}
            onChange={this.handleChange}
            state={this.state}
          />
          <button type="button" className="cartButton">Add to Cart</button>
          <button type="button" className="star">&#9734;</button>
        </div>
      </div>
    );
  }
}
const Img = (props) => (

  <div
    onClick={() => { props.onClick(props.info); }}
    className="styleOption"
  >
    <img src={props.src} alt="first thumbnail" />
  </div>
);

const Photos = () => (
  <div className="photoGallery">
    photoGallery
  </div>
);

const SelectSize = (props) => {
// console.log('currentStyle', props.currentStyle);
  const currentSize = props.currentStyle.skus;
  // console.log('currentSize', currentSize);
  return (
    <div className="selectSizeDiv">
      <div>
        <select className="selectSize" onChange={props.onChange} value={props.state.selectSize}>
          <option>Select Size</option>
          {Object.values(currentSize).map((item, index) => (
            <option
              value={item.size}
              key={index}
            >
              {item.size}
            </option>
          ))}
        </select>
      </div>
      <SelectQuantity currentSize={currentSize} onChange={props.onChange} state={props.state} />
    </div>
  );
};

const SelectQuantity = (props) => {
  const { currentSize } = props;
  return (
    <div>
      <select className="selectQuantity" onChange={props.onChange} value={props.state.selectQuantity}>
        <option>QTY</option>
        {Object.values(currentSize).map((item, index) => (
          <option
            value={item.quantity}
            key={index}
          >
            {item.quantity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductStyle;