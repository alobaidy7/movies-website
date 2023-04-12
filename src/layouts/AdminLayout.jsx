import React,{useContext,useState} from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import userImg from '../assets/user.jpg'
import { Popover } from "@headlessui/react";
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { Fragment } from "react";
import { Transition } from '@headlessui/react'

const AdminLayout = () => {
    const navigate = useNavigate();
  const {logout} = useContext(AuthContext);
  const [isShowing, setIsShowing] = useState(false);

  const logoutHandle = ()=>{
    logout();
    navigate("/", { replace: true });
    }


  return (
    <div>
        {/* NavBar */}
        <header className='flex flex-row-reverse items-center justify-between bg-[var(--black)] text-[var(--white)] px-8 md:px-16 py-4'>
      
      
      
        <h1 className='text-md font-bold'>عراق <span className='py-1 px-3 rounded-lg linear-red'>موفي</span></h1>

      <div className='hidden md:flex space-x-4 flex-row-reverse'>
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

        <button onClick={() => setIsShowing((isShowing) => !isShowing)} className='block sm:hidden'><Icon icon="ic:baseline-telegram" color="white" height={28} width={28}/></button>

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
           <Link to="/new_post">اضافة فيلم</Link>
           <Link to="/admin" className='px-4 py-2 bg-[var(--grey)] text-sm'>لوحة التحكم</Link>
           <div className='flex space-x-5'>
             <button onClick={logout} className='px-4 py-1 bg-[var(--red)] text-sm'>تسجيل الخروج</button>
           </div>
        </div>
      </Transition>


    

    
      



        <div className='flex py-10 justify-between'>
            <AdminSidebar/>
            <div className='px-16'>
  {/* Cards */}
  <div className="cards py-4 flex gap-16 justify-end">
         <div className="inline-flex flex-col items-center justify-center w-44 h-44 gap-1 rounded bg-[var(--red)] text-white shadow-lg hover:scale-90 hover:cursor-default duration-300">
            <Icon icon="ph:users-bold" height="50" width="50" />
            <p className="extra-bold text-xl">3000</p>
            <p className="text-sm medium">الافلام المشاهدة</p>
          </div>

          <div className="inline-flex flex-col items-center justify-center w-44 h-44 gap-1 rounded bg-[var(--red)] text-white shadow-lg hover:scale-90 hover:cursor-default duration-300">
            <Icon icon="ph:users-bold" height="50" width="50" />
            <p className="extra-bold text-xl">125</p>
            <p className="text-sm medium">ساعات المشاهدة</p>
          </div>

          <div className="inline-flex flex-col items-center justify-center w-44 h-44 gap-1 rounded bg-[var(--red)] text-white shadow-lg hover:scale-90 hover:cursor-default duration-300">
            <Icon icon="ph:users-bold" height="50" width="50" />
            <p className="extra-bold text-xl">3000</p>
            <p className="text-sm medium">الافلام المحفوظة</p>
          </div>

          <div className="inline-flex flex-col items-center justify-center w-44 h-44 gap-1 rounded bg-[var(--red)] text-white shadow-lg hover:scale-90 hover:cursor-default duration-300">
            <Icon icon="ph:users-bold" height="50" width="50" />
            <p className="extra-bold text-xl">3000</p>
            <p className="text-sm medium">التعليقات</p>
          </div>

        </div>
              <Outlet/>
            </div>
            
        </div>

    </div>
  )
}

export default AdminLayout