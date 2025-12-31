import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {
    const navItems = [
        {label:"Notification", href:"/notification"},
        {label:"Mode", href:"/mode"},
        {label:"settings", href:"/settings"},
        {label:"Register", href:"/register"}
    ]
  return (
    <nav className='w-full flex items-center justify-between px-12 py-4 bg-gray-100'>
           {/* Image */}
        {/* <div className='h-30 w-30 bg-red-500'>
            <div className='relative h-full w-full'>
                <Image
                  src="/BebasthaLogo.png"
                  alt="Logo"
                  fill
                  style={{objectFit:"cover"}}
                  />
            </div>
        </div> */}
        <div className='text-3xl text-green-500'>
            BEBASTHA
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
