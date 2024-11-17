import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import rect from '../assets/images/Rect.svg'
import chartBg from '../assets/images/Chart.svg'

export default function LineChart() {
    const chartData = [{
        id: 'line-chart',
        data: [{
            x: 'aug',
            y: 0,
        },
        {
            x: 'sept',
            y: 40,
        },
        {
            x: 'oct',
            y: 20,
        },
        {
            x: 'nov',
            y: 42,
        },
        {
            x: 'dec',
            y: 60,
        }, 
        {
            x: 'jan',
            y: 85,
        }]
    }]
    
    const CustomPoint = ({data}) => {
        if (data.datum.y != 0) {
        return (
            <image
                href={rect} 
                x={-12}
                y={-12}
                width={24}
                height={24}
            />
        )}
    };

  return (
    <div style={{width: '100%', height: 180, marginTop: '1.5em'}}>
        <ResponsiveLine
            data={chartData}
            margin={{ top: 10, right: 20, bottom: 25, left: 20 }}
            curve='linear'
            axisLeft={null}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSymbol={(points) => <CustomPoint data={points}/>}
            yScale={{
                type:'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            theme={{text: {fill: '#fff'}}}
            colors={["#452D89"]}
            lineWidth={5}
            pointSize={24}
            pointColor={"#FB8303"}
            enablePointLabel={true}
            pointLabelYOffset={3.5}
        />
    </div>
  )
}
