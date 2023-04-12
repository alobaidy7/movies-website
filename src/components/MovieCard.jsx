import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {

  return (

    <Link to={`/movie/${props.movie.id}`}>
      <div className='flex flex-col w-full md:w-[300px] bg-[var(--black)] text-white shadow-xl rounded-xl hover:opacity-90 hover:cursor-pointer'>
        <img src={props.movie.image} alt="" className='w-full h-64 md:w-[300px] md:h-[350px] rounded-t-xl' />

        <div className='px-4 py-3 flex flex-row-reverse items-center justify-between'>
          <span className='bg-[var(--yellow)] py-1 px-2 text-[10px] rounded-xl'>{props.movie.category}</span>
          <h3 className='text-sm'>{props.movie.title}</h3>
        </div>

      </div>
    </Link>
  )
}

export default MovieCard