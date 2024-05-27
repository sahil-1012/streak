import React from 'react'
import { dateFormatter } from '../../utils/dateFormatter'
import { DvrOutlined, ExploreOutlined, LocalPoliceOutlined, SearchOutlined } from '@mui/icons-material'

const Header = ({ userData }) => {
  const date = dateFormatter(new Date());
  return (
    <div className='flex justify-between w-full'>
      <div className='flex flex-col gap-0.5 '>
        <p className='flex items-center gap-2.5 text-primary text-2xl font-semibold font-sans'> Hello, {userData.firstName}
          <LocalPoliceOutlined className='text-blue-500' />
        </p>
        <span className='text-secondary'> {date} </span>
      </div>

      <div className='flex gap-3 '>
        <p className='flex gap-2.5 bg-tertiary px-2 py-1 h-fit rounded-2xl cursor-pointer'>
          <ExploreOutlined className='text-secondary' />
          <span className='text-sm text-secondary'>For you</span>
        </p>

        <p className='flex gap-2.5 bg-tertiary px-2 py-1 h-fit rounded-2xl cursor-pointer'>
          <DvrOutlined className='text-secondary' />
          <span className='text-sm text-secondary'>Screener</span>
        </p>

        <p className='flex bg-tertiary px-2 py-1 h-fit rounded-2xl cursor-pointer'>
          <SearchOutlined className='text-secondary' />
        </p>

      </div>

    </div >

  )
}

export default Header