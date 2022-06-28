import './NewExpense.css'

import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) => {

    const onAddExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString
        }
        props.onGetExpenseInApp(expenseData)
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={onAddExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense