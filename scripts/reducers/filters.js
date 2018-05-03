import moment from 'moment';

const filterStateDefaults = {
    text: "",
    sortBy: undefined,
    startDate: moment().startOf("year"),
    endDate: moment().endOf("year")
};

export const filtersReducer = (state=filterStateDefaults, action) => {
    switch (action.type) {
        case "SET_FILTERS":
            return {...state, ...action.filters};
        case "SORT_BY_KEY":
            return {...state, sortBy: action.key}
        default:
            return filterStateDefaults;
    }
};