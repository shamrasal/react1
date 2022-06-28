import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
const Expenses = (props) => {
    const [filteredyear, setfilteredYear] = useState('2020');

    const onChangeFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    const filteredexpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredyear
    })
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredyear}
                    onChangeFilter={onChangeFilterHandler}
                />
                {filteredexpenses.map((expense) => (
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