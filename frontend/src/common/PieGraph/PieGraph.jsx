import React from "react";
import style from './style';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';


export const PieGraph = ({ data, oneColor }) => {
  return (
    <style.PieGraph>
      <style.PieOuterCircle>
        <style.PieInnerCircle />
        <div className="PieFrame">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="0.2" />
                </filter>
              </defs>
              <Pie
                dataKey="value"
                data={data}
                innerRadius="80%"
                paddingAngle={5}
                outerRadius='90%'
              >
                {data.map(entry => (
                  <Cell
                    style={{
                      filter: `drop-shadow(0px 0px 5px ${entry.color}`
                    }}
                    key={entry.name}
                    fill={entry.color}
                    stroke="none" />
                ))}
              </Pie>
              <Pie
                dataKey="value"
                data={data}
                innerRadius="54%"
                outerRadius='55%'
                isAnimationActive={false}
              >
                {data.map(entry => (
                  <Cell
                    style={{
                      filter: `drop-shadow(0px 0px 1px ${oneColor ? data[0].color : entry.color}) url(#shadow)`
                    }}
                    key={entry.name}
                    stroke='none'
                    fill-opacity="0.5"
                    stroke-opacity="0.8"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </style.PieOuterCircle>
    </style.PieGraph>
  )
}