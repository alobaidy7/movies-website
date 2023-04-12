import React from 'react'
import { Icon } from '@iconify/react';
import {Link,NavLink} from 'react-router-dom'


const AdminSidebar = () => {
  return (
    
    <div className='w-1/5 gray flex flex-col gap-3 pt-4 px-16'>
        
        <div className=''>
        <NavLink id="new-movie" to="/admin/new-movie" className={({ isActive }) =>
              isActive ? 'text-black' : 'hover:text-gray-500'
            }>
            <a href="#" className='flex flex-row-reverse items-center gap-4 py-2'>
            <h2 className='text-sm medium bg-[var(--red)] p-3 text-white'>اضافة فيلم</h2>
            </a>
            </NavLink>
        </div>
        
        <div className=''>
        <NavLink id="history" to="/admin/history" className={({ isActive }) =>
              isActive ? 'text-black' : 'hover:text-gray-500'
            }>
            <a href="#" className='flex flex-row-reverse items-center gap-4 py-2'>
            <Icon icon="system-uicons:graph-box" width="25" height="25" /> <h2 className='text-sm medium'>السجل</h2>
            </a>
            </NavLink>
        </div>


        <div className=''>
        <NavLink id="categories" to="/admin/watch-later" className={({ isActive }) =>
              isActive ? 'text-black' : 'hover:text-gray-500'
            }>
            <a href="#" className='flex flex-row-reverse items-center gap-4 py-2'>
            <Icon icon="system-uicons:boxes" width="25" height="25" />
            <h2 className='text-sm medium'>المشاهدة لاحقاً</h2>
            </a>
        </NavLink>
        </div>

        <div className=''>
        <NavLink id="comments" to="/admin/comments" className={({ isActive }) =>
              isActive ? 'text-black' : 'hover:text-gray-500'
            }>
            <a href="#" className='flex flex-row-reverse items-center gap-4 py-2'>
            <Icon icon="system-uicons:user-male-circle" width="25" height="25" />
            <h2 className='text-sm medium'>التعليقات</h2>
            </a>
            </NavLink>
        </div>

      
        

        
    </div>
  )
}

export default AdminSidebar