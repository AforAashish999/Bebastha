'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
//icons
import { MdDashboard } from 'react-icons/md'
import { PiUsersFill } from 'react-icons/pi'
import { IoMdSettings } from 'react-icons/io'
import { GiTakeMyMoney } from 'react-icons/gi'

export default function SideDashBar () {
  const pathName = usePathname()
    const dashItems = [
        { icon: <MdDashboard className="text-xl" />, label: "Dashboard", href: "/" },
        { icon: <PiUsersFill className="text-xl" />, label: "Clients", href: "/clients" },
        { icon: <IoMdSettings className="text-xl" />, label: "Settings", href: "/settings" },
        { icon: <GiTakeMyMoney className="text-xl" />, label: "Transactions", href: "/transactions" }
    ]
  return (
    <div className='bg-white w-52 pt-6 border-gray-200 border-r-[1.5px] '>
      <ul className='space-y-4 px-2'>
        {dashItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center font-semibold gap-2 pl- 4 text-sm rounded-md py-2 px-2
                                     ${
                                       pathName == item.href
                                         ? ' text-[#27ac52] -translate-y-0.5  shadow-md '
                                         : 'text-gray-600 transform transition-all ease-in duration-150  hover:text-[#27ac52] hover:shadow-md  hover:-translate-y-0.5 '
                                     }`}
            >
              {item.icon} <span> {item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
