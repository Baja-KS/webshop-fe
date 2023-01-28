import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Shop.css';
import Product from '../Product/Product';
import CategoryFilterList from '../CategoryFilterList/CategoryFilterList';
import SearchPriceFilter from '../SearchPriceFilter/SearchPriceFilter';
import {search} from "../../api/product";
import Pagination from "../Pagination/Pagination";
import {allCategories} from "../../api/category";
import PerPage from "../PerPage/PerPage";

// const products = [
//     {name:"Test1",price:100,discount:10,imgUrl:"assets/images/items/10.webp"}
// ];
// const categories = [
//     {name:"Procesori",productCount:20}
// ];
const Shop = () => {
    const [products,updateProducts] = useState();
    const [categories,updateCategories] = useState();
    const [page,updatePage] = useState();
    const [selectedCategory,updateSelectedCategory] = useState();
    const [pageItemsCount,updatePageItemsCount] = useState();
    const [totalItemsCount,updateTotalItemsCount] = useState();
    const [pageCount,updatePageCount] = useState();
    const [searchQuery,updateSearchQuery] = useState("");
    const [minPrice,updateMinPrice] = useState();
    const [maxPrice,updateMaxPrice] = useState();
    const [perPage,updatePerPage] = useState(1);

    const onSearch = async () => {
        const res = await search(searchQuery,page,perPage,selectedCategory,minPrice,maxPrice);
        updateProducts(res.content);
        updatePage(res.number);
        updatePageItemsCount(res.numberOfElements);
        updateTotalItemsCount(res.totalElements);
        updatePageCount(res.totalPages);
    };
    const categoryUpdate = async () => {
        const res = await allCategories();
        updateCategories(res);
    }
    useEffect(()=>{
        categoryUpdate();
    },[]);

    useEffect(()=>{
        onSearch();
    },[searchQuery,minPrice,maxPrice,perPage,page,selectedCategory]);
    return perPage && categories && products && (
        <div className="home-section">
                
                 
        <section className="bg-primary py-5">
            <div className="container">
                <h2 className="text-white">Big Tehc Only</h2>
                <ol className="breadcrumb ondark mb-0">
                <li className="breadcrumb-item active" aria-current="page">Catalog</li>
                </ol>
            </div> 
        </section>
      
        
      
        <section className="padding-y">
        <div className="container">
        
        <div className="row">
            <aside className="col-lg-3">
        
        <button className="btn btn-outline-secondary mb-3 w-100  d-lg-none" data-bs-toggle="collapse" data-bs-target="#aside_filter">Show filter</button>
        
      
        <div id="aside_filter" className="collapse card d-lg-block mb-5">

            <SearchPriceFilter handlers={{search:updateSearchQuery,minPrice:updateMinPrice,maxPrice:updateMaxPrice}}></SearchPriceFilter>

            <CategoryFilterList categories={categories} state={{current:selectedCategory,update:updateSelectedCategory}}></CategoryFilterList>
        
            <PerPage state={{current:perPage,update:updatePerPage}} values={[1,5,10,15,20]}></PerPage>
        
            
        
        </div> 
        
        
            </aside>
            <main className="col-lg-9">
            
            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
            <strong className="d-block py-2">{pageItemsCount} Items found ({totalItemsCount} total)</strong>
            <div className="ms-auto ">
                <select className="form-select d-inline-block w-auto me-1">
                <option value="0">Best match</option>
                <option value="1">Recommended</option>
                <option value="2">High rated</option>
                <option value="3">Randomly</option>
                </select>
                <div className="btn-group">
                <a href="#" className="btn btn-light" data-bs-toggle="tooltip" title="List view"> 
                <i className="fa fa-bars"></i>
                </a>
                <a href="#" className="btn btn-light active" data-bs-toggle="tooltip" title="Grid view"> 
                <i className="fa fa-th"></i>
                </a>
                </div> 
            </div>
            </header>
            <div className='row'>
                {products.map((item,i) => (<Product key={item.id} name={item.name} imgUrl={item.imgUrl} discount={item.discount} price={item.price}></Product>))}
            </div>
          
      
        <Pagination total={pageCount} current={page} handlers={{page:updatePage}}></Pagination>
      
      
      
      
      
        </main>
        </div> 
      
        </div> 
        </section>
      
            
      </div>
      );
};

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;
