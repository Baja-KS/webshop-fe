import React from 'react';
import PropTypes from 'prop-types';
import './PageItem.css';

const PageItem = (props) => {
    let number = props.number;
    let isActive = props.isActive;
    const handler = () => {
        props.handler(number-1);
    };
    let link = (<a className="page-link" href="#" onClick={handler}>{number}</a>);
    if (isActive) {
        link = (<span className="page-link page-active">{number}</span>);
    }
    return (
        <li className={`page-item ${isActive? 'page-active' : ''}`}>
            {link}
        </li>
    );
};

PageItem.propTypes = {};

PageItem.defaultProps = {};

export default PageItem;
