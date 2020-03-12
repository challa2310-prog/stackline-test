import React from 'react';
import {
  LineChart, Line, XAxis, YAxis,ResponsiveContainer
} from 'recharts';

const SalesGraph = ({ sales }) => {
  const chartParent = {position: 'relative',height: 600};
  const chartContainer = {position: 'absolute',top: '0',left: '0',width: '99%',height: '99%'};
  return (
    <div style={chartParent} >
      <div style={chartContainer}>
          <h6 className="chart-label">Retail Sales</h6>
          <ResponsiveContainer>
              <LineChart
                dot={false}
                data={sales}
                margin={{
                  top: 50, right: 30, left: 20, bottom: 5,
                }}
              >
                <XAxis dataKey="month"  width={100} interval={0} tickLine={false} />
                <YAxis hide={true} />
                <Line type="monotone" dataKey="retailSales" stroke="#8884d8" dot={false} />
                <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" dot={false} />
              </LineChart>
          </ResponsiveContainer>
      </div>
    </div>
)
}

export default SalesGraph;