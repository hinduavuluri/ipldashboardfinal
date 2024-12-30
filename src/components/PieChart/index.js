import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#ff0000', '#fff600', '#ff1493']

const PieChart = props => {
  const {data} = props
  return (
    <div className="pie-chart-container">
      <PieChartComponent width={400} height={370}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={120}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={37} />
      </PieChartComponent>
    </div>
  )
}
export default PieChart
