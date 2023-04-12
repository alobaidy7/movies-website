import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard_Dashboard = (props) => {
  return (
    <Link to="/">
      <div className='flex flex-col w-full md:w-64 bg-[var(--black)] text-white shadow-xl rounded-xl hover:opacity-90 hover:cursor-pointer'>
        <img src={props.movie.image} alt="" className='w-full h-64 md:w-64 md:h-80 rounded-t-xl' />

        <div className='px-4 py-3 flex items-center justify-between'>
          <span className='bg-[var(--yellow)] p-1 text-xs rounded-xl'>{props.movie.category}</span>
          <h3 className='text-sm'>{props.movie.title}</h3>
        </div>


      </div>
    </Link>




  )
}

export default MovieCard_Dashboard