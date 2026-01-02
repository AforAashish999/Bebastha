import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoMdNotifications } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function NavBar() {
    const navItems = [
        {label:<IoMdNotifications className='text-[#27ac52] text-2xl' />, href:"/notification"},
        {label:<MdLightMode className='text-[#27ac52] text-2xl'/>, href:"/mode"},
        {label:<IoMdSettings className='text-[#27ac52] text-2xl' />, href:"/settings"},
        {label:"Register", href:"/register"}
    ]
  return (
    <nav className='w-full flex items-center justify-between pl-4 pr-12 py-2 4 bg-white border-gray-200 border-b-[1.5px] '>
           {/* Image */}
         <div className='h-10 w-35 bg-red-500'>
            <div className='relative h-full w-full'>
                <Image
                  src="/bebastha_logo.jpeg"
                  alt="Logo"
                  fill
                 
                  />
            </div>
        </div> 
     

        <ul className='flex space-x-5'>
            {
                navItems.map((item)=>(
                    <li key={item.href}
                    className='text-xl'>
                       <Link href={item.href}>
                        {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
