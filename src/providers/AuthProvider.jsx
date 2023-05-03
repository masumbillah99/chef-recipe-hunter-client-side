import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// initialize firebase authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up new users
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in existing users
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out a user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get the currently signed-in user
  // observer auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("logged in user", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // update user data
  const updateUserProfile = (authUser, name, photoUrl) => {
    return updateProfile(authUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // react-pdf for download pdf

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    logOutUser,
    updateUserProfile,
    googleSignIn,
    githubSignIn,
    resetPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

/** 
 * for github authentication
  ---steps in firebase > sign in method > github
    1. enable github sign in method
    2. paste client_id from github application
    3. paste client_secret
    4. save

    ---steps in github
    1. go your github account > settings > developer settings
    2. new github application
    3. give a unique name
    4. description
    5. your website homepage URL
    6. callback URL from firebase > sign in method > Github
    7. copy client id
    8. click "Generate a new client secret" button & copy it
*/
