import moment from 'moment';

export const getExpensesInScope = ({expenses, filters}) => {
    expenses = expenses.filter((expense) => {
        const startDateFlag = filters.startDate==null?true:(filters.startDate.isValid() && expense.createdAt.isSameOrAfter(filters.startDate));
        const endDateFlag = filters.endDate==null?true:(filters.endDate.isValid() && expense.createdAt.isSameOrBefore(filters.endDate));
        const textFlag = (expense.description.toLowerCase().includes(filters.text) || expense.comments.toLowerCase().includes(filters.text) == 1);
        return startDateFlag && endDateFlag && textFlag;
    });
    const sortExpense = (expenses) => {
        switch (filters.sortBy) {
            case "amount":
                return expenses.sort((a, b) => a.amount > b.amount
                    ? 1
                    : a.amount < b.amount
                        ? -1
                        : 0);
            case "date":
                return expenses.sort((a, b) => a.createdAt.isAfter(b.createdAt)
                    ? 1
                    : a.createdAt.isBefore(b.createdAt)
                        ? -1
                        : 0);
            default:
                return expenses;
        }
    }
    expenses = sortExpense(expenses);
    return expenses;
};