import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import MUILineChart from '../../components/mui/MUILineChart';

const Markets = () => {
    const markets = [
        { name: "S&P 500", price: 100.25, change: 1.25, net_change: 0.1 },
        { name: "Nasdaq", price: 75.50, change: -0.50, net_change: -0.05 },
        { name: "Dow Jones", price: 120.75, change: 2.75, net_change: 0.2 },
        { name: "FTSE 100", price: 150.25, change: 0.75, net_change: 0.05 },
        { name: "Nikkei 225", price: 200.50, change: -1.00, net_change: -0.1 },
        { name: "Hang Seng", price: 300.75, change: 3.25, net_change: 0.3 },
        { name: "DAX", price: 180.00, change: -2.00, net_change: -0.2 },
        { name: "CAC 40", price: 130.50, change: 1.50, net_change: 0.15 },
        { name: "Gold", price: 1900.00, change: 10.50, net_change: 0.05 },
        { name: "Silver", price: 25.75, change: 0.25, net_change: 0.01 },
        { name: "Bitcoin", price: 400.00, change: 50.00, net_change: 0.01 },
        { name: "Ethereum", price: 250.00, change: 10.00, net_change: 0.04 }
    ];

    const [currentMarket, setCurrentMarket] = useState(markets[0]);
    const handleChangeMarket = (selectedMarket) => {
        setCurrentMarket(selectedMarket);
    };

    const mainData = [98.38, 89.51, 112.9, 93.36, 119.4, 102.29,
        78.84, 86.22, 64.86, 94.72, 122.4, 103.34, 133.4, 189.86,
        193.2, 205, 206, 206, 210]

    const secondaryData = [
        106, 96, 96, 106, 106, 96, 96, 106, 106, 96, 96, 106, 106, 96, 96, 110, 110, 112, 110]
    return (
        <div className='col-span-full flex flex-col gap-5'>
            <h2 className='text-secondary text-xl font-medium px-2'>
                Markets
            </h2>

            <div className='grid grid-cols-7 bg-secondary'>
                <div className='col-span-full xl:col-span-3 flex flex-col gap-5 p-5'>
                    <div className='flex flex-col gap-1'>
                        {markets.map((market, index) => (
                            <React.Fragment>
                                <div key={index} className={`grid justify-center items-center grid-cols-7 px-3 py-1 rounded-md cursor-pointer ${currentMarket.name === market.name && 'bg-tertiary'}`} onClick={() => handleChangeMarket(market)}>
                                    <p className='col-span-3 text-primary text-sm'>{market.name}</p>
                                    <p className='text-sm text-primary'>
                                        {market.price >= 0 ? `+${market.price.toFixed(2)}` : `${market.price.toFixed(2)}`}
                                    </p>
                                    <p className='text-sm text-primary'>
                                        {market.net_change >= 0 ? `+${market.net_change.toFixed(2)}%` : `${market.net_change.toFixed(2)}%`}
                                    </p>
                                    <p className={'col-span-2 text-center rounded-lg ' + (market.change >= 0 ? 'text-green bg-green-950 bg-opacity-40' : 'text-red bg-red-950 bg-opacity-30')}>
                                        {market.change >= 0 ? `+${market.change.toFixed(2)}%` : `${market.change.toFixed(2)}%`}
                                    </p>
                                </div>

                                <hr className='border-gray-800' />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className='col-span-full xl:col-span-4 flex flex-col gap-5 p-5'>
                    <div className='flex flex-col md:flex-row gap-3 justify-between '>
                        <h5 className='flex flex-col gap-0.5'>
                            <p className='flex gap-2 items-end text-lg font-bold cursor-pointer  text-primary hover:text-secondary' >
                                <span>SPDR {currentMarket.name} ETF Trust</span>
                                <KeyboardArrowRightOutlined />
                            </p>
                            <span className='text-xs text-secondary'>{currentMarket.price}</span>
                        </h5>
                        
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-1.5'>
                                <span className='rounded-full h-2.5 w-2.5 bg-white' />
                                <span className='text-secondary text-xs' >{currentMarket.name}</span>
                            </p>

                            <p className='flex items-center gap-1.5'>
                                <span className='rounded-full h-2.5 w-2.5 bg-orange-500' />
                                <span className='text-secondary text-xs' >Moving Average</span>
                            </p>
                        </div>
                    </div>

                    <MUILineChart mainData={mainData} secondaryData={secondaryData} />
                </div>
            </div>
        </div>
    );
}

export default Markets;
