import uuid from "uuid";

export const addExpense = (
    {
        description= "No description provided, this is a default",
        comments= "No comments provided",
        amount= 0,
        createdAt= new Date()
    } = {}) => (
    {
        type: "ADD_EXPENSE",
        expense: { id: uuid(),description, comments, amount, createdAt }
    }
);

export const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });

export const deleteExpense = ({ id }) => ({ type: "DELETE_EXPENSE", id });

