import { CallMadeOutlined } from '@mui/icons-material'
import React from 'react'

const Sectors = ({ className }) => {

    const sectors = [
        { "name": "Industrial", "change": 0.98 },
        { "name": "Technology", "change": -1.5 },
        { "name": "Financial", "change": 0.25 },
        { "name": "Healthcare", "change": 1.2 },
        { "name": "Consumer Discretionary", "change": -0.75 },
        { "name": "Consumer Staples", "change": 0.5 },
        { "name": "Energy", "change": -2.1 },
        { "name": "Utilities", "change": 0.8 },
        { "name": "Real Estate", "change": -0.3 },
        { "name": "Materials", "change": 1.1 },
        { "name": "Telecommunication", "change": -0.9 },
        { "name": "Transportation", "change": 1.5 }
    ];


    return (
        <div className={`flex flex-col p-8 gap-5 bg-secondary ${className} rounded-md h-full`}>
            <div className='flex justify-between gap-3'>
                <h5 className=' text-primary text-lg font-bold'>
                    Sector Performance
                </h5>
                <span className='text-secondary text-xs font-medium'>% price change</span>
            </div>

            <div className='grid md:grid-cols-2 gap-x-10 gap-y-2'>
                {sectors.map((sector, index) => (
                    <div key={index} className='flex justify-between'>
                        <p className='text-white'>{sector.name}</p>
                        <p className={sector.change >= 0 ?
                            'px-5 py-1 text-sm font-medium text-green  bg-gradient-to-r from-transparent via-transparent to-green-950/50 rounded-r-sm '
                            : 'px-5 py-1 text-sm font-medium text-red bg-gradient-to-r from-transparent via-transparent to-red-950/40 rounded-r-sm'}>
                            {sector.change >= 0 ? `+${sector.change.toFixed(2)}%` : `${sector.change.toFixed(2)}%`}
                        </p>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Sectors;