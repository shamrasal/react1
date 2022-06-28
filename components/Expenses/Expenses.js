
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
const Expenses = (props) => {
    return (
        <div>
            <Card className="expenses">
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        Title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        location={expense.locationOfExpendeture}
                    />
                ))}
            </Card>
        </div>
    )
}
export default Expenses