import React from 'react'
import { pie } from '../graphs/pie/data'
import { ResponsivePie } from '@nivo/pie'

export default function PieChart() {
  return (
    <div className="pie_block">
        <div className='pie-chart'>
            <ResponsivePie
                data={pie}
                innerRadius={.8}
                padAngle={0.7}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
                }}
                colors={['#FB8303',  '#452D89']}  
                arcLinkLabelsTextColor="transparent"
                arcLinkLabelsThickness={0}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={'transparent'}
                isInteractive={false}
            />
        </div>
        <div className="text"><b>75%</b><br />course completed</div>
    </div>
  )
}
