import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import MUILineChart from '../../components/mui/MUILineChart';

const Markets = () => {

    // ~ NOT ABLE TO FIND GOOD API
    const markets = [
        {
            name: "S&P 500", price: 4382.6, change: 12.58, net_change: 0.29,
            values: [4370.12, 4368.34, 4371.45, 4369.56, 4372.78, 4369.23,
                4375.67, 4373.89, 4372.60, 4375.12, 4374.34, 4373.56, 4375.67,
                4374.89, 4377.45, 4379.12, 4380.89, 4382.12, 4384.34],
            avg: [4382.3, 4382.4, 4382.5, 4382.6, 4382.7, 4382.8,
                4382.7, 4382.6, 4382.5, 4382.4, 4382.3, 4382.2, 4382.1,
                4382.2, 4382.3, 4382.4, 4382.5, 4382.6, 4382.7]
        },
        {
            name: "Nasdaq", price: 14386.75, change: -35.42, net_change: -0.25,
            values: [14379.32, 14382.45, 14380.68, 14384.78, 14381.93, 14387.21,
                14385.34, 14389.45, 14387.56, 14390.67, 14388.79, 14392.89, 14390.12,
                14393.23, 14391.34, 14395.45, 14393.56, 14397.67, 14395.78],
            avg: [14386.7, 14386.8, 14386.9, 14387.0, 14387.1, 14387.2,
                14387.1, 14387.0, 14386.9, 14386.8, 14386.7, 14386.6, 14386.5,
                14386.6, 14386.7, 14386.8, 14386.9, 14387.0, 14387.1]
        },
        {
            name: "Dow Jones", price: 34302.34, change: 82.45, net_change: 0.24,
            values: [34305.12, 34307.56, 34304.89, 34308.34, 34306.78, 34310.23,
                34308.45, 34311.67, 34309.89, 34312.12, 34310.34, 34313.56, 34311.89,
                34314.23, 34312.56, 34315.78, 34314.12, 34316.45, 34315.23],
            avg: [34302.3, 34302.4, 34302.5, 34302.6, 34302.7, 34302.8,
                34302.7, 34302.6, 34302.5, 34302.4, 34302.3, 34302.2, 34302.1,
                34302.2, 34302.3, 34302.4, 34302.5, 34302.6, 34302.7]
        },
        {
            name: "FTSE 100", price: 7023.56, change: 15.73, net_change: 0.22,
            values: [7021.89, 7023.12, 7021.45, 7024.34, 7022.67, 7025.12,
                7023.78, 7026.23, 7024.56, 7027.34, 7025.67, 7028.45, 7026.78,
                7029.23, 7027.56, 7030.34, 7028.67, 7031.12, 7029.45],
            avg: [7023.5, 7023.5, 7023.6, 7023.6, 7023.7, 7023.7,
                7023.8, 7023.8, 7023.9, 7023.9, 7024.0, 7024.0, 7024.1,
                7024.1, 7024.2, 7024.2, 7024.3, 7024.3, 7024.4]
        },
        {
            name: "Nikkei 225", price: 28347.22, change: -104.56, net_change: -0.37,
            values: [28346.45, 28347.89, 28346.12, 28348.67, 28347.23, 28349.78,
                28348.34, 28350.89, 28349.45, 28351.67, 28350.23, 28352.56, 28351.12,
                28353.45, 28352.23, 28354.67, 28353.34, 28355.78, 28354.12],
            avg: [28347.1, 28347.1, 28347.2, 28347.2, 28347.3, 28347.3,
                28347.4, 28347.4, 28347.5, 28347.5, 28347.6, 28347.6, 28347.7,
                28347.7, 28347.8, 28347.8, 28347.9, 28347.9, 28348.0]
        },
        {
            name: "Hang Seng", price: 29345.87, change: 120.68, net_change: 0.41,
            values: [29342.56, 29339.89, 29348.11, 29358.77, 29374.23, 29383.45,
                29380.35, 29375.9, 29345.87, 29349.43, 29354.68, 29359.29, 29366.87,
                29372.34, 29379.78, 29386.23, 29391.65, 29397.12, 29402.78],
            avg: [29345.75, 29345.76, 29345.77, 29345.78, 29345.79, 29345.80,
                29345.81, 29345.82, 29345.83, 29345.84, 29345.85, 29345.86, 29345.87,
                29345.88, 29345.89, 29345.90, 29345.91, 29345.92, 29345.93]
        },
        {
            name: "DAX", price: 15384.67, change: -52.12, net_change: -0.34,
            values: [15382.88, 15381.22, 15385.45, 15390.56, 15395.89, 15400.34,
                15399.81, 15395.67, 15384.67, 15387.23, 15390.56, 15394.12, 15398.56,
                15402.68, 15406.89, 15410.45, 15415.67, 15420.34, 15423.78],
            avg: [15384.60, 15384.61, 15384.62, 15384.63, 15384.64, 15384.65,
                15384.66, 15384.67, 15384.68, 15384.69, 15384.70, 15384.71, 15384.72,
                15384.73, 15384.74, 15384.75, 15384.76, 15384.77, 15384.78]
        },
        {
            name: "CAC 40", price: 6615.29, change: 21.45, net_change: 0.32,
            values: [6613.77, 6612.88, 6615.79, 6619.45, 6623.88, 6628.67,
                6628.23, 6625.89, 6615.29, 6617.56, 6620.67, 6624.23, 6627.67,
                6631.45, 6634.89, 6637.67, 6641.23, 6644.12, 6646.56],
            avg: [6615.25, 6615.26, 6615.27, 6615.28, 6615.29, 6615.30,
                6615.31, 6615.32, 6615.33, 6615.34, 6615.35, 6615.36, 6615.37,
                6615.38, 6615.39, 6615.40, 6615.41, 6615.42, 6615.43]
        },
        {
            name: "Gold", price: 1867.89, change: 3.58, net_change: 0.19,
            values: [1866.62, 1865.88, 1866.17, 1868.26, 1870.15, 1871.13,
                1871.67, 1870.79, 1867.89, 1869.36, 1870.74, 1872.15, 1874.03,
                1875.46, 1876.24, 1877.46, 1878.13, 1879.02, 1880.27],
            avg: [1867.88, 1867.89, 1867.90, 1867.91, 1867.92, 1867.93,
                1867.94, 1867.95, 1867.96, 1867.97, 1867.98, 1867.99, 1868.00,
                1868.01, 1868.02, 1868.03, 1868.04, 1868.05, 1868.06]
        },
        {
            name: "Silver", price: 27.45, change: 0.78, net_change: 0.03,
            values: [27.23, 27.55, 26.98, 27.81, 26.72, 27.89,
                26.65, 28.03, 26.42, 28.17, 26.38, 28.34, 26.21,
                28.50, 26.49, 28.12, 26.76, 27.95, 26.88],
            avg: [27.35, 27.34, 27.36, 27.35, 27.36, 27.34,
                27.35, 27.34, 27.36, 27.35, 27.36, 27.34, 27.35,
                27.34, 27.36, 27.35, 27.36, 27.34, 27.35]
        },
        {
            name: "Bitcoin", price: 38856.23, change: 256.78, net_change: 0.66,
            values: [38822.56, 38820.34, 38768.12, 38989.45, 38711.23, 39012.78,
                38685.67, 38055.89, 38642.45, 38098.56, 38631.67, 38124.34, 38612.45,
                39146.23, 38676.89, 39110.12, 38698.34, 39032.56, 38722.78],
            avg: [38800.00, 38800.00, 38800.00, 38800.00, 38800.00, 38800.00,
                38800.00, 38800.00, 38800.00, 38800.00, 38800.00, 38800.00, 38800.00,
                38800.00, 38800.00, 38800.00, 38800.00, 38800.00, 38800.00]
        },
        {
            name: "Ethereum", price: 2590.33, change: 58.79, net_change: 0.33,
            values: [2578.21, 2597.54, 2566.78, 2608.42, 2557.89, 2617.36,
                2548.67, 2624.98, 2636.45, 2631.12, 2630.67, 2638.79, 2620.34,
                2643.45, 2629.56, 2634.78, 2537.23, 2621.56, 2545.78],
            avg: [2495.00, 2445.00, 2485.00, 2585.00, 2590.00, 2585.00,
                2585.00, 2485.00, 2525.00, 2585.00, 2585.00, 2585.00, 2585.00,
                2585.00, 2585.00, 2585.00, 2585.00, 2585.00, 2585.00]
        }
    ];

    const [currentMarket, setCurrentMarket] = useState(markets[0]);
    const handleChangeMarket = (selectedMarket) => setCurrentMarket(selectedMarket);

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
                                    <p className='col-span-6 sm:col-span-3 text-primary text-sm'>{market.name}</p>
                                    <p className='hidden sm:flex text-sm text-primary'>
                                        {market.price >= 0 ? `+${market.price.toFixed(2)}` : `${market.price.toFixed(2)}`}
                                    </p>
                                    <p className='hidden sm:flex text-sm text-primary'>
                                        {market.net_change >= 0 ? `+${market.net_change.toFixed(2)}%` : `${market.net_change.toFixed(2)}%`}
                                    </p>
                                    <p className={'col-span-1 sm:col-span-2 text-center rounded-lg ' + (market.change >= 0 ? 'text-green bg-green-950 bg-opacity-40' : 'text-red bg-red-950 bg-opacity-30')}>
                                        {market.change >= 0 ? `+${market.change.toFixed(2)}%` : `${market.change.toFixed(2)}%`}
                                    </p>
                                </div>

                                <hr className='border-gray-800' />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className='col-span-full xl:col-span-4 flex flex-col gap-5 p-5 h-full'>
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
                    <div className='w-full h-full max-h-96'>
                        <MUILineChart mainData={currentMarket?.values} secondaryData={currentMarket?.avg || []} />
                    </div>
                    <p className='text-sm text-secondary italic'> Disclaimer: The values presented are simulated projections and should not be considered as actual market figures</p>
                </div>  
            </div>
        </div>
    );
}

export default Markets;
