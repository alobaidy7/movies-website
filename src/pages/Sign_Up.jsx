import React from 'react'
import { Link } from 'react-router-dom'

const Sign_Up = () => {
  return (
    <div className='bg-[var(--grey)]'>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">

          <form
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:px-10 lg:py-12 bg-[var(--white)] text-right"
          >
            <h1 className='text-xl font-bold'>تسجيل حساب</h1>

            <div>
              <label for="name" class="text-center">الاسم الكامل</label>

              <div class="relative">
                <input
                  type="text"
                  class="w-full text-right rounded-lg border-black border-2 px-4 py-3 pr-12 text-sm shadow-sm bg-[var(--white)]"
                  placeholder="ادخل اسمك"
                />

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>

            </div>

            <div>
              <label for="email" class="text-center">البريد الالكتروني</label>

              <div class="relative">
                <input
                  type="email"
                  class="w-full text-right rounded-lg border-black border-2 px-4 py-3 pr-12 text-sm shadow-sm bg-[var(--white)]"
                  placeholder="ادخل بريدك الالكتروني"
                />

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>


            <div>
              <label for="password" class="text-center">كلمة المرور</label>

              <div class="relative">
                <input
                  type="password"
                  class="w-full text-right rounded-lg border-black border-2 px-4 py-3 pr-12 text-sm shadow-sm bg-[var(--white)]"
                  placeholder="ادخل كلمة مرور"
                />

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>

            </div>

            <div className='flex justify-between'>

              <p class="text-center text-sm text-gray-500 ">
                لديك حساب؟  <Link to="/login"><a class="underline">تسجيل دخول</a></Link>
              </p>

            </div>

            <button
              type="submit"
              class="block w-full rounded-lg bg-[var(--red)] px-5 py-3 text-sm font-medium text-white"
            >
              تسجيل حساب
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign_Up