import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react'
import CommentsCard from '../components/CommentsCard'
import { AuthContext } from '../context/AuthContext'
import { MoviesContext } from '../context/MoviesContext'
import { useParams } from 'react-router-dom'

const Movie_Page = () => {

  const params = useParams();

  const [isLiked, setIsLiked] = useState(false)
  const { isAuth } = useContext(AuthContext)
  const { movies } = useContext(MoviesContext)

  return (
    <>

      <div className='flex flex-col bg-[var(--grey)] px-16 pb-10 text-right items-end'>

        <img src={movies[(params.id) - 1].image} alt="" className='w-full h-[500px]' />
        <h2 className='font-bold text-[var(--white)] text-2xl mt-6'>{movies[(params.id) - 1].title}</h2>

        <div className='mt-4'>
          <p className='text-[var(--white)] text-lg mt-2 md:pl-40'>{movies[(params.id) - 1].description}</p>
        </div>


        <div className='flex space-x-4 my-4 justify-end'>
          {/* Likes Numbers */}
          <div className='flex items-center space-x-1 text-white'>
            <button onClick={() => setIsLiked(!isLiked)}><Icon icon={`icon-park-${isLiked ? "solid" : "outline"}:like`} color="white" height={21} width={21} /></button>
            <span>12321</span>
          </div>

          {/* Comments Numbers */}
          <div className='flex items-center space-x-1 text-white'>
            <Icon icon="material-symbols:comment-outline" color="white" height={21} width={21} />
            <span>12321</span>
          </div>

        </div>


        <div className="my-4">
          <form action="" className="w-full flex flex-col items-end">
            <label className="block mb-2">
              <span className="text-white text-lg">اضافة تعليق</span>
              <hr className='my-2' />
              {isAuth ? (
                <div>
                  <textarea class="block w-56 sm:w-96 md:w-[700px] text-right mt-4 rounded px-1" rows="3"></textarea>
                  <button class="px-3 py-2 text-sm text-white bg-[var(--red)] rounded mt-4">ارسال</button>
                </div>

              ) :
                (<p className="text-white">سجل الدخول لاضافة تعليق</p>)
              }
            </label>
          </form>
        </div>




        {/* Comments Cards */}
        <CommentsCard />


      </div>
    </>
  )
}

export default Movie_Page