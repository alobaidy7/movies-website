import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';
import { MoviesContext } from '../context/MoviesContext';
import { useContext } from 'react';


const Home = () => {
  const { isAuth } = useContext(AuthContext)
  const { movies } = useContext(MoviesContext)

  const drama = movies.filter((movie) =>
    movie.category.includes("دراما")
  );

  const action = movies.filter((movie) =>
    movie.category.includes("اكشن")
  );



  return (
    <>

      <div className='body-bg'>

        {/* Hero Section */}
        <div className='flex flex-col md:flex-row justify-center items-center h-[600px] md:h-[680px] hero-bg md:px-16 py-4 md:py-10 space-x-16 space-y-10'>

          <div className='hero-bg-inside text-white flex flex-col items-center space-y-10'>
            <h2 className='text-xl md:text-3xl lg:text-3xl font-bold text-center leading-[50px]'>استمتع بمشاهدة جميع افلامك <div className='hidden sm:block md:h-4'></div> المفضلة</h2>
            {!isAuth ? (
              <div className='flex flex-col-reverse md:flex-row items-center'>
                <button className='bg-[var(--red)] px-4 py-1 h-10 md:rounded-l-md w-full md:max-w-fit'>تسجيل</button>
                <input type="email" placeholder='ادخل بريدك الالكتروني' className='px-2 py-1 w-full md:max-w-fit h-10 text-black text-right text-sm md:rounded-r-md' />
              </div>
            ) : null
            }
          </div>


        </div>


        {/* New Movies */}
        <div className='px-16 py-10'>
          <div className="flex flex-row-reverse items-center justify-center lg:justify-start space-x-5 mb-4 text-white">
            <h2 className="sm:text-lg md:text-xl header-font">
              افلام جديدة
            </h2>

          </div>

          <Swiper
            breakpoints={{
              250: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={60}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex justify-center items-center'

          >


            {movies.map((movie) => (
              <SwiperSlide>

                <MovieCard movie={movie} />

              </SwiperSlide>

            ))}

          </Swiper>
        </div>




        {/* Action Movies */}
        <div className='px-16 py-10'>
          <div className="flex flex-row-reverse items-center justify-center lg:justify-start space-x-5 mb-4 text-white">
            <h2 className="sm:text-lg md:text-xl header-font">
              اكشن
            </h2>

          </div>

          <Swiper
            breakpoints={{
              250: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={60}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex justify-center items-center'

          >


            {action.map((movie) => (
              <SwiperSlide>

                <MovieCard movie={movie} />

              </SwiperSlide>

            ))}


          </Swiper>
        </div>



        {/* Drama Movies */}
        <div className='px-16 py-10'>
          <div className="flex flex-row-reverse items-center justify-center lg:justify-start space-x-5 mb-4 text-white">
            <h2 className="sm:text-lg md:text-xl header-font">
              دراما
            </h2>

          </div>

          <Swiper
            breakpoints={{
              250: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={60}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex justify-center items-center'

          >


            {drama.map((movie) => (
              <SwiperSlide>

                <MovieCard movie={movie} />

              </SwiperSlide>

            ))}



          </Swiper>

        </div>

      </div>

    </>
  )
}

export default Home