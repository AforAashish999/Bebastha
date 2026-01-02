"use client"
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

export default function DEV() {
  const [view, setView] = useState(true);
  return (
    <div className="flex justify-around">
      <button
       onClick={()=>setView(!view)}
       className="text-gray-500 cursor-pointer transform transition-all duration-100 hover:text-gray-400 hover:scale-110 " 
       >
        {view?  <FaEyeSlash /> :  <FaEye/>}
      </button>
  
        <GrDocumentUpdate className="cursor-pointer text-[#27ac52] transition-all transform ease-in duration-100 hover:scale-110 "/>
        <MdDeleteForever className="text-red-500 text-xl transform transition-all ease-in duration-300 hover:rotate-180 cursor-pointer " />
    </div>
  )
}
