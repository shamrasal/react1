import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails Title={props.Title} location={props.location} amount={props.amount}></ExpenseDetails>
        </Card>
    );
}
export default ExpenseItem;


