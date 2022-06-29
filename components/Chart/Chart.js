import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataPointsvalue = props.dataPoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...dataPointsvalue)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (<ChartBar
                key={dataPoint.lebel}
                value={dataPoint.value}
                maxValue={totalMaximum}
                lebel={dataPoint.lebel}
            />))}
        </div>
    )
}

export default Chart