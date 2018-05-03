import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses'

const Edit = (props) => {
  return (
    <div>
      Editing page of id: {props.match.params.key || `undefined`}
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
        props.dispatch(editExpense({
          ...expense,
          id: props.match.params.key
        }));
        props
          .history
          .push("/");
      }}/>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  expense: state
    .expenses
    .find((expense) => (expense.id === ownProps.match.params.key))
});

export default connect(mapStateToProps)(Edit);
