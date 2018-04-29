export const expenseReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "DELETE_EXPENSE":
            return state.filter(({id})=> id != action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => expense.id == action.id ? {...expense,...action.updates} : expense);
        default:
            return state;
    }
};