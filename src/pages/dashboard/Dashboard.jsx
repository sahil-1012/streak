import React from 'react'
import RecentNews from './RecentNews'
import Sectors from './Sectors'
import Markets from './Markets'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-7 gap-5 w-full h-fit'>
      <RecentNews className='col-span-full xl:col-span-3' />
      <Sectors className='col-span-full xl:col-span-4' />
      <Markets />
    </div>
  )
}

export default Dashboard