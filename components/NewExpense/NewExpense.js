import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const onAddExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString
        }
        props.onGetExpenseInApp(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    
    const cancelClickHandler = () => {
        setIsEditing(false)
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseForm={onAddExpenseHandler} onCancel={cancelClickHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense