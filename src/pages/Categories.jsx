import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  return (
    <>
  
<div className='bg-[var(--grey)] px-16 py-10'>
  <div className="flex justify-end items-center space-x-5 mb-4 text-white px-16">
        <h2 className="text-center md:text-right sm:text-lg md:text-xl lg:text-xl header-font">
        جميع الاقسام
      </h2>
     
      </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

      <Link to= '/'>
         <div className='Card bg-[url(assets/action.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>اكشن</p>
                  </div>
               </div>
      </Link>


      <Link to= '/'>
         <div className='Card bg-[url(assets/drama.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>دراما</p>
                  </div>
               </div>
      </Link>


      <Link to= '/'>
         <div className='Card bg-[url(assets/fantasy.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>فانتازي</p>
                  </div>
               </div>
      </Link>


      <Link to= '/'>
         <div className='Card bg-[url(assets/animation.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>رسوم متحركة</p>
                  </div>
               </div>
      </Link>


      <Link to= '/'>
         <div className='Card bg-[url(assets/scifi.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>خيال علمي</p>
                  </div>
               </div>
      </Link>

      <Link to= '/'>
         <div className='Card bg-[url(assets/horror.jpg)] bg-cover w-[210px] h-[200px]  md:w-[180px] md:h-[180px] lg:w-[235px] lg:h-[235px] xl:w-96 xl:h-96 rounded-[10px] relative overflow-hidden cursor-pointer'>
                <div className='absolute w-full component-bg h-full px-8 text-center text-base md:text-base top-[260px] hidden-card card-header duration-200'>
                <p className='mt-[60%] text-xl text-white'>رعب</p>
                  </div>
               </div>
      </Link>


</div>
      
       
</div>
       
     
    </>
  )
}

export default Categories;