import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/firebase-config";

const Signin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <p className="WebName">Welcome</p>
      <div className="form">
        <div className="Form">
          <h2> Login </h2>
          <form onSubmit={login}>
            <input placeholder="Email" type="email" />
            <br />
            <input placeholder="Password" type="password" />
            <br />
            <button type="submit">Sign In</button>
            {user ? loginEmail : "no"}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
