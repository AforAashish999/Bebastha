import React from 'react'
import { FiSearch } from "react-icons/fi";

export default function SearchSort() {
  return (
       
    <div className='bg-white flex justify-between py-1 px-1 rounded-lg shadow-lg'>

        <div className='flex items-center'>
         <FiSearch className='text-[#27ac52] ' />
        <input 
        type="text"
        placeholder='Type your customer name...'
        className='bg- white p-2 focus:outline-none opacity-50'
        />
        </div>

        <button className='bg-[#27ac52] rounded-md px-3 font- text-white hover:bg-[#00bf63] cursor-pointer transition-all duration-100 ease-in'>
            Search
        </button>
       
    </div>
 
  )
}
