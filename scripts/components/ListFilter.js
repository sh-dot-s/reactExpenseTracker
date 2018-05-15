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
                <div className='row'>
                    <div className='col-md-4'>
                        <input
                            type="text"
                            className="form-control input-lg"
                            onChange={(e) => {
                            this
                                .props
                                .dispatch(searchBy({
                                    ...this.props.filters,
                                    text: e.target.value
                                }))
                        }}
                            placeholder="Enter text to filter..."/><br/>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group">
                            <select
                                className="form-control input-lg"
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
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group">
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                startDateId="startDate"
                                endDateId="endDate"
                                onDatesChange={(datesRange) => {
                                this
                                    .props
                                    .dispatch(searchBy({
                                        ...this.props.filters,
                                        ...datesRange
                                    }))
                            }}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({focusedInput})}
                                numberOfMonths={1}
                                showClearDates={true}
                                isOutsideRange={() => false}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

const mapStateToProps = (state) => ({filters: state.filters});

export default connect(mapStateToProps)(ListFilter);