import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import {Link, useParams} from "react-router-dom";
import {details} from "../../api/product";
import SearchPriceFilter from "../SearchPriceFilter/SearchPriceFilter";
import CategoryFilterList from "../CategoryFilterList/CategoryFilterList";
import PerPage from "../PerPage/PerPage";

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
  // return product && (
  //   <div className="home-section">
  //     <div id="aside_filter" className="collapse card d-lg-block mb-5">
  //       <article className='filter-group'>
  //         <Link to="/"><button type={"button"}>Back to shop</button></Link>
  //       </article>
  //     </div>
  //       {product.name}
  //   </div>
  // );
  return product && (
      <div className="details-body">
        <header className="details-header">Big Tehc Only</header>
        <main className="product">
          <div className="flex-container">
            <div className="product-image-container">
              <img
                  src={product.imgUrl}
                  alt="Product Image"
                  className="product-image"
              />
            </div>
            <div className="product-specifications">
              <p className="category">{product.category.name}</p>
              <p className="product-name">{product.name}</p>
              <p className="stock">{product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}</p>
              {
                product.discount > 0 ? <p className="price discount"><span>$</span>{product.price-(product.price*product.discount/100)}</p> : ""
              }
              <p className="price"><span>$</span>{product.price}</p>
              <button className="button">Add to cart</button>
              <Link to="/"><button className="button">Back</button></Link>
            </div>
            <div className="admin-buttons">
              <button className="button edit">Edit</button>
              <button className="button delete">Delete</button>
            </div>
          </div>

          <h2 className="description-heading">Description</h2>
          <p className="product-description">
            {product.specification}
          </p>
        </main>
        {/*<footer className="details-footer">Lala</footer>*/}
      </div>
  );
};

ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;
