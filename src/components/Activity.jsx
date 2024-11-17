import React from 'react'
import ColumnChart from './ColumnChart'

export default function Activity() {
  return (
    <div className='activity'>
        <div className="activity-header">
            <h3>Activity</h3>
            <div className="controls">
                <button><span>Day</span></button>
                <button className='current'><span>Week</span></button>
                <button><span>Month</span></button>
            </div>
        </div>
        <ColumnChart/>
    </div>
  )
}
