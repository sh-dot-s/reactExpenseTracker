import React from 'react';
import {connect} from 'react-redux';
import {searchBy, sortBy} from "../actions/filters";

const ListFilter = (props) => {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                onChange={(e) => {
                    props.dispatch(searchBy({
                        ...props.filters,
                        text: e.target.value
                    }))
                }}
                placeholder="Enter text to filter..."/><br/>
            <div className="form-group">
                <select className="form-control" id="sortSelector" onChange={(e) => {props.dispatch(sortBy({key: e.target.value}))}}>
                    <option value="date">Created Time</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => ({filters: state.filters});

export default connect(mapStateToProps)(ListFilter);