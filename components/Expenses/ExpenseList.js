import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <h1 className="expenses-list__fallback">'no expense found'</h1>
    } else if (props.item.length === 1) {
        return <h1 className="expenses-list__fallback">'Only single Expense here. Please add more...'</h1>
    }

    return (
        <ul className="expenses-list" >
            {props.item.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    Title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    location={expense.locationOfExpendeture}
                />
            )}
        </ul>
    )
}

export default ExpenseList