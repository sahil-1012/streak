import { CallMadeOutlined } from '@mui/icons-material'
import React from 'react'

const RecentNews = ({ className }) => {
    return (
        <div className={`flex flex-col justify-between p-8 bg-black ${className} rounded-md h-full`}>
            <div className='flex gap-2.5 '>
                <p className='flex items-center px-3 rounded-3xl bg-tertiary text-primary font-normal'>The markets are&nbsp;
                    <span className='text-green font-semibold'>bullish</span>
                </p>
                <p className='flex p-2 rounded-full bg-tertiary'>
                    <CallMadeOutlined fontSize='12px' className='text-green' />
                </p>
            </div>

            <div className='flex flex-col gap-3'>
                <span className='text-secondary'>What you need to know today</span>
                <span className='text-primary text-xl font-medium'>Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path</span>
            </div>
        </div>
    )
}

export default RecentNews;