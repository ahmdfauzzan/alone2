import React from 'react'
import { HeaderUser } from '../components/Header/HeaderUser'

export const LayoutUser = ({children}) => {
  return (
    <div className='bg-[#EBF3FC] min-h-screen'>
      <HeaderUser/>
      <div className='desktop:px-28 desktopfull:px-36 py-8 text-sm'>
        {children}
      </div>
    </div>
  )
}
