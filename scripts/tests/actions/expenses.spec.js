import uuid from "uuid";
import moment from 'moment';
import {addExpense, editExpense, deleteExpense} from '../../actions/expenses'

test('should generate action to delete an expense', () => {
  expect(deleteExpense({id: "dummyId"})).toEqual({type: "DELETE_EXPENSE", id: "dummyId"})
})

test('should generate action to edit an expense', () => {
  const updates = {
    id: "dummyId",
    description: "dummyDescription"
  }
  expect(editExpense(updates)).toEqual({type: "EDIT_EXPENSE", id: updates.id, updates})
})

test('should generate action to add an expense with provided inputs', () => {
  const expense = {
    description: "dummyDescription",
    comments: "dummyComments",
    amount: 10101011100
  }
  expect(addExpense({
    ...expense
  })).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.anything(),
      createdAt: expect.anything()
    }
  })
})
test('should generate action to add an expense with default inputs', () => {

  expect(addExpense()).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "No description provided, this is a default",
      comments: "No comments provided",
      amount: 0,
      id: expect.anything(),
      createdAt: expect.anything()
    }
  })
})

// export const addExpense = (     {         description= "No description
// provided, this is a default",         comments= "No comments provided",
//   amount= 0,         createdAt= moment()     } = {}) => (     {         type:
// "ADD_EXPENSE",         expense: { id: uuid(),description, comments, amount,
// createdAt }     } ); export const editExpense = (updates) => ({ type:
// "EDIT_EXPENSE", id:updates.id, updates }); export const deleteExpense = ({ id
// }) => ({ type: "DELETE_EXPENSE", id });
