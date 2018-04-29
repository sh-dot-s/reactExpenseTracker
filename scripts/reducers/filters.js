const filterStateDefaults = {
    text: "",
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
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