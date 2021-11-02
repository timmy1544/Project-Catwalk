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
    };


    this.selectStyle=this.selectStyle.bind(this);
  }

  selectStyle(info) {
    //console.log(info);
    this.setState({
      currentStyle:info
    })
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
      <p>STYLES > SELECTED STYLES</p>
      <div className="styleOptions">
        {this.state.styles.map((result, index) => (
          <Img src={result.photos[0].thumbnail_url} key={index} onClick={this.selectStyle} info={result}/>
        ))}
      </div>
      <SelectSize currentStyle={this.state.currentStyle}/>
      <button className="cartButton">Add to Cart</button>
      <button className="star">&#9734;</button>
    </div>
  </div>
    );
  }
};
const Img = (props) => {
  return (
    <div onClick={() => {props.onClick(props.info)}}className="styleOption">
      <img src={props.src} alt="first thumbnail"/>
    </div>
  )
}
const Photos = () => (
  <div className="photoGallery">
    photoGallery
  </div>
);

const SelectSize = (props) => {
console.log('currentStyle', props.currentStyle);
var currentSize = props.currentStyle.skus;
console.log('currentSize', currentSize);
  return (
    <div className="selectSizeDiv">
      <div>
        <select className="selectSize">
          <option>Select Size</option>
          {Object.values(currentSize).map((item,index)=>{
            return <option value={item.size} key={index}>{item.size}</option>
          })}
        </select>
      </div>
    <SelectQuantity currentSize={currentSize}/>
    </div>
  );
}

const SelectQuantity = (props) => {
  var currentSize = props.currentSize;
  return (
    <div>
    <select className="SelectQuantity">
      <option >QTY</option>
      {Object.values(currentSize).map((item,index)=>{
        return <option value={item.quantity} key={index}>{item.quantity}</option>
      })}
    </select>
    </div>
  );
}


export default ProductStyle;