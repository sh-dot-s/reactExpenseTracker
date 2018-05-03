import moment from 'moment';

export const searchBy = ({
    text = "",
    startDate = moment().startOf("year"),
    endDate = moment().endOf("year")
} = {}) => ({
    type: "SET_FILTERS",
    filters: {
        text,
        startDate,
        endDate
    }
});

export const sortBy = ({
    key = ""
} = "") => key == ""
    ? {
        type: "NO_SORT"
    }
    : {
        type: "SORT_BY_KEY",
        key
    };
