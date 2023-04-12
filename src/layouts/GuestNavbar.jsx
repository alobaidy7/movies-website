import { Icon } from '@iconify/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import footerLogo from "../assets/footer-logo.png"
const GuestNavbar = () => {
  const [isShowing, setIsShowing] = useState(false)

  return (


    <>

    <div className='flex flex-col justify-between'>
    <header className='flex flex-row-reverse items-center justify-between bg-[var(--black)] text-[var(--white)] px-8 md:px-16 py-5'>
      
      
      
      <h1 className='font-bold'>عراق <span className='py-1 px-3 rounded-lg linear-red'>موفي</span></h1>

      <div className='hidden md:flex md:flex-row-reverse space-x-4'>
        <Link to="/" className='px-4'>الرئيسية</Link>
        <Link to="/categories">الاقسام</Link>
        <Link to="/about">الاشتراكات</Link>
        <Link to="/about">اتصل بنا</Link>
      </div>


      <div className='hidden md:flex space-x-5'>
        <Link to="/login"><button className='px-4 py-2 rounded-md bg-[var(--grey)] text-sm'>دخول</button></Link>
        <Link to="/sign_up"><button className='px-4 py-2 rounded-md bg-[var(--red)] text-sm'>تسجيل</button></Link>
      </div>

      <button onClick={() => setIsShowing((isShowing) => !isShowing)} className='block sm:hidden'><Icon icon="system-uicons:menu-hamburger" width={28} height={28}/></button>
    </header>
    <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`w-full h-96 text-white bg-black ${isShowing?'flex flex-col space-y-4 justify-center items-center':'hidden'}`}>
        <Link to="/" className='px-4'>الرئيسية</Link>
        <Link to="/categories">الاقسام</Link>
        <Link to="/about">الاشتراكات</Link>
        <Link to="/about">اتصل بنا</Link>
           <div className='flex space-x-5'>
             <Link to="/login"><button className='px-4 py-1 bg-[var(--grey)] text-sm'>دخول</button></Link>
             <Link to="/sign_up"><button className='px-4 py-1 bg-[var(--red)] text-sm'>تسجيل حساب</button></Link>
           </div>
        </div>
      </Transition>
   


    <main>
      <Outlet/>
    </main>
   


    <footer className='bg-[var(--black)] flex flex-col md:flex-row justify-between items-center px-32 py-10 text-[var(--white)] space-y-2'>
     <img src={footerLogo} alt="" className='w-64'/>
      <div className=''>
        <h2 className='text-xl text-right hidden md:block'>عراق موفي</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 text-center sm:text-right text-sm'>
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


   
    </>
    


  )
}

export default GuestNavbar