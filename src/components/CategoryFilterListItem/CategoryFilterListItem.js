import React from 'react';
import './CategoryFilterListItem.css';

const CategoryFilterListItem = (props) => {
  const {current,update} = props.state;
  let selected = current === props.id;
  const handler = () => {
    if (selected) {
      update(null);
      return;
    }
    update(props.id);
  };
  return (
    <li className={selected ? "text-lg" : ""} onClick={handler}><a href="#" className="text-light">{props.name} <b className="badge rounded-pill bg-gray-dark float-end">{props.productCount}</b></a></li>
  );
}

CategoryFilterListItem.propTypes = {};

CategoryFilterListItem.defaultProps = {};

export default CategoryFilterListItem;
