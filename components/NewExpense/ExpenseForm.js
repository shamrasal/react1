import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const changeTextHandler = (event) => {
        console.log(event.target.value)
    }

    const changeAmountHandler = (event) => {
        console.log(event.target.value)
    }

    const changeDateHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={changeTextHandler} type='text' required></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={changeAmountHandler} type='number' min='0.01' step='0.01' required></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={changeDateHandler} type='date' min='2019-01-01' max='2022-12-31' required></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm