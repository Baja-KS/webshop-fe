import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import {Link} from "react-router-dom";
// props: name,price,discount?,imgUrl
const Product = (props) => {
  let price = props.price
  let discountHtml;
  if (props.discount) {
    discountHtml = (<del className="price-old">${props.price}</del>);
    price = props.price-(props.price*props.discount/100);
  }
  let stock = props.stock ?? 0;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <figure className="card card-product-grid">
        <Link to={`/details/${props.id}`}>
          <div className="img-wrap">
            <img src={props.imgUrl}/>
          </div>
        </Link>
        <figcaption className="info-wrap border-top">
          <div className="price-wrap">
          <strong className="price">${price}</strong>
          {discountHtml}
          </div>
          <p className="title mb-2">{props.name}</p>
          <p className="title mb-2">{stock > 0 ? `In stock: ${stock}` : `Out of Stock`}</p>
          <a href="#" className="btn btn-primary">Add to cart</a>
          <a href="#" className="btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
        </figcaption>
      </figure>
    </div>
  );
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
