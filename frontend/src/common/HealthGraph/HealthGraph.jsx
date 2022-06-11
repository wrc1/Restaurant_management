import React from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 20, color: '#0088FE' },
  { name: 'Group B', value: 100 - 20, color: '#2d2d36' },
];


export const HealthGraph = () => {

  return (
    <ResponsiveContainer >
      <PieChart>
        <defs>
          <filter id="health-shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.2" />
          </filter>
        </defs>
        <Pie
          data={data}
          innerRadius={52}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              style={{
                filter: `drop-shadow(0px 0px 1px ${entry.color}) url(#health-shadow)`
              }}
              key={`cell-${index}`}
              fill={entry.color}
              fill-opacity="0.5"
              stroke-opacity="0.8"
            />
          ))}
          {/* <Label fill='white' fontSize="20px" value="20%" position="center" /> */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  )
}