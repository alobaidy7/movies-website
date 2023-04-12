import React, { useContext, useState } from 'react'
import userImg from '../assets/user.jpg'
import { Popover } from "@headlessui/react";
import { Icon } from '@iconify/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { Fragment } from "react";
import { Transition } from '@headlessui/react'
import footerLogo from "../assets/footer-logo.png"

const AdminNavbar = () => {

  const navigate = useNavigate();
  const {logout} = useContext(AuthContext);
  const [isShowing, setIsShowing] = useState(false);

  const logoutHandle = ()=>{
    logout();
    navigate("/", { replace: true });
    }
  return (
    <div className='flex flex-col justify-between'>
    <header className='flex flex-row-reverse items-center justify-between bg-[var(--black)] text-[var(--white)] px-8 md:px-16 py-4'>
      
      
      
    <h1 className='text-lg font-bold'>عراق <span className='py-1 px-3 rounded-lg linear-red'>موفي</span></h1>

      <div className='hidden md:flex md:flex-row-reverse space-x-4'>
        <Link to="/" className='px-4'>الرئيسية</Link>
        <Link to="/categories">الاقسام</Link>
        <Link to="/about">الاشتراكات</Link>
        <Link to="/about">اتصل بنا</Link>
        
      </div>


      <Popover className="relative hidden sm:block">
          <Popover.Button className="outline-none">
            <div className="flex items-center space-x-3 hover:cursor-pointer text-left bg-[var(--grey)] hover:bg-[var(--black)] transition ease-in-out duration-200 px-4 py-2 rounded-full">
              <img
                src={/* isAuth?user.image:'' */ userImg}
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
              <div>
                <h4 className="text-xs md:text-sm medium">Hussein Dhia</h4>
               
              </div>

              {/*         <Icon icon="clarity:notification-line" width='25' height='25' color="#929292" />  */}
              <Icon
                icon="system-uicons:chevron-down"
                width="34"
                height="34"
                color="#929292"
              />
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 translate-y-1 -translate-x-1/3 shadow-md">
            <div className="flex flex-col">
             
              <Link to="/admin" className='w-96  blue px-4 py-4 text-sm flex justify-center gap-4 rounded bg-[var(--grey)] hover:bg-[var(--black)]'>الصفحة الشخصية</Link>

              <div className="w-96  blue px-4 py-4 text-sm flex justify-center gap-4 rounded bg-[var(--grey)] hover:bg-[var(--black)]">
                <button className='w-full' onClick={logoutHandle}>تسجيل خروج</button>
              </div>

            </div>
          </Popover.Panel>
        </Popover>

        <button onClick={() => setIsShowing((isShowing) => !isShowing)} className='block sm:hidden'><Icon icon="system-uicons:menu-hamburger" width={28} height={28}/></button>

    </header>

    <Transition
        show={isShowing}
        as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 -translate-y-200"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-500"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
      >
        <div className={`w-full h-96 text-white bg-black ${isShowing?'flex flex-col space-y-4 justify-center items-center':'hidden'}`}>
        <Link to="/" className='px-4'>الرئيسية</Link>
        <Link to="/categories">الاقسام</Link>
        <Link to="/about">الاشتراكات</Link>
        <Link to="/about">اتصل بنا</Link>
           <Link to="/admin" className='px-4 py-2 bg-[var(--grey)] text-sm'>الصفحة الشخصية</Link>
           <div className='flex space-x-5'>
             <button onClick={logout} className='px-4 py-1 bg-[var(--red)] text-sm'>تسجيل خروج</button>
           </div>
        </div>
      </Transition>


    <main>
      <Outlet/>
    </main>
   


    <footer className='bg-[var(--black)] flex justify-between px-32 py-10 text-[var(--white)] items-center  space-y-2'>
     <img src={footerLogo} alt="" className='w-64'/>
      <div className=''>
        <h2 className='text-xl text-right'>عراق موفي</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 text-center text-sm'>
          <Link to="/">الرئيسية</Link>
          <Link to="/">الاقسام</Link>
          <Link to="/">اتصل بنا</Link>
          <Link to="/">الاشتراكات</Link>
          <Link to="/">الشروط والاحكام</Link>
          <Link to="/">سياسة الخصوصية</Link>

        </div>

       
      </div>

   

      
    </footer>

    <div className='h-8 w-full bg-gray-900 text-white text-xs text-center'>
      <p className='py-2'>Ramadan Competition 2023</p>
</div>
    </div>
  )
}

export default AdminNavbar