import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
// props: name,price,discount?,imgUrl
const Product = (props) => {
  let price = props.price
  let discountHtml;
  if (props.discount) {
    discountHtml = (<del class="price-old">${props.price}</del>);
    price = props.price-(props.price*props.discount/100);
  }
  return (
    <div class="col-lg-4 col-md-6 col-sm-6">
    <figure class="card card-product-grid">
    <div class="img-wrap"> 
    <img src={props.imgUrl}/> 
    </div>
    <figcaption class="info-wrap border-top">
    <div class="price-wrap">
    <strong class="price">${price}</strong>
    {discountHtml}
    </div> 
    <p class="title mb-2">{props.name}</p>
    
    <a href="#" class="btn btn-primary">Add to cart</a>
    <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
    </figcaption>
    </figure>
  </div> 
  );
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
