import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
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
                <ExpenseList item ={filteredexpenses}/>
            </Card>
        </div>
    )
}
export default Expenses