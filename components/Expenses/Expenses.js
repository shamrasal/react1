
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
const Expenses = () => {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
            locationOfExpendeture: "pune",
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), locationOfExpendeture: "pune" },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
            locationOfExpendeture: "mumbai",
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
            locationOfExpendeture: "delhi",
        },
    ];

    return (
        <Card className="expenses">
            <ExpenseItem
                Title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
                location={expenses[0].locationOfExpendeture}
            ></ExpenseItem>
            <ExpenseItem
                Title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
                location={expenses[1].locationOfExpendeture}
            ></ExpenseItem>
            <ExpenseItem
                Title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
                location={expenses[2].locationOfExpendeture}
            ></ExpenseItem>
            <ExpenseItem
                Title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
                location={expenses[3].locationOfExpendeture}
            ></ExpenseItem>
        </Card>
    )

}
export default Expenses