export const getExpensesInScope = ({ expenses, filters }) => {
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