import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

export default function ColumnChart() {
    const date = new Date().getDay()
    const data = [
        {
            day: 'Mon',
            value: 191
        },
        {
            day: 'Tue',
            value: 170
        },
        {
            day: 'Wed',
            value: 212
        },
        {
            day: 'Thurs',
            value: 85
        },
        {
            day: 'Fri',
            value: 150
        },
        {
            day: 'Sat',
            value: 124
        },
        {
            day: 'Sun',
            value: 181
        }
    ]



  return (
    <div className='bar-graph'>
        <ResponsiveBar 
            data={data}
            isInteractive={false}
            keys={['value']}
            indexBy="day"
            valueScale={{type: "linear"}}
            padding={0.5}
            borderRadius={11}
            enableLabel={false}
            margin={{bottom: 30}}
            colors={(d) => {
                return (d.index+1 == date || (d.index + 1 == 7 && date == 0)) ? '#452D89' : '#d6cad9'}}
        />
    </div>
  )
}
