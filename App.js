import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyData = [
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

const App = () => {

  const [expenses, setExpense] = useState(DummyData);

  const onGetExpenseAppHandler = (expense) => {
    console.log(expense)

    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    })

  }
  return (
    <div>
      <NewExpense onGetExpenseInApp={onGetExpenseAppHandler} />
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </div>
  )

}
export default App;
