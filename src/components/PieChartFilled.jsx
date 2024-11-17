import { ResponsivePie } from '@nivo/pie';

const data = [
    { id: 'Segment 1', value: 195, color: '#452D89' }, // Dark purple
    { id: 'Segment 2', value: 75, color: '#FAA353' }, // Orange
    { id: 'Segment 3', value: 90, color: '#FEE7A0' }, // Light yellow
];

export default function PieChartFilled() {
  return (
    <div style={{ width: 82, height: 82, transform: 'rotate(180deg)'}}>
        <ResponsivePie
        data={data}
        colors={{ datum: 'data.color' }}
        innerRadius={0}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        isInteractive={false}
        />
    </div>
  )
}
