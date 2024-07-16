'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AddMovie from './AddMovie'

const Header = () => {
const pathname = usePathname()

    //create an array of objects to represent the navigation items
    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]
    return (
        <div className="bg-yellow-400 mx-50 px-10 py-5 fixed top-0 left-0 right-0 flex items-center justify-between z-50">
          <ul className="flex gap-10">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* If the pathname equals, it will highlight in white */}
                <Link href={item.path} className={pathname === item.path ? 'text-white font-bold' : ''}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <AddMovie />
          </div>
        </div>
      )
    }

export default Header