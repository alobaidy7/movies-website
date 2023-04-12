import React from 'react'
import RemoveModal from './RemoveModal'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// if you user and comment is yours can edit and remove
// if you admin and comment is yours can edit and remove
// if you admin and comment is not yours can only remove


const CommentsCard = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <div class="flex flex-row-reverse rounded-xl bg-white p-4 col-span-12  my-2">

      <div class="mx-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full flex-shrink-0">

        <img src="https://randomuser.me/api/portraits/women/8.jpg" />

      </div>

      <div class="ml-4 ">
        <div class="flex w-full items-center justify-between">
          <p className='text-sm'>قبل 19 ساعة</p>
        </div>
        <div class="mt-4">
          <p>It's such a bright sunny day</p>

          <div class="mt-4 space-x-4">
            {isAuth ? (
              <div className='space-x-3'>
                <button className="px-4 py-2 rounded-xl bg-[var(--grey)] text-white font-medium text-xs">تعديل</button>
                <RemoveModal item={"your comment"} />
              </div>

            ) : null}


          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsCard