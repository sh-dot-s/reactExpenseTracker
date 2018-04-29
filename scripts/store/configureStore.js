import { createStore, combineReducers } from "redux";
import { expenseReducer, filtersReducer } from "../reducers";

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer
        })
    );
    return store;
};