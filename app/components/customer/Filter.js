'use client'
import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'

const dropItems = [
  { label: 'Filter by Organization',
     value: 'organization', 
     isDropdown: true },
  {
    label: 'Filter by Project Status',
    value: 'projectStatus',
    isDropdown: true
  }
]

const ProjectItems = [
  { label: 'On Going' },
  { label: 'Completed' },
  { label: 'Pending' },
  { label: 'Cancelled' },
  { label: 'Untouched' }
]

export default function Filter () {
  const [mainDrop, setMainDrop] = useState(false)
  const [activeLabel, setActiveLabel] = useState('Filter by Organization')


  // input field value state
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='bg-white  relative rounded-lg px-3 py-1.5 flex items-center gap-x-1 border-gray-300 border hover:bg-gray-300  '>
      <button
        onClick={() => setMainDrop(!mainDrop)}
        className='flex items-center cursor-pointer'
      >
        <CiFilter className='text-[#27ac52] text-xl' />
        <p className='text-gray-600'>Filter </p>
      </button>

          


     
    </div>
  )
}





