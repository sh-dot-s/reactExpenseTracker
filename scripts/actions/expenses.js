import uuid from "uuid";
import moment from 'moment';

export const addExpense = (
    {
        description= "No description provided, this is a default",
        comments= "No comments provided",
        amount= 0,
        createdAt= moment()
    } = {}) => (
    {
        type: "ADD_EXPENSE",
        expense: { id: uuid(),description, comments, amount, createdAt }
    }
);

export const editExpense = (updates) => ({ type: "EDIT_EXPENSE", id:updates.id, updates });

export const deleteExpense = ({ id }) => ({ type: "DELETE_EXPENSE", id });

