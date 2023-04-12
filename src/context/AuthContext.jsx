import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const initialToken = JSON.parse(localStorage.getItem('token'))
  const initialUserEmail = JSON.parse(localStorage.getItem('userEmail'))

  const [userEmail, setUserEmail] = useState(initialUserEmail)

  const [token, setToken] = useState(initialToken)


  const handleSetToken = t => {

    if (t) {
      setToken(t)
      /* Cookies.set('token',t,{expires: 7}) */
      localStorage.setItem('token', JSON.stringify(t))

    } else {
      setToken(null)
      /* Cookies.remove('token') */
      localStorage.removeItem('token')

    }
  }



  const handleSetUserEmail = email => {
    if (email) {
      setUserEmail(email)
      /* Cookies.set('userEmail',email,{expires: 7}) */
      localStorage.setItem('userEmail', JSON.stringify(email))
    }

    else {
      /* Cookies.remove('userEmail') */
      localStorage.removeItem('userEmail')
      setUserEmail(null)
    }
  }

  const [user, setUser] = useState('')

  const login = async (body) => {

    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',


      }
    })

    const response = await res.json()

    if (res.ok) {
      handleSetToken(response.token)
      handleSetUserEmail(response.username)
      console.log('hi', response)
      localStorage.setItem("userData", JSON.stringify(response.username));

    } else {
      handleSetToken(null)
      handleSetUserEmail(null)
      throw Error(response.message)
      localStorage.removeItem("userData")
    }

  }


  const logout = () => {
    handleSetToken(null)
    handleSetUserEmail(null)
    localStorage.removeItem("userData")

  }





  return <AuthContext.Provider value={{ isAuth: !!token, login, logout }}>
    {children}
  </AuthContext.Provider>
}