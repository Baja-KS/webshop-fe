import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
import PageItem from "../PageItem/PageItem";
import CategoryFilterListItem from "../CategoryFilterListItem/CategoryFilterListItem";

const Pagination = (props) => {
    // {
    //     total: 100,
    //     current: 5
    // }
    const updatePage = props.handlers.page;
    const items = [];
    let total = props.total;
    let current = props.current+1;
    let start = current - 4;
    let end = current + 4;
    if (start < 1){
        start = 1;
    }
    if (end > total){
        end = total;
    }
    // console.log(`Current: ${current},Total: ${total}`);
    for (let i = start; i <= end; i++) {
        let isActive = i === current;
        items.push((<PageItem key={i} number={i} isActive={isActive} handler={updatePage}></PageItem>));
    }
    if (end < total) {
        items.push((<div className='page-item'>...</div>))
        items.push((<PageItem key={total} isActive={false} number={total} handler={updatePage}></PageItem>))
    }
    const prev = () => {
      updatePage(current-2);
    };
    const next = () => {
        updatePage(current);
    }
    return (
        <div className="d-flex mt-4">
            <nav className="ms-3">
                <ul className="pagination">
                    {current !== 1 ?
                        (<li className="page-item">
                            <a className="page-link" href="#" onClick={prev}>Previous</a>
                        </li>) : ""
                    }
                    {items}
                    {current !== total ?
                        (<li className="page-item">
                            <a className="page-link" href="#" onClick={next}>Next</a>
                        </li>) : ""
                    }
                </ul>
            </nav>
        </div>
    );
};

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
