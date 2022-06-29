import React from "react"
import Chart from "../Chart/Chart"
const ExpenseChart = (props) => {
    const chartDataPoints = [
        { lebel: 'Jan', value: 0 },
        { lebel: 'Feb', value: 0 },
        { lebel: 'Mar', value: 0 },
        { lebel: 'jun', value: 0 },
        { lebel: 'jul', value: 0 },
        { lebel: 'Aug', value: 0 },
        { lebel: 'Sep', value: 0 },
        { lebel: 'Oct', value: 0 },
        { lebel: 'Nov', value: 0 },
        { lebel: 'Dec', value: 0 },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpenseChart