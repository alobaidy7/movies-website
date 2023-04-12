import { useState, useContext } from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import GuestNavbar from './layouts/GuestNavbar'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Movie_Page from './pages/Movie_Page'
import Categories from './pages/Categories'
import Sign_Up from './pages/Sign_Up'
import AdminNavbar from './layouts/AdminNavbar'
import { AuthContext } from './context/AuthContext'
import AdminLayout from './layouts/AdminLayout'
import Admin_History from './pages/dashboard pages/Admin_History'
import Admin_Comments from './pages/dashboard pages/Admin_Comments'
import New_Movie from './pages/New_Movie'
import Admin_Bookmark from './pages/dashboard pages/Admin_Bookmark'



function App() {
const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
 
      <Routes>


        {isAuth?(
  <Route path="/" element={<AdminNavbar />}>

  {/* public routes */}
  <Route index element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="sign_up" element={<Sign_Up />} />
  <Route path="categories" element={<Categories />} />
  <Route path="new_movie" element={<New_Movie />} />

  <Route path="/movie" element={<Movie_Page />} > 
          <Route path=':id' element={<Movie_Page/>}/>
  </Route>

  
  {/* catch all */}
  <Route path="*" element={<ErrorPage />} />
</Route>
        ):
  (
    <Route path="/" element={<GuestNavbar />}>

    {/* public routes */}
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="sign_up" element={<Sign_Up />} />
    <Route path="categories" element={<Categories />} />

    <Route path="/movie" element={<Movie_Page />} > 
          <Route path=':id' element={<Movie_Page/>}/>
    </Route>

    
   
    {/* catch all */}
    <Route path="*" element={<ErrorPage />} />
  </Route>

  )
      }
     
        {/* Guest Routes */}
     

      {/*Auth User Routes */}


   {/* Admin Routes */}
   <Route path="/admin" element={<AdminLayout />}>
     <Route index element={<Admin_History />} />
     <Route path="history" element={<Admin_History />} />
     <Route path="comments" element={<Admin_Comments />} />
     <Route path="watch-later" element={<Admin_Bookmark />} />

{/* catch all */}
     <Route path="*" element={<ErrorPage />} />
    </Route>
    <Route path="/admin" element={<AdminNavbar />}>
      <Route path='new-movie' element={<New_Movie />} />
    </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
