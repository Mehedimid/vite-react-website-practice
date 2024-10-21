import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebasse";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const googleLoginUser = () => {};

  const createUser = (email, password) => {};

  const signInUser = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user?.email);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      setErr(errorMessage)
    });
  };

  const logOutUser = () => {};


  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser)
      console.log(user);
    } 
  });

  const authInfo = {
    googleLoginUser,
    createUser,
    signInUser,
    logOutUser,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
