import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from "./ListItem";
import { getExpensesInScope } from "../selectors/expenses";
import { deleteExpense } from "../actions/expenses";
import ExpenseListFilter from "./ListFilter";

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="add-bottom-padding">
          <ExpenseListFilter/>
        </div>
        { this
          .props
          .expenses
          .map((expense) => (<ListItem
            key={expense.id}
            deleteExpense={() => {
            this.props.dispatch(deleteExpense({id: expense.id}));
          }}{...expense}/>))
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({expenses: getExpensesInScope(state)});
export default connect(mapStateToProps)(Base);