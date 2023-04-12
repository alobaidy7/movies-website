import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const New_Movie = () => {

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "general",

    },

    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required("مطلوب")
        .min(3, "العنوان قصير")
        .max(30, "يجب ان لا يتجاوز 30 حرف"),

      description: Yup.string()
        .required("مطلوب")
        .min(5, "يرجى اضافة تفاصيل اضافية")
        .max(1000, "يتجاوز النص الحد الاقصى"),

    }),

    onSubmit: async (values) => {
      try {
        await login(values);
        navigate("/", { replace: true });
      } catch (error) {
        alert("Wrong Request !");
      }
    },
  });


  return (
    <div className='bg-[var(--grey)] py-20'>
      <div class="w-full lg:w-1/2 px-8 md:px-16 mx-auto">

        <h4 className='mb-4 font-bold text-lg text-white text-right'>اضافة فيلم جديد</h4>

        <form class="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 text-right" onSubmit={formik.handleSubmit}
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="title">
              اسم الفيلم
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-right leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="عنوان الفيلم"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />

            {formik.errors.title && formik.touched.title ? (
              <p className="text-sm text-red-500 mt-1 ml-2">
                {formik.errors.title}
              </p>
            ) : null}
          </div>


          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="title">
              النوع
            </label>
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right text-sm" id="title" type="text" placeholder="Title of post">
              <option>اكشن</option>
            </select>
          </div>



          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="title">
              تفاصيل الفيلم
            </label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}></textarea>
            {formik.errors.description && formik.touched.description ? (
              <p className="text-sm text-red-500 mt-1 ml-2">
                {formik.errors.description}
              </p>
            ) : null}
          </div>

          <div class="mb-4 overflow-hidden">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="title">
              بوستر الفيلم
            </label>
            <input className='' type="file" name="image" id="image" />

          </div>

          <div class="mb-4 overflow-hidden">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="title">
              الفيلم
            </label>
            <input className='' type="file" name="video" id="video" />

          </div>

          <div class="mb-4">
            <button type='submit' className='px-8 py-2 bg-[var(--red)] text-white'>اضافة</button>

          </div>




        </form>

      </div>
    </div>
  )
}

export default New_Movie