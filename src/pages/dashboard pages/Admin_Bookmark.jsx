import React,{useState} from 'react'
import MovieCard_Dashboard from '../../components/MovieCard_Dashboard'
import ReactPaginate from "react-paginate";
import { MoviesContext } from '../../context/MoviesContext';
import { useContext } from 'react';

const Admin_Bookmark = () => {

  const {movies} = useContext(MoviesContext)
  
  /* Pagination */
  let itemsPerPage = 10;
  const items = movies;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const [pageNum, setPageNum] = useState(0);

  const handlePageClick = (event) => {
    setPageNum(event.selected);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (<>
    <h4 className='mb-4 mt-8 text-right'>الافلام المحفوظة</h4>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
{currentItems.map((movie) => (
          
          <MovieCard_Dashboard movie={movie}/>

  ))}
</div>


          <ReactPaginate
            className="flex items-center gap-5 -translate-x-32 justify-center p-4 mt-8"
            pageClassName="px-3 py-1.5"
            activeClassName="bg-black page-number hover:cursor-pointer text-md page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Prev"
            renderOnZeroPageCount={null}
          />


    </>
  )
}

export default Admin_Bookmark