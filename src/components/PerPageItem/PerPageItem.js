import React from 'react';
import PropTypes from 'prop-types';
import './PerPageItem.css';

const PerPageItem = (props) => {
    const value = props.value;
    const {current,update} = props.state;
    const handler = () => {
        update(value);
        props.updatePage(0);
    }
    return (
        <label className="checkbox-btn">
            <input type="checkbox" checked={current === value} onChange={handler} />
            <span className="btn btn-light"> {value} </span>
        </label>
    );
};

PerPageItem.propTypes = {};

PerPageItem.defaultProps = {};

export default PerPageItem;
