import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("updated")
    }
    const deleteHandler = () => {
        console.log("deleted")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails Title={props.Title} location={props.location} amount={props.amount}></ExpenseDetails>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete Item</button>
        </Card>
    );
}
export default ExpenseItem;


