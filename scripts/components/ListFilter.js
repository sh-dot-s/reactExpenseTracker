import React from 'react';
import {connect} from 'react-redux';
import {searchBy, sortBy} from "../actions/filters";
import moment from 'moment';
import {DateRangePicker} from 'react-dates';

class ListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null
        };
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                    this
                        .props
                        .dispatch(searchBy({
                            ...this.props.filters,
                            text: e.target.value
                        }))
                }}
                    placeholder="Enter text to filter..."/><br/>
                <div className="form-group">
                    <select
                        className="form-control"
                        id="sortSelector"
                        onChange={(e) => {
                        this
                            .props
                            .dispatch(sortBy({key: e.target.value}))
                    }}>
                        <option value="date">Created Time</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="form-group">
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        startDateId="strDtFrmPck"
                        endDateId="endDtFrmPck"
                        onDatesChange={(datesRange) => this.props.dispatch(searchBy({
                        ...this.props.filters,
                        ...datesRange
                    }))}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({focusedInput})}
                        numberOfMonths={1}
                        isOutsideRange={() => false}/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({filters: state.filters});

export default connect(mapStateToProps)(ListFilter);