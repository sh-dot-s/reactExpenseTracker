import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from "./ListItem";
import { getExpensesInScope } from "../selectors/expenses";

class Base extends React.Component {
  constructor(props){
    super(props);
    console.log();
  }
  render() {
    return (
      <div>
        { this.props.expenses.map((expense) => (<ListItem key={expense.id} {...expense}/>)) }
      </div>
    );
  }
}
const mapStateToProps = (state) =>({expenses:getExpensesInScope(state)});
export default connect(mapStateToProps)(Base);