import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoStateTracker = {
    expenses: [{
        id: 1,
        description: "Rent for January",
        comments: "Final settlement of rent for the month of January",
        amount: 1000,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //amount|date
        startDate: undefined,
        endDate: undefined
    }
};

const addExpense = (
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

const getExpensesInScope = ({ expenses, filters }) => {
    expenses = expenses.filter((expense)=>{
        const startDateFlag = (typeof expense.startDate !== 'date'|| expense.createdAt >= startDate );
        const endDateFlag = (typeof expense.endDate !== 'date'|| expense.createdAt <= startDate);
        const textFlag = (expense.description.toLowerCase().includes(filters.text) || expense.comments.toLowerCase().includes(filters.text) == 1);
        return startDateFlag && endDateFlag && textFlag;
    });
    const sortExpense = (expenses) => {
        switch (filters.sortBy) {
            case "amount":
                return expenses.sort((a,b) => a.amount>b.amount?1:a.amount<b.amount?-1:0);
            case "date":
                return expenses.sort((a,b) => a.createdAt<b.createdAt?1:a.createdAt>b.createdAt?-1:0);
            default:
                return expenses;
        }
    }
    expenses = sortExpense(expenses);
    return expenses;
};

const deleteExpense = ({ id }) => ({ type: "DELETE_EXPENSE", id });

const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });

const searchBy = ({ text="",startDate=undefined,endDate=undefined }={}) => ({ type: "SET_FILTERS", filters:{text,startDate,endDate} });

const sortBy = ({key=""}="") => key ==""? { type:"NO_SORT" } : { type:"SORT_BY_KEY", key };

const filterStateDefaults = {
    text: "",
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
};

const expenseReducer = (state=[], action) => {
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

const filtersReducer = (state=filterStateDefaults, action) => {
    switch (action.type) {
        case "SET_FILTERS":
            return {...state, ...action.filters};
        case "SORT_BY_KEY":
            return {...state, sortBy: action.key}
        default:
            return filterStateDefaults;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
    const filteredData = getExpensesInScope(store.getState());
    console.log(filteredData);
})

const expense2 = store.dispatch(addExpense());
const expense1 = store.dispatch(addExpense({
    description: "First Description",
    comments: "This is the first non default comment for expense",
    amount: 1000,
}));

const expense3 = store.dispatch(addExpense({
    description: "First Description",
    comments: "This is the second non default comment for expense",
    amount: 500,
}));

const expense4 = store.dispatch(addExpense({
    description: "Third Description",
    comments: "This is the third non default comment for expense",
    amount: 300,
}));

store.dispatch(deleteExpense({id: expense1.expense.id}));
store.dispatch(editExpense(expense2.expense.id, { amount: 1020 }));
store.dispatch(searchBy({text:"first",startDate:0,endDate:new Date(2100,1)}));
store.dispatch(searchBy());
store.dispatch(sortBy({key:"date"}));
store.dispatch(addExpense());