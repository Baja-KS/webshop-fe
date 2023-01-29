import React from 'react';
import './SearchPriceFilter.css';

const SearchPriceFilter = (props) => {
    const submit = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.value === "apply") {
            props.handlers.search(event.target.elements.search.value);
            props.handlers.minPrice(event.target.elements.minPrice.value);
            props.handlers.maxPrice(event.target.elements.maxPrice.value);
        }
        if (event.nativeEvent.submitter.value === "clear") {
            props.handlers.search("");
            props.handlers.minPrice(null);
            props.handlers.maxPrice(null);
        }
    };
  return (
    <article className="filter-group">
        <div className="card-header">
            <a href="#" className="title text-light" data-bs-toggle="collapse" data-bs-target="#collapse_aside2">
            <i className="icon-control fa fa-chevron-down"></i>  Filter
            </a>
        </div>
        <div className="collapse show" id="collapse_aside2">
            <form onSubmit={submit}>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className='col-12'>
                            <label htmlFor="search" className='form-label'>Search</label>
                            <input className="form-control" id="search" name="search" type="text"/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="min" className="form-label">Min Price</label>
                            <input className="form-control" name="minPrice" id="minPrice" placeholder="$0" type="number"/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="max" className="form-label">Max Price</label>
                            <input className="form-control" name="maxPrice" id="maxPrice" placeholder="$1,0000" type="number"/>
                        </div>
                    </div>
                    <button className="btn btn-gray-dark w-100 m-1" type="submit" value="apply">Apply</button>
                    <button className="btn btn-gray-dark w-100 m-1" type="submit" value="clear">Clear</button>
                </div>
            </form>
        </div>
    </article>
  );
};

SearchPriceFilter.propTypes = {};

SearchPriceFilter.defaultProps = {};

export default SearchPriceFilter;
