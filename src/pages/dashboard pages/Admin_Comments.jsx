import React from 'react'
import CommentsCard from '../../components/CommentsCard'

const Admin_Comments = () => {
  return (
    <>
    <h4 className='mb-4 mt-8 text-right'>التعليقات</h4>
    <div className='flex flex-col items-end'>
    <CommentsCard/>
    <CommentsCard/>
    <CommentsCard/>
    </div>
    
    </>
  )
}

export default Admin_Comments