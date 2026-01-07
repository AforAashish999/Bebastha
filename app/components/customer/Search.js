"use client"

//Client Search Component (ONLY updates URL)

import { useState, useEffect, use } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiSearch } from "react-icons/fi";
import {useDebounce} from 'use-debounce';

const searchItems = [
  {value: "search"},
  {value: "organization"},
  {value: "project"}
]

export default  function Search() {
const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("search") || "");
  const [debouncedValue] = useDebounce(inputValue, 400)

  useEffect( () => {
    const params = new URLSearchParams(searchParams.toString());
    if(debouncedValue){
      params.set("search", debouncedValue);
    } else {
      params.delete("search")
    }
    router.replace(`/clients?${params.toString()}`)
  }, [debouncedValue])
  return (
       
        <div className=' bg-white w-1/3 px-1 rounded-lg flex items-center border-gray-300 border'>
         <FiSearch className='text-[#27ac52] ' />
        <input 
        type="text"
        placeholder='Type your customer name.......'
        className='bg- white px-1 py-1.5 focus:outline-none opacity-80 text-sm '
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        </div>

   
 
  )
}
