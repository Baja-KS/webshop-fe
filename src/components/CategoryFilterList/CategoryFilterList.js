import React from 'react';
import './CategoryFilterList.css';
import CategoryFilterListItem from '../CategoryFilterListItem/CategoryFilterListItem';
const CategoryFilterList = (props) => {
  const items = props.categories;
  return (
    <article className="filter-group">
      <header className="card-header">
        <a href="#" className="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside1">
          <i className="icon-control fa fa-chevron-down"></i>   Categories
        </a>
      </header>
      <div className="collapse show" id="collapse_aside1">
        <div className="card-body">
          <ul className="list-menu">
            {items.map((item) => (<CategoryFilterListItem key={item.id} id={item.id} name={item.name} productCount={item.productCount} state={props.state}></CategoryFilterListItem>))}
          </ul>
        </div> 
      </div> 
    </article> 
  );
};

CategoryFilterList.propTypes = {};

CategoryFilterList.defaultProps = {};

export default CategoryFilterList;
