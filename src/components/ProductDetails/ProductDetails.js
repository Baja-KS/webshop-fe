import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import {useParams} from "react-router-dom";
import {details} from "../../api/product";

const ProductDetails = (props) => {
  let {id} = useParams();
  const [product,updateProduct] = useState();
  const refresh = async () => {
    const response = await details(id);
    updateProduct(response);
  };
  useEffect(()=>{
    refresh();
  },[]);
  return product && (
    <div className="home-section">
        {product.name}
    </div>
  );
};

ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;
