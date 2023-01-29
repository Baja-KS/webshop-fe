import React from 'react';
import PropTypes from 'prop-types';
import './PerPage.css';
import PerPageItem from "../PerPageItem/PerPageItem";

const PerPage = (props) => {
    // const { current , update } = props.state;
    const items = [];
    props.values.forEach((item,i) => {
        items.push((<PerPageItem key={i} value={item} state={props.state} updatePage={props.updatePage}></PerPageItem>));
    });
    return (
        <article className="filter-group">
            <header className="card-header">
                <a href="#" className="title text-light" data-bs-toggle="collapse" data-bs-target="#collapse_aside3">
                    <i className="icon-control fa fa-chevron-down"></i>  Per page
                </a>
            </header>
            <div className="collapse show" id="collapse_aside3">
                <div className="card-body">
                    {items}
                </div>
            </div>
        </article>
    );
};

PerPage.propTypes = {};

PerPage.defaultProps = {};

export default PerPage;
