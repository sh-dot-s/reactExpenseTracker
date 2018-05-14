import React from 'react';
import moment from "moment";
import {SingleDatePicker} from 'react-dates';

console.log(moment().format("Do MMMM YYYY, h:mm:ss A"))

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.expense) 
            this.state = {
                ...this.props.expense,
                focused: false,
                errors:""
            }
        else {
            this.state = {
                description: "",
                comments: "",
                amount: "",
                createdAt: moment(),
                focused: false,
                errors: ""
            }
        }
        console.log(this.state);
        this.onInputChangeHandler = this
            .onInputChangeHandler
            .bind(this);
        this.submitHandler = this
            .submitHandler
            .bind(this);
    }
    onInputChangeHandler(e) {
        const dict = {};
        dict[e.target.id] = e.target.value;
        if (e.target.id == "amount") {
            if (!e.target.value || e.target.value.match(/^\d+(\.\d{0,2})?$/)) {
                const updates = {
                    ...this.state,
                    ...dict
                };
                this.setState(() => ({
                    ...updates
                }));
            }
        } else {
            const updates = {
                ...this.state,
                ...dict
            };
            this.setState(() => ({
                ...updates
            }));
        }

    }
    submitHandler(e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) 
            this.setState({errors: "Description/Amount Missing, Please fill and submit"});
        else {
            console.log(this.state.createdAt.isValid());
            this.setState({errors: ""});
            this
                .props
                .onSubmit({
                    description: this.state.description,
                    comments: this.state.comments,
                    createdAt: this
                        .state
                        .createdAt,
                    amount: this.state.amount
                });
        }
    }
    render() {
        return (
            <div>
                {this.state.errors && (
                    <div
                        className="col-md-4 col-md-offset-2 alert alert-danger fade in alert-dismissible">
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Failure!</strong>
                        {this.state.errors}</div>
                )
}
                <form className="form-horizontal container-fluid" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="description">Description:</label>
                        <div className="col-sm-10">
                            <input
                                autoFocus
                                type="text"
                                onChange={this.onInputChangeHandler}
                                className="form-control"
                                id="description"
                                required={true}
                                value={this.state.description}
                                placeholder="Expense Description goes here"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="comments">Comments:</label>
                        <div className="col-sm-10">
                            <textarea
                                rows="5"
                                onChange={this.onInputChangeHandler}
                                className="form-control"
                                id="comments"
                                value={this.state.comments}
                                placeholder="Comments pertaining to the spend"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="amount">Amount:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                onChange={this.onInputChangeHandler}
                                className="form-control"
                                id="amount"
                                required={true}
                                value={this.state.amount}
                                placeholder="Total Spendings"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="createdAt">Spend Date:</label>
                        <div className="col-sm-10">
                            <SingleDatePicker
                                date={this.state.createdAt}
                                id="createdAt"
                                required={true}
                                isOutsideRange={(day) => false}
                                orientation={"horizontal"}
                                anchorDirection={"left"}
                                showClearDate={true}
                                showDefaultInputIcon={true}
                                onDateChange={(createdAt) => this.setState({createdAt})}
                                focused={this.state.focused}
                                onFocusChange={({focused}) => this.setState({focused})}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;