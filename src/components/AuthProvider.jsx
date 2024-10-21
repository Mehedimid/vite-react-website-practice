import { Children, createContext, useState } from "react"

export const AuthContext = createContext(null)

const AuthProvider = () => {
    const [user, setUser] = useState()

    const authInfo = {user}

  return (
    <AuthContext.Provider value={authInfo}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider