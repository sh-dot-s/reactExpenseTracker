import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from "../actions/expenses";

const Create = (props) => (<ExpenseForm onSubmit={
  (expense) => {
    props.dispatch(addExpense({...expense}));
    props.history.push("/");
  }
}/>);

export default connect()(Create);
