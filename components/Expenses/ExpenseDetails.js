const ExpenseDetails = (props) => {
    const TitleExpense = props.Title
    const LocationExpense = props.location
    const AmountExpense = props.amount
    return (
        <div className="expense-item__description">
            <h2>{TitleExpense}</h2>
            <h2>{LocationExpense}</h2>
            <div className="expense-item__price">${AmountExpense}</div>
        </div>
    )
}
export default ExpenseDetails