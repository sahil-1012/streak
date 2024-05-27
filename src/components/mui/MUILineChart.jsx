import { LineChart } from '@mui/x-charts/LineChart'
import React from 'react'

const MUILineChart = ({ className = 'h-full w-full min-h-48 p-0 m-0', mainData, secondaryData }) => {
    return (
        <div className={className}>
            <LineChart
                series={[
                    { data: mainData, color: '#ffffff', showMark: false, },
                    { data: secondaryData, color: 'orange', showMark: false, }
                ]}
                grid={{ color: '#FFA500', }}
                disableAxisListener
                disableLineItemHighlight
                leftAxis={null}
                bottomAxis={null}
                axisHighlight={false}
                disableDots
            />

        </div>
    )
}

export default MUILineChart