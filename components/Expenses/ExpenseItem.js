import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.Title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle('updated')
        console.log(title)
    }
    const editAmountHandler = () => {
        setAmount(100)
        console.log(amount)
    }
    const deleteHandler = () => {
        console.log('deleted')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails Title={title} location={props.location} amount={amount}></ExpenseDetails>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={editAmountHandler}>Change Amount</button>
            <button onClick={deleteHandler}>Delete Item</button>
        </Card>
    );
}
export default ExpenseItem;


