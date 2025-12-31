import React from 'react'
import Link from "next/link"


export default function layout({children}) {
    const dashItems = [
        {label:"DashBoard", href:"/dashboard"},
        {label:"Customers", href:"/dashboard/customers"},
        {label:"Settings", href:"/dashboard/settings"},
        {label:"Transactions", href:"/dashboard/transactions"}
    ]
  return (
    <div className='min-h-screen flex ' >
        
        <div className='bg-green-400 w-1/5 pt-6 '>
            <ul className='space-y-6'>
                {
                    dashItems.map((item)=> (
                        <li key={item.href}>
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className='bg-stone-300 w-full'>
        {children}
        </div>
    </div>
  )
}
