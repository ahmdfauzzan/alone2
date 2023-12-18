import React from 'react'
import { MdOutlinePeopleAlt } from "react-icons/md";

export const CardAdmin = () => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      <div className='flex items-center desktop:gap-5 desktopfull:gap-8 px-10 desktop:py-6 desktopfull:py-8 bg-[#489CFF] text-white rounded-xl'>
        <div className='text-primary bg-white p-3 rounded-3xl'>
          <MdOutlinePeopleAlt className='desktop:text-4xl desktopfull:text-5xl' />
        </div>
        <div className='desktop:text-xl desktopfull:text-2xl'>
          <div>450</div>
          <div className='font-semibold'>Active Users</div>
        </div>
      </div>

      <div className='flex items-center desktop:gap-5 desktopfull:gap-8 px-10 desktop:py-6 desktopfull:py-8 bg-[#73CA5C] text-white rounded-xl'>
        <div className='text-primary bg-white p-3 rounded-3xl'>
          <MdOutlinePeopleAlt className='desktop:text-4xl desktopfull:text-5xl' />
        </div>
        <div className='desktop:text-xl desktopfull:text-2xl'>
          <div>25</div>
          <div className='font-semibold'>Active Class</div>
        </div>
      </div>

      <div className='flex items-center desktop:gap-5 desktopfull:gap-8 px-10 desktop:py-6 desktopfull:py-8 bg-primary text-white rounded-xl'>
        <div className='text-primary bg-white p-3 rounded-3xl'>
          <MdOutlinePeopleAlt className='desktop:text-4xl desktopfull:text-5xl' />
        </div>
        <div className='desktop:text-xl desktopfull:text-2xl'>
          <div>20</div>
          <div className='font-semibold'>Premium Class</div>
        </div>
      </div>
    </div>
  )
}
