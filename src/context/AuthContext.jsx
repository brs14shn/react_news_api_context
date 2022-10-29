import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

export const useCustomAuthContext =()=>{
  return useContext(AuthContext)
}
const AuthContextProvider = ({children}) => {

  const [currentUser,setCurrentUser] = React.useState(false)
 
const signIn = (username,password) =>{
    setCurrentUser({username,password})
  }
  console.log(currentUser);

  const values ={
    currentUser,
    signIn,
    setCurrentUser,
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
