import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredtext, setEnteredText] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEntereddate] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')

    const changeTextHandler = (event) => {
        setEnteredText(event.target.value)
    }

    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const changeDateHandler = (event) => {
        setEntereddate(event.target.value)
    }
    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value)
    }

    const getInputValue = (event) => {
        event.preventDefault()
        const inputData = {
            title: enteredtext,
            amount: enteredAmount,
            date: new Date(enteredDate),
            locationOfExpendeture: enteredLocation
        }
        props.onSaveExpenseForm(inputData)
        setEnteredText('')
        setEnteredAmount('')
        setEntereddate('')
    }

    return (
        <form onSubmit={getInputValue}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={changeTextHandler}
                        type='text'
                        value={enteredtext}
                        required>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={changeAmountHandler}
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        required>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={changeDateHandler}
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        required
                    ></input>
                </div>
                <div className='new-expense__control'>
                    <label>location</label>
                    <input onChange={locationChangeHandler}
                        type='text'
                        value={enteredLocation}
                        required
                    ></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm