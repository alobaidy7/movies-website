import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("يرجى ادخال ايميل صالح للاستخدام")
        .min(10, "يرجى ادخال ايميل صالح للاستخدام")
      ,
      password: Yup.string()
        .required("ادخل كلمة المرور")
        .min(4, "يجب ان تكون اكبر من 4 رموز")
        .max(255, "كلمة المرور كبيرة جدا"),
    }),

    onSubmit: async (values) => {
      try {
        await login(values);
        navigate("/", { replace: true });
      } catch (error) {
        alert("Wrong Phone Number or Password !");
      }
    },
  });




  return (
    <>
      <div className='bg-[var(--grey)]'>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg">

            <form
              onSubmit={formik.handleSubmit}
              action=""
              className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:px-10 lg:py-12 bg-[var(--white)] text-right"
            >
              <h1 className='text-xl font-bold'>تسجيل دخول</h1>

              <div>
                <label for="email" class="text-center text-sm">البريد الالكتروني</label>

                <div class="relative">
                  <input
                    id='username'
                    type="text" //return email
                    class="w-full text-right rounded-lg border-black border-2 px-4 py-3 pr-12 text-sm shadow-sm bg-[var(--white)]"
                    placeholder="ادخل بريدك الالكتروني"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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

                {formik.errors.username && formik.touched.username ? (
                  <p className="text-sm text-red-500 mt-1 ml-2">
                    {formik.errors.username}
                  </p>
                ) : null}
              </div>

              <div>
                <label for="password" class="text-center text-sm">كلمة المرور</label>

                <div class="relative">
                  <input
                    id='password'
                    type="password"
                    class="w-full text-right rounded-lg border-black border-2 px-4 py-3 pr-12 text-sm shadow-sm bg-[var(--white)]"
                    placeholder="ادخل كلمة المرور"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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

                {formik.errors.password && formik.touched.password ? (
                  <p className="text-sm text-red-500 mt-1 ml-2">
                    {formik.errors.password}
                  </p>
                ) : null}

              </div>

              <div className='flex justify-between'>

                <p class="text-center text-sm text-gray-500 ">
                  ليس لديك حساب؟  <Link to="/sign_up"><a class="underline">تسجيل</a></Link>
                </p>

                <a href="#" className='text-sm text-gray-500'>فقدت كلمة المرور؟</a>

              </div>



              <button
                type="submit"
                class="block w-full rounded-lg bg-[var(--red)] px-5 py-3 text-sm font-medium text-white"
              >
                دخول
              </button>


            </form>
          </div>
        </div>
      </div>




    </>
  )
}

export default Login